import React from "react";
import Image from "next/image";
import logo from "../../public/images/logo.png";
import telegram from "../../public/images/telegram.svg";
import massage from "../../public/images/massage.svg";
import phone from "../../public/images/phone.svg";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          <Image src={logo} alt="logo" />
          <ul className="flex items-center justify-between w-1/3">
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
            <li>
              <Image src={phone} alt="phone" />
            </li>
          </ul>
          <button className="bg-[#F05670] text-white rounded-2xl py-6 px-10 font-bold leading-4">
            НАЧАТЬ ПРОЕКТ
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
