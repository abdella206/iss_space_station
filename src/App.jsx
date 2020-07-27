import React, { useState, useEffect } from "react";
import "./App.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { Navbar } from './components/'


firebase.initializeApp({
    apiKey: "AIzaSyC8_8FDDcg9hyEjUEu-lnE3yylUXknMPbg",
    authDomain: "iss-space.firebaseapp.com"
});


const App = () => {
    const [signIn, setSignIn] = useState({ isSignedIn: false });


    const [uiConfig] = useState({
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    });


    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setSignIn({ isSignedIn: !!user });
            console.log("user", user);
        });
    }, []);



    return (
        <div className="App">
            {signIn.isSignedIn ? (
                <Navbar />
            ) : (
                    <StyledFirebaseAuth
                        uiConfig={uiConfig}
                        firebaseAuth={firebase.auth()}
                    />
                )}
        </div>
    )

}

export default App
