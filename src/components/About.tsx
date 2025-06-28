import React from "react";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            О компании
          </h2>
          <div className="w-24 h-1 bg-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Lightbulb" size={24} className="text-purple-600" />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-xl text-gray-900 mb-2">
                  Наша история
                </h3>
                <p className="font-open-sans text-gray-600 leading-relaxed">
                  Все началось с дружбы Шуры Волковой и Саши Рощина. Они решили
                  снять фильм, и с этого момента начала строиться наша студия.
                  Первый фильм назывался "Доктор Крейзи" — мы делали его без
                  сценария и раскадровки, придумывая сюжет на ходу. Затем у нас
                  появилась команда, и недавно мы выпустили наш первый
                  масштабный фильм "Жаба Поедаба".
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Target" size={24} className="text-purple-600" />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-xl text-gray-900 mb-2">
                  Наша миссия
                </h3>
                <p className="font-open-sans text-gray-600 leading-relaxed">
                  Создавать качественный контент, который вдохновляет,
                  развлекает и заставляет думать. Каждый проект — это
                  возможность донести важное сообщение до зрителя.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Film" size={24} className="text-purple-600" />
              </div>
              <div>
                <h3 className="font-montserrat font-semibold text-xl text-gray-900 mb-2">
                  Специализация
                </h3>
                <p className="font-open-sans text-gray-600 leading-relaxed">
                  Короткометражные фильмы, документальное кино, рекламные ролики
                  и музыкальные клипы. Работаем с проектами любого масштаба — от
                  концепции до пост-продакшена.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-purple-100 to-gray-100 rounded-2xl p-8 text-center">
              <Icon
                name="Camera"
                size={80}
                className="text-purple-600 mx-auto mb-6"
              />
              <h3 className="font-montserrat font-bold text-2xl text-gray-900 mb-4">
                Творчество без границ
              </h3>
              <p className="font-open-sans text-gray-600">
                Мы верим, что каждая история заслуживает быть рассказанной. Наша
                команда профессионалов готова воплотить любую идею в жизнь.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
