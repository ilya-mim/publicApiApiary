import React from 'react';
import Auth from '../modules/Auth';
import UserInfo from '../components/UserInfo';

class UserInfoPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: {},
            userInfo: {}
        };
    }

    componentDidMount() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', '/api/userInfo');
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                this.setState({ 
                    errors: {},
                    userInfo: xhr.response 
                });
            } else {
                const errors = xhr.response.errors ? xhr.response.errors : {};
                errors.summary = xhr.response.message;

                this.setState({ errors });
            }
        });
        xhr.send();
    }

    render() {
        return (
            <UserInfo 
                userInfo={this.state.userInfo} 
                errors={this.state.errors}
            />
        );
    }
}

export default UserInfoPage;