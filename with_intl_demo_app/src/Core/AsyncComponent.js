import React, { Component } from "react";

import {AppContext} from '../Shared/Util/Contexts';
import {store} from './Store';
import AppActions from '../App/Main/AppActions';


export default function asyncComponent(getComponent) {
    class AsyncComponent extends Component {
        //static Component = null;
        state = { Component: AsyncComponent.Component };

        isComponentMounted = true;
        
        componentWillUnmount() {
            this.isComponentMounted = false;
        }

        componentDidMount() {
            this.asyncSetState();
            this.isComponentMounted = true;
        }

        asyncSetState() {
            if (this.state.Component) {
                return;
            }

            // Show app busy status when component is loading asynchronously.
            //store.dispatch(AppActions.toggleAppBusyState(true));

            getComponent().then(Component => {

                if(!this.isComponentMounted) {
                    return;
                }

                //AsyncComponent.Component = Component
                this.setState({ Component });
                // Remove app busy status when asynchronous component is loaded.
                //store.dispatch(AppActions.toggleAppBusyState(false));
            });
        }

        render() {           
            const { Component } = this.state
            if (Component) {                                                    
                return (
                    <AppContext.Consumer>
                        {appProps => {
                            const mergedProps = {...appProps, ...this.props};
                            return <Component {...mergedProps} />
                        }}
                    </AppContext.Consumer>                
                );
            }
            return null
        }
    }

    return AsyncComponent;
}



