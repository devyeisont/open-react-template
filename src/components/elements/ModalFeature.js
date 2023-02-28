import React from 'react';
import Modal from 'react-modal';
import '../../assets/scss/components/ModalFeature.scss';
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery';
import { images } from '../../utils/images';
const ModalFeature = ({
  modalActive,
  closeModal,
  modalTitle,
  modalImage,
  modalDescription }) => {
  return (
    <Modal
      isOpen={modalActive}
      onRequestClose={closeModal}
      contentLabel={modalTitle}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: '0',
          bottom: 0,
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
        },
        content: {
          position: 'absolute',
          left: '0',
          right: '0',
          marginLeft: 'auto',
          marginRight: 'auto',
          border: '1px solid #ccc',
          background: '#151719',
          borderRadius: '4px',
          outline: 'none',
          padding: '20px',
          width: '50vw',
          borderRadius: '20px',
        },
      }}
    >
      <div>
        <button className="close-button" onClick={closeModal}>&times;</button>
        <h2 style={{
          textAlign: 'center',
        }}>
          {modalTitle}
        </h2>
        <img src={modalImage} alt={modalTitle} style={{
          width: '100%',
          height: 'auto',
          maxHeight: '600px',
        }} />
        <p style={{
          textAlign: 'center',
          marginTop: '25px',
        }}>{modalDescription}</p>
      </div>
      <div>
        <Gallery>
          <Item
            original="https://placekitten.com/1024/768?image=1"
            thumbnail="https://placekitten.com/1024/768?image=1"
            width="1024"
            height="768"
          >
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src="https://placekitten.com/1024/768?image=1" />
            )}
          </Item>
          <Item
            original="https://placekitten.com/1024/768?image=2"
            thumbnail="https://placekitten.com/1024/768?image=2"
            width="1024"
            height="768"
          >
            {({ ref, open }) => (
              <img ref={ref} onClick={open} src="https://placekitten.com/1024/768?image=2" />
            )}
          </Item>
        </Gallery>
      </div>
    </Modal>
  )
}

ModalFeature.propTypes = {}

export default ModalFeature