
import {auth, database} from './Firebase';
import {store} from '../Core/Store';
import {routes} from '../Shared/Routes';

let state = store.getState();
let fbDB = database();
let fbAuth = auth();

const FirebaseActions = {
    createUser : (user) => {
        store.dispatch({
            type : 'APP_BUSY_STATE_CHANGE',
            payload : {isAppBusy : true}
        });

        fbAuth.createUserWithEmailAndPassword(user.email, user.password).then((fbuser) => {
            FirebaseActions.setUserData(user, fbuser);    
            FirebaseActions.getUserData();        
        })
            .catch((error) => {
                // auth/email-already-in-use  auth/invalid-email  auth/operation-not-allowed   auth/weak-password
                //var errorCode = error.code;
                //var errorMessage = error.message;
                
                store.dispatch({
                    type : 'CHANGE_SIGNUP_STATE',
                    payload : error
                });

                store.dispatch({
                    type : 'APP_BUSY_STATE_CHANGE',
                    payload : {isAppBusy : false}
                });
        });

    },

    login : (user) => {
        store.dispatch({
            type : 'APP_BUSY_STATE_CHANGE',
            payload : {isAppBusy : true}
        });

        fbAuth.signInWithEmailAndPassword(user.email, user.password).then((fbuser) => {
            FirebaseActions.getUserData();            
            state.HistoryReducer.history.replace(routes.dashboard.path);
        })
        .catch((error) => {
            // Handle Errors here. auth/user-disabled  auth/user-not-found  auth/invalid-email  auth/wrong-password
            //var errorCode = error.code;
            //var errorMessage = error.message;                        
            store.dispatch({
                type : 'CHANGE_SIGNIN_STATE',
                payload : error
            });

            store.dispatch({
                type : 'APP_BUSY_STATE_CHANGE',
                payload : {isAppBusy : false}
            });
            
        });
    },

    logout : () => {
        store.dispatch({
            type : 'APP_BUSY_STATE_CHANGE',
            payload : {isAppBusy : true}
        });
        fbAuth.signOut()
    },

    isAuthIdExists : () => {
        if(fbAuth.currentUser && fbAuth.currentUser.uid) {
            return true;
        }

        return false;
    },

    getUserData : (unsubsribe = false) => {  

        if(unsubsribe) {
            store.dispatch({
                type : 'APP_BUSY_STATE_CHANGE',
                payload : {isAppBusy : false}
            });            
        }

        if(unsubsribe && FirebaseActions.getUserData.subscription) {
            FirebaseActions.getUserData.subscription.off();
            FirebaseActions.getUserData.isSubsribed = false;

            store.dispatch({
                type : 'APP_BUSY_STATE_CHANGE',
                payload : {isAppBusy : false}
            });

            return;
        }

        if(!FirebaseActions.isAuthIdExists()) {
            return;
        }
        // Subsribe only once 
        if(FirebaseActions.getUserData.isSubsribed) {
            return;
        }     

        FirebaseActions.getUserData.isSubsribed = true;

        let userRef = fbDB.ref('users/' + fbAuth.currentUser.uid);
        userRef.on('value', (snapshot, error) => {
            store.dispatch({
                type : 'FIREBASE_USER_STATE_CHANGE',
                payload : snapshot.val()
            });

            store.dispatch({
                type : 'APP_BUSY_STATE_CHANGE',
                payload : {isAppBusy : false}
            });
        }, (error) => {
            let handleError = error;
        }); 
        
        FirebaseActions.getUserData.subscription = userRef;
    },

    setUserData : (userData, fbUser) => {
        if(!FirebaseActions.isAuthIdExists()) {
            return;
        }

        fbDB.ref('users/' + fbAuth.currentUser.uid).set({
            firstName : userData.firstName,
            lastName : userData.lastName,
        }, (error) => {

        }).then((fbUser) => {
            state.HistoryReducer.history.replace(routes.dashboard.path);
        });
    },

    updateUserData : (userData) => {
        if(!FirebaseActions.isAuthIdExists()) {
            return;
        }
        var userRef = fbDB.ref('users/' + fbAuth.currentUser.uid);
        userRef.update(userData);
    },

    subsribeAuthStateChange : () => {
        // Subsribe only once 
        if(FirebaseActions.subsribeAuthStateChange.isSubsribed) {
            return;
        }     

        FirebaseActions.subsribeAuthStateChange.isSubsribed = true;

        fbAuth.onAuthStateChanged((fbUser) => {
            if (fbUser) {       
                FirebaseActions.getUserData();
            }  else {
                FirebaseActions.getUserData(true);
            }        
            store.dispatch({
                type : 'FIREBASE_AUTH_STATE_CHANGE',
                payload : fbUser
            });
        });
    }
};


FirebaseActions.subsribeAuthStateChange();



export default FirebaseActions;