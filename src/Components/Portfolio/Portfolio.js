import React, { Component } from 'react'

export default class Portfolio extends Component {
  render() {
    return (
      <div className="overflow-x-hidden">
        <div className="h-screen w-screen overflow-hidden">
          <video
            className="min-h-full min-w-full object-cover"
            src="https://foodo-web-videos.s3.eu-west-2.amazonaws.com/nur-cafe-restaurant-video.mp4"
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
          <div className="absolute top-8 left-28 head-container flex w-full md:w-2/3 h-full flex-col justify-center items-start gap-7 px-3 md:px-0">
            <h1 className="head-hero font-serif text-3xl w-full sm:text-5xl md:text-8xl md:leading-[110px] text-center md:text-start text-background text-white">
              The Love <br />
              Language of <br />
              Arabian Hospitality
            </h1>
            <button className="hero-button flex font-playfair items-center justify-center gap-3 font-semibold px-6 py-4 uppercase bg-white text-black rounded-full hover:bg-[#9c5249] hover:text-white">
              VIEW MENU
            </button>
          </div>
        </div>
      </div>
    )
  }
}
