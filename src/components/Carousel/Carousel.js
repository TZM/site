import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.css'

export default function carouselZMGC() {
  return (
    <Carousel
      type='slider'
      showIndicators={false}
      autoPlay
      showThumbs={false}
      swipeScrollTolerance={150}
    >
      <img src='http://lorempixel.com/400/200' alt='' />
      <img src='http://lorempixel.com/400/200' alt='' />
      <img src='http://lorempixel.com/400/200' alt='' />
      <img src='http://lorempixel.com/400/200' alt='' />
      <img src='http://lorempixel.com/400/200' alt='' />
      <img src='http://lorempixel.com/400/200' alt='' />
      <img src='http://lorempixel.com/400/200' alt='' />
    </Carousel>
  )
}
