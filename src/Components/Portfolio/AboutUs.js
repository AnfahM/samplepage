import React, { Component } from "react";

export default class AboutUs extends Component {
  render() {
    return (
      <div style={{
        backgroundImage: "url('/images/camel.svg')",
        backgroundPosition: "right bottom",
        backgroundSize: "20%",
        backgroundRepeat: "no-repeat",
    }}>
        <div className="flex flex-col md:flex-row m-28 pb-20">
          <div className="w-full md:w-1/2 justify-items-center">
            <img src="/images/menu.webp" alt="" className="w-96" />
          </div>
          <div class="w-full md:w-1/2">
            <div className="mt-12">
              <p className="text-[#040404] uppercase font-serif">ABOUT US</p>
              <h1 className="text-5xl md:text-7xl md:leading-[70px] font-[300] font-serif pt-4">
                Welocme <br />
                to NuR Cafe
              </h1>
              <p className="pt-5">
                NUR Cafe brings Arabian warmth to Manchester with hearty <br />
                breakfasts, French-inspired pastries, and halal dishes crafted
                with care. <br /> A luxurious experience awaits, whether for
                coffee or a full meal.
              </p>
              <button className="hero-button flex  items-center justify-center gap-3 font-semibold px-6 py-3 bg-[#9B3733] text-white rounded-full hover:bg-[#9c5249] mt-3">
                View Menu
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
