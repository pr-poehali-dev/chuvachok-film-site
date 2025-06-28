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
      title: "Граф Табуреткин",
      description: "Постер комедийного фильма",
      image:
        "https://cdn.poehali.dev/files/bbdf6fc9-9ad5-463e-b7b7-411b452bee59.jpeg",
      category: "Постеры",
      project: "Граф Табуреткин",
    },
    {
      id: 3,
      title: "Король Фон Чарли",
      description: "Кадр из сериала",
      image:
        "https://cdn.poehali.dev/files/e1d4d44d-1c24-4120-83fc-543ccb2677b6.jpeg",
      category: "Кадры",
      project: "Король Фон Чарли",
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
