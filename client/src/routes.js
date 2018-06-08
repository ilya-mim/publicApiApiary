import Base from './components/Base';
import Dashboard from './components/Dashboard';
import LoginPage from './containers/LoginPage';
import Auth from './modules/Auth';

const routes = {
    component: Base,
    childRoutes: [
        {
            path: '/',
            getComponent: (location, callback) => {
                if (Auth.isUserAuthenticated()) {
                    callback(null, Dashboard);
                } else {
                    callback(null, LoginPage);
                }
            }
        },
        {
            path: '/logout',
            onEnter: (nextState, replace) => {
                Auth.deauthenticateUser();
                replace('/');
            }
        }
    ]
};

export default routes;