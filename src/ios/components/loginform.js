import React from 'react';
import Firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

export default class LoginForm extends React.Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false
    };

    onLoginPress() {
        const { email, password } = this.state;

        this.setState({ error: '', loading: true });

        Firebase.auth().signInWithEmailAndPassword(email, password).then(
            this.onLoginSuccess.bind(this))
            .catch(() => {
            Firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                this.setState({ error: 'Authentication Failed.', loading: false });
            });
        });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false
        });
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner />;
        }

        return (<Button 
                    children='Log in' 
                    onPress={this.onLoginPress.bind(this)}
        />);
    }

    render() {
        return (
            <Card>  
                <CardSection> 
                    <Input 
                        label='Email'
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                        placeHolder='Your Email'
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        secureText
                        label='Password'
                        placeHolder='Your Password'
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                    />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text> 
                <CardSection />
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};
