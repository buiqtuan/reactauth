import React from 'react';
import Firebase from 'firebase';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

export default class LoginForm extends React.Component {
    state = {
        email: '',
        password: '',
        error: ''
    };

    onLoginPress() {
        const { email, password } = this.state;

        Firebase.auth().signInWithEmailAndPassword(email, password).catch(() => {
            Firebase.auth().createUserWithEmailAndPassword(email, password).catch(() => {
                this.setState({ error: 'Authentication Failed.' });
            });
        });
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
                <CardSection>
                    <Button 
                    children='Log in' 
                    onPress={this.onLoginPress.bind(this)}
                    />
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
