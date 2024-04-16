import React from 'react'
import heroImg from "../../public/images/heroImg.png"

const Hero = () => {
  return (
    <section className="hero my-24">
      <div className="container mx-auto">
        <div className="flex justify-center items-center">
          <img src={heroImg.src} alt="open gift laptop" />
        </div>
      </div>
    </section>
  );
}

export default Hero
