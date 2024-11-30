import React, { Component } from 'react';

export default class Menu extends Component {
  render() {
    return (
      <div className="flex flex-col items-center min-h-screen p-6">
       
        <p className="text-center text-lg text-gray-700 font-semibold mt-8">
          MENU
        </p>

       
        <h1 className="text-center text-7xl mt-4 font-serif">
          Explore Our Menu
        </h1>


        <div className="container mx-auto px-10 mt-8 pt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
           
            <div className="flex flex-col items-center">
              <img
                src="/images/breakfast.webp"
                alt="Dish 1"
                className="rounded-full shadow-lg"
              />
              <p className="mt-5 font-serif font-semibold">Breakfast</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/brunch.webp"
                alt="Dish 2"
                className=" rounded-full shadow-lg"
              />
              <p className="mt-5 font-serif font-semibold">Brunch</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/lunch.webp"
                alt="Dish 3"
                className=" rounded-full shadow-lg"
              />
              <p className="mt-5 font-serif font-semibold">Lunch</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/images/coffee.webp"
                alt="Dish 4"
                className=" rounded-full shadow-lg"
              />
              <p className="mt-5 font-serif font-semibold">Coffee</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
