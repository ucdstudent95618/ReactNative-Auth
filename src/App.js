import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm  from './components/LoginForm';

class App extends Component {
    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyAhZSUz_vSmGE6JgfNTzaXcHlEFISpOeZ4',
            authDomain: 'auth-d3a8e.firebaseapp.com',
            databaseURL: 'https://auth-d3a8e.firebaseio.com',
            projectId: 'auth-d3a8e',
            storageBucket: 'auth-d3a8e.appspot.com',
            messagingSenderId: '1130388714'
        });
    }

    render (){
        return(
            <View>
                <Header headerText="Authentication"/>
                <LoginForm />
            </View>
        )
    }
};

export default App;