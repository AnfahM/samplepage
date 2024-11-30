import React, { Component } from 'react'
import Portfolio from './Portfolio'
import AboutUs from './AboutUs'
import Menu from './Menu'
import Toppicks from './Toppicks'

export default class Home extends Component {
  render() {
    return (
      <div  className="bg-[#F7F4ED]" >
        <Portfolio/>
        <AboutUs/>
        <Menu/>
        <Toppicks/>
      </div>
    )
  }
}
