import React from 'react';
import Modal from 'react-modal';
import '../../assets/scss/components/ModalFeature.scss';
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery';
import PS5mw22 from '../../assets/images/yume/ps5-mw2-2.jpeg'
import PS5mw2 from '../../assets/images/yume/ps5-mw2.jpeg';
import PS4camuflado2 from '../../assets/images/yume/ps4-camuflado-2.jpeg';
import PS4camuflado from '../../assets/images/yume/ps4-camuflado.jpeg';
import PS4fifa23callofdutyvanguard from '../../assets/images/yume/ps4-fifa23-calloduty-vanguard.jpeg';
import PS4gold2 from '../../assets/images/yume/ps4-gold-2.jpeg';
import PS4gold from '../../assets/images/yume/ps4-gold.jpeg';
import PS4spiderman from '../../assets/images/yume/ps4-spiderman.jpeg';
import PS4 from '../../assets/images/yume/ps4.jpeg';

const ModalFeature = ({
  modalActive,
  closeModal,
  modalTitle,
  modalImage,
  modalDescription,
  arrayImages
}) => {

  const getImage = (imageName) => {
    switch (imageName) {
      case 'ps5-mw2-2.jpeg':
        return PS5mw22;
      case 'ps5-mw2.jpeg':
        return PS5mw2;
      case 'ps4-camuflado-2.jpeg':
        return PS4camuflado2;
      case 'ps4-camuflado.jpeg':
        return PS4camuflado;
      case 'ps4-fifa23-calloduty-vanguard.jpeg':
        return PS4fifa23callofdutyvanguard;
      case 'ps4-gold-2.jpeg':
        return PS4gold2;
      case 'ps4-gold.jpeg':
        return PS4gold;
      case 'ps4-spiderman.jpeg':
        return PS4spiderman;
      case 'ps4.jpeg':
        return PS4;
      default:
        return PS4;
    }
  }
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
          {arrayImages && (
            arrayImages.map((image, index) => {
              return (
                <Item
                  original={getImage(image)}
                  thumbnail={getImage(image)}
                  width="1024"
                  height="768"
                  key={index}
                >
                  {({ ref, open }) => (
                    <img
                      ref={ref}
                      onClick={open}
                      src={getImage(image)}
                      alt={image}
                      style={{
                        width: '100%',
                        height: 'auto',
                        maxHeight: '600px',
                      }}
                    />
                  )}
                </Item>
              )
            })
          )}
        </Gallery>
      </div>
    </Modal>
  )
}

ModalFeature.propTypes = {}

export default ModalFeature


/* 
import React, {useState} from 'react';
import Modal from 'react-modal';
import '../../assets/scss/components/ModalFeature.scss';
import 'photoswipe/dist/photoswipe.css'
import { Gallery, Item } from 'react-photoswipe-gallery';

const ModalFeature = ({
  modalActive,
  closeModal,
  modalTitle,
  modalImage,
  modalDescription,
  arrayImages
}) => {
  const [route] = useState("../../assets/images/yume/");
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
          {arrayImages.legth > 0 && (
            arrayImages.map((image, index) => {
              return (
                <Item
                original={`${route}${image}`}
                thumbnail={`${route}${image}`}
                width="1024"
                height="768"
              >
                {({ ref, open }) => (
                  <img ref={ref} onClick={open} src={`${route}${image}`} alt={`${image}${index}`}/>
                )}
              </Item>
              )
              })
          )}
        </Gallery>
      </div>
    </Modal>
  )
}

ModalFeature.propTypes = {}

export default ModalFeature */