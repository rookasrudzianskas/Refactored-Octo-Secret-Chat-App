import React from 'react'
import {useModalState} from "../../../misc/custom-hooks";
import {Modal} from "rsuite";

const ImgBtnModal = ({src, fileName}) => {

    const { isOpen, open, close } = useModalState()

    return (
        <>
            <input type="image" alt="file" src={src} onClick={open} className="mw-100 mh-100 w-auto"/>
            <Modal show={isOpen} onHide={close}>
                <Modal.Header>
                    <Modal.Title>{fileName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <img src={src} height="100%" width="100%" alt="file"/>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <a href={src} target="_blank" rel="noopener norefferer">
                        View original
                    </a>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ImgBtnModal;