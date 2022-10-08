import React, { useEffect, useState } from 'react'
import UploadButton from '../UploadButton'
import './styles.css'
const heroTitle = require('../../Media/heroTitle.png')
const planet = require('../../Media/planet.png')
const cloudOne = require('../../Media/cloudOne.png')
const cloudTwo = require('../../Media/cloudTwo.png')
const cloudThree = require('../../Media/cloudThree.png')
const bear = require('../../Media/citycarebear.png')

const metal = require('../../Media/metal.png')
const paper = require('../../Media/paper.png')
const glass = require('../../Media/glass.png')
const plastic = require('../../Media/plastic.png')

export default function Hero() {
  const [modalInfo, setModalInfo] = useState({})
  const [openModal, setOpenModal] = useState(false)

  const getMaterialImage = material => {
    console.log('material is', material)
    switch (material) {
      case 'glass':
        console.log('its glass')
        return glass
        break
      case 'metal':
        console.log('its metal')
        return metal
        break
      case 'plastic':
        console.log('its plastic')
        return plastic
        break
      case 'paper':
        console.log('its paper')
        return paper
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
      <UploadButton setOpenModal={setOpenModal} setModalInfo={setModalInfo} />
      {openModal === true && (
        <div className='modal-wrapper'>
          <div className='modal-container'>
            <div className='close-button' onClick={() => setOpenModal(false)}>
              X
            </div>
            <img className='modal-bear' src={bear} alt='3d cloud' />
                      <div className='modal-info'>
                          <p className="material-label">{modalInfo.material}</p>
              <img className='modal-material' src={getMaterialImage(modalInfo.material)} />
              <p className='modal-state'>Recyclable</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
