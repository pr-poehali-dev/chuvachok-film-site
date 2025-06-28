import React from "react";
import Icon from "@/components/ui/icon";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Жаба поедаба",
      description: "Концепт-арт главного персонажа триллера",
      image:
        "https://cdn.poehali.dev/files/74a1a3b8-52cd-400b-9ea1-f88bda7bd434.png",
      category: "Концепт-арт",
      project: "Жаба поедаба",
    },
    {
      id: 2,
      title: "Портрет в контражуре",
      description: "Игра света и тени в портретной съемке",
      image:
        "https://cdn.poehali.dev/files/15c6f41e-6e36-4efc-8b98-f59f9d1e19c3.jpeg",
      category: "Фотография",
      project: "Портретная серия",
    },
    {
      id: 3,
      title: "Минималистичный кадр",
      description: "Чистая композиция с акцентом на форму",
      image:
        "https://cdn.poehali.dev/files/fc838896-89a1-477f-a7bc-f77faba209f6.jpeg",
      category: "Фотография",
      project: "Портретная серия",
    },
    {
      id: 4,
      title: "Арт-композиция",
      description: "Экспериментальная работа с цветом и формой",
      image:
        "https://cdn.poehali.dev/files/499d80bc-55fb-49fc-b237-6d2fa53772c1.png",
      category: "Арт",
      project: "Экспериментальная серия",
    },
  ];

  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            <span className="text-purple-600">Галерея</span> работ
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-2xl mx-auto">
            Визуальные материалы наших проектов — от концепт-артов до финальных
            кадров
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <Icon
                    name="Eye"
                    size={32}
                    className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-purple-600 text-white text-sm font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="font-open-sans text-gray-600 mb-3">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-sm text-purple-600 font-medium">
                  <Icon name="Film" size={16} />
                  {item.project}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
