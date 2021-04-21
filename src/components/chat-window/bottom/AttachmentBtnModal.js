import React from "react";
import {Icon, InputGroup, Modal} from "rsuite";
import {useModalState} from "../../../misc/custom-hooks";

const AttachmentBtnModal = () => {

    const {isOpen, open, close} = useModalState()

    return (
        <div>
            <InputGroup.Button onClick={open}>
                <Icon icon="attachment"/>
            </InputGroup.Button>

            <Modal show={isOpen} onHide={close}>

                <Modal.Header>
                    <Modal.Title>Upload files</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer>

                </Modal.Footer>

            </Modal>
        </div>
    )
}

export default AttachmentBtnModal;