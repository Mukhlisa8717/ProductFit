import React from "react";
import productsData from "../database/data.json";

const Projects = () => {
  return (
    <section className="projects my-24">
      <div className="container mx-auto space-y-16">
        <h1 className="font-bold text-4xl text-center text-[#1E959B] leading-10">
          ПРОЕКТЫ КОМАНДЫ PRODUCTFIT
        </h1>
        <ul className="flex flex-wrap gap-y-20 justify-around gap-x-12">
          {productsData.products.map((product) => (
            <li
              key={product.id}
              className="w-96 flex flex-col items-center gap-4 rounded-[25px] shadow-large py-6 px-11"
            >
              <img src={product.image} alt={product.title} className="mb-4" />
              <h4 className="text-[#1E959B] font-bold text-base leading-5 text-center">
                {product.title}
              </h4>
              <p className="text-sm text-[#3b3b3b] leading-4 text-left">
                {product.info}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <button className="py-6 px-16 bg-transparent border border-[#1E959B] rounded-2xl shadow-small font-bold text-[#1E959B]">
            ВСЕ ПРОЕКТЫ
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
