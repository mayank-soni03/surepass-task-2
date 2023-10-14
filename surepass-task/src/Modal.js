import React, { useState } from "react";
import Mymodal from "./ShowModal";

const Modal = () => {
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false)


    return (
        <>
        <button onClick={() => setShowModal(true) } >Modal</button>
        {showModal &&<Mymodal closeModal = {closeModal} /> }
        </>
    )
}

export default Modal;