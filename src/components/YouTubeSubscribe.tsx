import React from "react";
import Icon from "@/components/ui/icon";

const YouTubeSubscribe = () => {
  return (
    <section className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <Icon name="Youtube" size={64} className="text-white mx-auto mb-4" />
          <h2 className="text-4xl font-bold text-white mb-4">
            Поддержи наше творчество! 🎬
          </h2>
          <p className="text-xl text-red-100 mb-2">
            Подпишись на наш YouTube канал и будь в курсе всех новинок
          </p>
          <p className="text-lg text-red-200">
            Твоя подписка помогает нам создавать ещё больше качественного
            контента
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-red-50 transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2">
            <Icon name="Youtube" size={24} />
            Подписаться на канал
          </button>

          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-red-600 transition-all duration-300 hover:scale-105 flex items-center gap-2">
            <Icon name="Bell" size={24} />
            Включить уведомления
          </button>
        </div>

        <div className="mt-8 flex justify-center items-center gap-6 text-red-100">
          <div className="flex items-center gap-2">
            <Icon name="Users" size={20} />
            <span>Присоединяйся к сообществу</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="Heart" size={20} />
            <span>Поддержи творчество</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSubscribe;
