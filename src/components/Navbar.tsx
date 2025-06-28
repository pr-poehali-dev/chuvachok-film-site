import React from "react";
import Icon from "@/components/ui/icon";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <div className="flex items-center space-x-3">
            <img
              src="https://cdn.poehali.dev/files/db8aef40-a932-4416-a92b-c790626870be.jpeg"
              alt="Чувачок Продакшн"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-montserrat font-bold text-xl text-gray-900">
              Чувачок Продакшн
            </span>
          </div>

          {/* Навигация */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Главная
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Проекты
            </a>
            <a
              href="#team"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              Команда
            </a>
            <a
              href="#history"
              className="text-gray-700 hover:text-purple-600 font-medium transition-colors"
            >
              История создания
            </a>
          </div>

          {/* Мобильное меню */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-purple-600">
              <Icon name="Menu" size={24} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
