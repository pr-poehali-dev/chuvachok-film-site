import React from "react";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-purple-50">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-gray-900 mb-6 leading-tight">
          Чувачок <br />
          <span className="text-purple-600">Продакшн</span>
        </h1>

        <p className="font-open-sans text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          <span className="text-purple-700 font-semibold">
            Уникальная детская киностудия!
          </span>{" "}
          Создаём кинематографические проекты, которые остаются в памяти. От
          идеи до большого экрана — всё делают дети.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-purple-600 text-white px-8 py-4 rounded-full font-medium hover:bg-purple-700 transition-all duration-300 hover:scale-105"
          >
            <Icon name="Play" size={20} />
            Смотреть на YouTube
          </a>

          <a
            href="#about"
            className="inline-flex items-center gap-3 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-medium hover:border-purple-600 hover:text-purple-600 transition-colors"
          >
            <Icon name="ArrowDown" size={20} />
            Узнать больше
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
