import React from 'react';
import {    
    Switch,
    Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';


import './App.css';
import { store, history} from '../Core/Store';
import {RoutesTemplate, RoutesTemplateComp} from '../Shared/Routes';

let baseUrl = "http://localhost/js/rt/lazy-load-routes-master/build/";



function AppTmpl () {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history} basename={baseUrl} >
                    <div>
                    { this.props.isAppBusy && <div className="loader"></div>}
                        <header className="header">
                            <nav className="navbar container">
                                <div className="navbar-brand">
                                    <Link to="/">
                                        <span className="navbar-item">
                                            Text End App
                                        </span>
                                    </Link>

                                    {this.props.loggedInUser && <a onClick={this.props.logout}>Logout</a>}

                                </div>

                                <div className="navbar-end">
                                <RoutesTemplate  isLink={1}/>
                                </div>
                            </nav>
                        </header>

                        <section className="content">
                            <Switch>
                            {RoutesTemplateComp({isLink : 0})}
                            </Switch>
                        </section>
                    </div>
            </ConnectedRouter>
        </Provider>
    )
}


export default AppTmpl;
