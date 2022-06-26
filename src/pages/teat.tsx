import useModal from "@hooks/useModal";
import React from "react";


const Test = () => {

  const { onOpenModal, onCloseModal, ModalPortal } = useModal()

  return (
    <>
    <button onClick={onOpenModal}>
      modal
    </button>
    <ModalPortal>
      <div>
        호수야 안녕~ 찬규야 안녕~
        <button onClick={onCloseModal}>X</button>
      </div>
    </ModalPortal>
    </>
  )
}

export default Test;