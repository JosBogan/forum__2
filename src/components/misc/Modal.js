import React from 'react'

const Modal = ({ setModal, Component }) => {

  const closeModal = () => {
    setModal(false)
  }

  return (
    <div 
      className="modal_background"
      onClick={closeModal}
    >
      <Component />
    </div>
  )

}

export default Modal