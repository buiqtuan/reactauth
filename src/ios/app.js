import React from 'react';
import { View } from 'react-native';
import Firebase from 'firebase';
import { Header, Spinner, Button, Card } from './components/common';
import LoginForm from './components/loginform';

export default class App extends React.Component {
    state = { 
        loggedIn: null 
    };

    componentWillMount() {
        Firebase.initializeApp({
            apiKey: 'AIzaSyB8s-GDdt18PMErXXgHKkAwjE_cOKxX_LM',
            authDomain: 'reactauth-48f1b.firebaseapp.com',
            databaseURL: 'https://reactauth-48f1b.firebaseio.com',
            projectId: 'reactauth-48f1b',
            storageBucket: 'reactauth-48f1b.appspot.com',
            messagingSenderId: '182672736736'
        });

        Firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <View style={styles.buttonLogout}>      
                        <Button onPress={() => { Firebase.auth().signOut(); }}>
                            Log out
                        </Button>
                    </View>   
                );
            case false:
                return (<LoginForm />);
            default :
                return (<Spinner size='large' />);
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    buttonLogout: {
        height: 45,
    }
};

