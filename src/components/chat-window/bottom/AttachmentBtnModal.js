import React, {useState} from "react";
import {Button, Icon, InputGroup, Modal, Uploader} from "rsuite";
import {useModalState} from "../../../misc/custom-hooks";

const MAX_FILE_SIZE = 1000 * 1024 * 5;

const AttachmentBtnModal = () => {

    const {isOpen, open, close} = useModalState();

    const [fileList, setFileList] = useState([]);

    const onchange = (fileArr) => {
        const filtered = fileArr.filter(el => el.blobFile.size <= MAX_FILE_SIZE).slice(0, 5);
    }

    return (
        <>
            <InputGroup.Button onClick={open}>
                <Icon icon="attachment"/>
            </InputGroup.Button>

            <Modal show={isOpen} onHide={close}>

                <Modal.Header>
                    <Modal.Title>Upload files</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Uploader
                        autoUpload={false}
                        action=""
                        fileList={fileList}
                        onChange={onchange}
                        multiple
                        listType="picture-text"
                    />
                </Modal.Body>
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