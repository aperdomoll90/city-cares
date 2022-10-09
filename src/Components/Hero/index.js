import React, { useEffect, useState } from 'react'
import UploadButton from '../UploadButton'
import './styles.css'
const heroTitle = require('../../Media/heroTitle.png')
const planet = require('../../Media/planet.png')
const cloudOne = require('../../Media/cloudOne.png')
const cloudTwo = require('../../Media/cloudTwo.png')
const cloudThree = require('../../Media/cloudThree.png')
const bear = require('../../Media/citycarebear.png')
const seatingFrenchie = require('../../Media/seatingFrenchie.png')

const modalGlass = require('../../Media/glass.png')
const modalMetal = require('../../Media/metal.png')
const modalPlastic = require('../../Media/plastic.png')
const modalPaper = require('../../Media/paper.png')

export default function Hero() {
  const [modalInfo, setModalInfo] = useState({})
  const [openModal, setOpenModal] = useState(false)
  const [imageSent, setimageSent] = useState({})

  const getMaterialImage = material => {
    switch (material) {
      case 'glass':
        return modalGlass
        break
      case 'metal':
        return modalMetal
        break
      case 'plastic':
        return modalPlastic
        break
      case 'paper':
        return modalPaper
        break
      default:
        console.log('Sorry!!!')
    }
  }

  return (
    <section id='hero-wrapper'>
      <img className='hero-title' src={heroTitle} alt='Hero Title' />
      <p className='hero-comment'>Upload a picture to see where should your waste go!</p>
      <div className='hero-image-container'>
        <img className='planet' src={planet} alt='3d cartoon planet' />
        <img className='cloudOne' src={cloudOne} alt='3d cloud' />
        <img className='cloudTwo' src={cloudTwo} alt='3d cloud' />
        <img className='cloudThree' src={cloudThree} alt='3d cloud' />
      </div>
      <UploadButton setOpenModal={setOpenModal} setModalInfo={setModalInfo} setimageSent={setimageSent} />
      {openModal === true && (
        <div className='modal-wrapper'>
          <div className='modal-container'>
            <div className='close-button' onClick={() => setOpenModal(false)}>
              X
            </div>
            <img className='res-img' src={imageSent} alt='Image sent' />

            <img className='modal-mascot' src={modalInfo.recyclable ? bear : seatingFrenchie} alt='3d cloud' />
            <div className='modal-info'>
              <p className='material-label'>{modalInfo.recyclable ? `${modalInfo.material}:`: 'Sorry:'}</p>
              {modalInfo.recyclable ? <img className='modal-material' src={getMaterialImage(modalInfo.material)} /> : <p className='modal-material-text'> I don't know, probably compost... check with an adult </p>}

              <p className='modal-state'>{modalInfo.recyclable ? 'Recyclable' : 'Not Recyclable'} </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
