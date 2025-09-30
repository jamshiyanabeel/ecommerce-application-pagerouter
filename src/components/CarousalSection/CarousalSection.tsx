'use client'
import React from 'react'
import { Carousel } from 'react-bootstrap'

function CarousalSection() {
  return (
    <div>
      <Carousel>
      <Carousel.Item>
        <img className="d-block w-100 h-10" src="./images/image3.jpg" alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100 h-10" src="./images/image1.jpg" alt="Second slide" />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default CarousalSection