import React from "react";
import Image from "next/image";
import openGiftImg from "../../public/images/opengiftImg.png";
import blockchain from "../../public/images/blockchain.png";
import pyton from "../../public/images/pyton.png";
import react from "../../public/images/react.png";
import link from "../../public/images/link.svg"

const Opengift = () => {
  return (
    <section className="openGift my-24">
      <div className="container mx-auto flex justify-between gap-28">
        <div>
          <div className="bg-[#f7f9fc] px-14 py-5 space-y-7 w-[488px] shadow-custom rounded-[30px] relative pt-56 ">
            <Image
              src={openGiftImg}
              alt="opengift"
              className="absolute -top-[4.375rem] left-[70px]"
            />
            <div className="flex gap-8 items-center">
              <div className="flex flex-col gap-2.5">
                <h6 className="text-base text-[#3b3b3b]">Длительность</h6>
                <h3 className="text-2xl font-bold text-[#1E959B]">10 недель</h3>
              </div>
              <hr className="w-px h-20 border border-[#1E959B]" />
              <div className="flex flex-col gap-2.5">
                <h6 className="text-base text-[#3b3b3b]">
                  Колличество спринтов
                </h6>
                <h3 className="text-2xl font-bold text-[#1E959B]">
                  20 Спринтов
                </h3>
              </div>
            </div>
            <div className="flex gap-4">
              <Image src={blockchain} alt="blockchain" />
              <Image src={pyton} alt="pyton" />
              <Image src={react} alt="react" />
            </div>
            <div className="flex gap-4 items-center justify-center">
              <Image src={link} alt="" />
              <h3 className="text-2xl font-bold leading-7 text-[#1E959B]">
                Opengift.io
              </h3>
            </div>
            <button className="py-[29px] px-[72px] bg-[#F05670] text-base text-white rounded-3xl shadow-custom">
              УЗНАТЬ СТОИМОСТЬ ПРОЕКТА
            </button>
          </div>
        </div>
        <div className="space-y-5">
          <h1 className="text-4xl text-[#1E959B] leading-10 font-bold">
            OPENGIFT – ЭТО СИСТЕМА МОНЕТИЗАЦИИ OPENSOURCE-ПРОЕКТОВ НА ОСНОВЕ
            БЛОКЧЕЙНА HYPEREDGER FABTIC.
          </h1>
          <p className="text-sm leading-4 text-[#3C3C3C]">
            К разработке платформы было привлечено более 5000 разработчиков. Ее
            интегрировали с сетью блокчейнов. Альфа-версия была запущена в
            январе 2018 года. OpenGIft был создан для решения проблем,
            унаследованных от разработки программного обеспечения. Платформа
            позволяет компаниям разделять расходы на программное обеспечение, а
            управление проектами является основной функцией, помогающей в
            сотрудничестве. <br /> <br /> Для монетизации используются
            смарт-контракты, чтобы создать пассивный, периодический потенциал
            дохода. Уникальность проекта в видении на разработку с открытым
            исходным кодом.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Opengift;
