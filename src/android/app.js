import React from 'react';
import { View } from 'react-native';
import Firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/loginform';

export default class App extends React.Component {
    componentWillMount() {
        Firebase.initializeApp({
            apiKey: 'AIzaSyB8s-GDdt18PMErXXgHKkAwjE_cOKxX_LM',
            authDomain: 'reactauth-48f1b.firebaseapp.com',
            databaseURL: 'https://reactauth-48f1b.firebaseio.com',
            projectId: 'reactauth-48f1b',
            storageBucket: 'reactauth-48f1b.appspot.com',
            messagingSenderId: '182672736736'
        });
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                <LoginForm />
            </View>
        );
    }
}
