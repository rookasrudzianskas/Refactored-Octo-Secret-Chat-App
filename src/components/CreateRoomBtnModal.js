import React, {useCallback, useRef, useState} from "react";
import {Alert, Button, ControlLabel, Form, FormControl, FormGroup, Icon, Modal, Schema} from "rsuite";
import {useModalState} from "../misc/custom-hooks";
import firebase from 'firebase/app';
import {database, auth} from "../misc/firebase";

const { StringType } = Schema.Types;

const modal = Schema.Model({
    name: StringType().isRequired('Chat name is Required'),
    description: StringType().isRequired('Description name is Required'),
})

const INITIAL_FORM = {
    name: '',
    description: '',
}

const CreateRoomBtnModal = () => {

    const {isOpen, open, close} = useModalState();
    const [formValue, setFormValue] = useState(INITIAL_FORM);
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef();

    const onFormChange = useCallback(value => {
        setFormValue(value);
    }, []);

    const onSubmit = async () => {
        if(!formRef.current.check()){
            return;
        }
        setIsLoading(true);

        const newRoomdata = {
            ...formValue,
            createdAt: firebase.database.ServerValue.TIMESTAMP,
            admins: {
                [auth.currentUser.uid] : true,
            }
        }

        try {
            await database.ref('rooms').push(newRoomdata);



            setIsLoading(false);
            setFormValue(INITIAL_FORM);
            close();

            Alert.info(`${formValue.name} room has been created`, 4000);

        } catch (err) {
            setIsLoading(false);
            Alert.error(err.message, 4000);
        }

    }

    return (
        <div className="mt-1">
            <Button block color="green" onClick={open}>
                <Icon icon="creative"/> Create new chat room
            </Button>

            <Modal show={isOpen} onHide={close}>
                <Modal.Header>
                    <Modal.Title>New chat room</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form fluid onChange={onFormChange} formValue={formValue} model={modal} ref={formRef}>
                        <FormGroup>
                            <ControlLabel>Room name</ControlLabel>
                            <FormControl name="name" placeholder="Enter your chat room name" />
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>Description</ControlLabel>
                            <FormControl componentClass="textarea" rows={5} name="description" placeholder="Enter your room description" />
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button block appearance="primary" onClick={onSubmit} disabled={isLoading}>
                        Create new chat room
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default CreateRoomBtnModal;