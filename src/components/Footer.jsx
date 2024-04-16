import React from "react";
import logo from "../../public/images/logo.png";
import phone from "../../public/images/phone.svg";
import telegram from "../../public/images/telegram.svg";
import massage from "../../public/images/massage.svg";
import entrepreneur from "../../public/images/footerImg.png";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#fcfeff]">
      <div className="container mx-auto flex justify-between items-center">
        <Image src={logo} alt="logo" />
        <ul className="space-y-5">
          <li className="text-base text-[#1E959B]">
            <Link href="/">Мобильные приложения</Link>
          </li>
          <li className="text-base text-[#1E959B]">
            <Link href="/">Главная страница</Link>
          </li>
        </ul>
        <ul className="flex gap-10 items-center">
          <li className="space-y-5">
            <h6 className="font-bold text-[#1E959B] text-base">
              Связаться с нами
            </h6>
            <Image src={phone} alt="phone number" />
          </li>
          <li>
            <Link href="https://t.me/Mukhlisa_8717">
              <Image src={telegram} alt="telegram" />
            </Link>
          </li>
          <li>
            <Link href="https://mukhlisa.saidaminova08@gmail.com">
              <Image src={massage} alt="massage" />
            </Link>
          </li>
        </ul>
        <div className="flex items-center w-[450px] gap-3">
          <Image src={entrepreneur} alt="entrepreneur" />
          <h6 className="text-[#3C3C3C]">
            Индивидуальный предприниматель Степанов Георгий Константинович
            Адрес: г. Обнинск, ул. Белкинская. 19, 136 ОГРНИП 318402700019269
            ИНН 402571298900 Банк МОСКОВСКИЙ ФИЛИАЛ АО КБ "МОДУЛЬБАНК" БИК
            044525092 К/c 30101810645250000092 Счет 40802810970010085488
          </h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
