import React from "react";
import {Button, Icon, InputGroup, Modal} from "rsuite";
import {useModalState} from "../../../misc/custom-hooks";

const AttachmentBtnModal = () => {

    const {isOpen, open, close} = useModalState()

    return (
        <>
            <InputGroup.Button onClick={open}>
                <Icon icon="attachment"/>
            </InputGroup.Button>

            <Modal show={isOpen} onHide={close}>

                <Modal.Header>
                    <Modal.Title>Upload files</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                    <Button block>
                        Send to chat
                    </Button>
                    <div className="text-right mt-2">
                        <small>* only files less than 5mb are allowed</small>
                    </div>
                </Modal.Footer>

            </Modal>
        </>
    )
}

export default AttachmentBtnModal;