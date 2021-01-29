import React from 'react'

const Modal = ({ setModal, Component, misc }) => {

  const closeModal = () => {
    setModal(false)
  }

  return (
    <div 
      className="modal_background"
      onClick={closeModal}
    >
      {console.log('misc', misc)}
      <Component setModal={setModal} misc={misc}/>
    </div>
  )

}

export default Modal