import React from "react";
import Image from "next/image";
import work from "../../public/images/word.png";

const Work = () => {
  return (
    <section className="work my-24">
      <div className="container mx-auto flex justify-between items-center">
        <Image src={work} alt="" className="w-1/2" />
        <div className="flex flex-col items-center justify-center gap-y-12">
          <div className="space-y-8">
            <h1 className="font-bold text-4xl text-[#1E959B]">
              НАЧНЕМ РАБОТУ НАД ВАШИМ ІТ-ПРОЕКТОМ ЧЕРЕЗ 24 ЧАСА
            </h1>
            <p className="text-sm text-[#3C3C3C]">
              Проектируем, запускаем и сопровождаем IT-проеты любой сложности
            </p>
          </div>
          <button className="bg-[#F05670] text-white font-bold py-9 px-14 rounded-3xl text-2xl hover:shadow-small">
            ОСТАВИТЬ ЗАЯВКУ
          </button>
        </div>
      </div>
    </section>
  );
};

export default Work;
