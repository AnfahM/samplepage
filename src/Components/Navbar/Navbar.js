import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="w-11/12 flex justify-center absolute">
          <div className="bg-white/30 gap-8 flex mt-7 rounded-full">
            <a className="text-white font-semibold mb-5 mt-5 ml-8" href="/">
              HOME
            </a>
            <a className="text-white font-semibold mb-5 mt-5 ml-8" href="/">
              MENU
            </a>
            <a className="text-white  mb-1 mt-1 ml-5" href="/">
              <img src="/images/Nur.svg" alt="" />
            </a>
            <a className="text-white font-semibold mb-5 mt-5 ml-8" href="/">
              RESERVATIONS
            </a>
            <a
              className="text-white font-semibold mb-5 mt-5 ml-8 mr-8"
              href="/"
            >
              CONTACT
            </a>
          </div>
        </div>
      </div>
    );
  }
}
