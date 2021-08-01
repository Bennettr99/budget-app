import React from 'react';
import { withOktaAuth } from '@okta/okta-react';
import { IOktaContext } from '@okta/okta-react/bundles/types/OktaContext';
import { Button } from 'antd';

class LoginComponent extends React.Component<IOktaContext> {
    login = async () => {
        this.props.oktaAuth.signInWithRedirect({ originalUri: '/home' });
    }

    render() {
        if (!this.props.authState) {
            return (
                <div>Loading authentication...</div>
            );
        } else if (!this.props.authState.isAuthenticated) {
            return (
                <div>
                    <Button onClick={this.login}>Login</Button>
                </div>
            );
        }
    }
}

export const Login = withOktaAuth(LoginComponent);

