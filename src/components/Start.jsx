import React from "react";
import startImg from "../../public/images/startImg.png";
import Image from "next/image";

const Start = () => {
  return (
    <section className="startBanner bg-[#1E959B] relative my-24">
      <div className="container mx-auto flex items-center h-[481px]">
        <div className=" space-y-10">
          <div className=" space-y-4">
            <h1 className="font-bold text-4xl text-white">НАЧНЕМ ПРОЕКТ?</h1>
            <p className="text-base text-[#F8FFFF] leading-4">
              Усилим Вашу комунду и запустим проект быстрее!
            </p>
          </div>
          <button className="bg-[#F8FFFF] text-[#1E959B] font-bold p-6 rounded-2xl">
            УЗНАТЬ СТОИМОСТЬ ПРОЭКТА
          </button>
        </div>
        <Image src={startImg} alt="start img" className="absolute right-0" />
      </div>
    </section>
  );
};

export default Start;
