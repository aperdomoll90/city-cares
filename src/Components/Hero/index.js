import React, { useEffect, useState } from 'react'
import UploadButton from '../UploadButton'
import './styles.css'
const heroTitle = require('../../Media/heroTitle.png')
const planet = require('../../Media/planet.png')
const cloudOne = require('../../Media/cloudOne.png')
const cloudTwo = require('../../Media/cloudTwo.png')
const cloudThree = require('../../Media/cloudThree.png')
const bear = require('../../Media/citycarebear.png')

export default function Hero() {
  const [modalInfo, setModalInfo] = useState([])
  const [openModal, setOpenModal] = useState(false)

  return (
<<<<<<< HEAD
    <section id="hero-wrapper">
      <img className="hero-title" src={heroTitle} alt="Hero Title" />
      <p className="hero-comment">
        Upload a picture to see where should your waste go!
      </p>
      <div className="hero-image-container">
        <img className="planet" src={planet} alt="3d cartoon planet" />
        <img className="cloudOne" src={cloudOne} alt="3d cloud" />
        <img className="cloudTwo" src={cloudTwo} alt="3d cloud" />
        <img className="cloudThree" src={cloudThree} alt="3d cloud" />
      </div>
      <UploadButton />

      <div className="logo"></div>
=======
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
          </div>
        </div>
      )}
>>>>>>> f56917fdf0ac9334117c421c9753e24c84ecb9f3
    </section>
  )
}
