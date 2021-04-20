import React from "react";
import firebase from 'firebase/app';
import 'rsuite/dist/styles/rsuite-default.css';
import {Container, Grid, Row, Col, Panel, Button, Icon, Alert} from 'rsuite';
import { auth, database } from '../misc/firebase';


/* eslint-disable */

const SingIn = () => {

    const signInWithProvider = async (provider) => {
        try {
            const {additionalUserInfo, user} = await auth.signInWithPopup(provider);

            if(additionalUserInfo.isNewUser) {
                await database.ref(`/profiles/${user.uid}`).set({
                    name: user.displayName,
                    createdAt: firebase.database.ServerValue.TIMESTAMP
                })
            }
            Alert.success("Signed In", 4000);
        }catch (err) {
            Alert.error(err.message, 4000);
        }

    }

    const onFacebookSignIn = () => {
        signInWithProvider(new firebase.auth.FacebookAuthProvider())
    };
    const onGoogleSignIn = () => {
        signInWithProvider(new firebase.auth.GoogleAuthProvider())
    };


    return (
        <Container>
            <Grid className="mt-page">
                <Row>
                    <Col xs={24} md={12} mdOffset={6}>
                        <Panel>
                            <div className="text-center">
                                <h2>Welcome to the Secret Chat</h2>
                                <p>Super Secret chat platform for developers</p>
                            </div>
                            <div className="mt-3">
                                <Button block color="blue" onClick={onFacebookSignIn}>
                                    <Icon icon="facebook"/> Continue with Facebook
                                </Button>
                                <Button block color="green" onClick={onGoogleSignIn}>
                                    <Icon icon="google"/> Continue with Google
                                </Button>
                            </div>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
    </Container>
    );
};

export default SingIn;