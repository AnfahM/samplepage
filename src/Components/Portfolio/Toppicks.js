import React, { Component } from 'react';

export default class Toppicks extends Component {
  render() {
    return (
      <div className="flex flex-col items-center min-h-screen p-6">
        <p className="text-center text-lg text-gray-700 font-semibold mt-8">
          Our Top Picks
        </p>

        <h1 className="text-center text-7xl mt-4 font-serif">
          Monthly Highlights
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 relative mt-16 pb-28">
          <div className="flex flex-col items-center">
            <img
              src="/images/adanakebab.webp"
              alt="Highlight 1"
              className="rounded-lg shadow-lg"
            />
            <p className="mt-2 font-medium">Highlight 1</p>
          </div>

          <div className="flex flex-col items-center relative top-24">
            <img
              src="/images/mezeplatter.webp"
              alt="Highlight 2"
              className="rounded-lg shadow-lg"
            />
            <p className="mt-2 font-medium">Highlight 2</p>
          </div>

          <div className="flex flex-col items-center">
            <img
              src="/images/becklava.webp"
              alt="Highlight 3"
              className="rounded-lg shadow-lg"
            />
            <p className="mt-2 font-medium">Highlight 3</p>
          </div>

          <div className="flex flex-col items-center relative top-24">
            <img
              src="/images/kebabplatter.webp"
              alt="Highlight 4"
              className="rounded-lg shadow-lg"
            />
            <p className="mt-2 font-medium">Highlight 4</p>
          </div>
        </div>
      </div>
    );
  }
}
