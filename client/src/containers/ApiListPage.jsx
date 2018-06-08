import React from 'react';
import Auth from '../modules/Auth';
import ApiList from '../components/ApiList';

class ApiListPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: {},
            apiList: []
        };
    }

    componentDidMount() {
        const xhr = new XMLHttpRequest();
        xhr.open('get', '/api/userApiList');
        xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
        xhr.responseType = 'json';
        xhr.addEventListener('load', () => {
            if (xhr.status === 200) {
                this.setState({ 
                    errors: {},
                    apiList: xhr.response 
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
            <ApiList
                apiList={this.state.apiList}
                errors={this.state.errors}
            />
        );
    }
}

export default ApiListPage;