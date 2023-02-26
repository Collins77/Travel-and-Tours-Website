import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const ServicesData = [
    {
        imgUrl: weatherImg,
        title: "Multi-Day packages",
        desc: "Excursions that are spread out across several days with overnight stays as part of the tours.",
    },
    {
        imgUrl: guideImg,
        title: "One Day Tours",
        desc: "These include treks, hikes and adventures in a day that is full of fun and amazing discoveries.",
    },
    {
        imgUrl: customizationImg,
        title: "Hotel Reservations",
        desc: "We have partnered with the best hotels around to ensure that our clients get the best deals.",
    },
]

const ServiceList = () => {
  return <>
  {
    ServicesData.map((item,index)=> <Col lg='3' md='6' sm='12' className='mb-4' key={index}><ServiceCard item={item}/></Col>)
  }
  </>
}

export default ServiceList