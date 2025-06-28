import React from "react";
import Icon from "@/components/ui/icon";

const Projects = () => {
  const projects = [
    {
      title: "Жаба поедаба",
      genre: "Триллер",
      description:
        "Захватывающий триллер, построенный на старой истории. Мрачная атмосфера и неожиданные повороты сюжета.",
      status: "Завершён",
      icon: "Camera",
      color: "bg-red-500",
      trailerUrl: "https://youtu.be/lWK00Fb6WRk?si=0aI3DZw9THoT09oY",
    },
    {
      title: "Граф Табуреткин",
      genre: "Комедия",
      description:
        "Весёлая короткометражка о Графе, которому всегда не нравится то, что пишут про него в газетах.",
      status: "Завершён",
      icon: "Smile",
      color: "bg-yellow-500",
    },
    {
      title: "Король Фон Чарли",
      genre: "Комедийный сериал",
      description:
        "Комедийный сериал о Пуделе Короле Фон Чарли. Забавные приключения королевского питомца.",
      status: "В разработке",
      icon: "Crown",
      color: "bg-purple-500",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-gray-900 mb-6">
            Наши <span className="text-purple-600">Проекты</span>
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-2xl mx-auto">
            От триллеров до комедий — каждый проект создаётся с особым вниманием
            к деталям
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`${project.color} p-3 rounded-full`}>
                  <Icon name={project.icon} size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-xl text-gray-900">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-500 font-medium">
                    {project.genre}
                  </span>
                </div>
              </div>

              <p className="font-open-sans text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center justify-between">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === "В разработке"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {project.status}
                </span>
                <div className="flex items-center gap-2">
                  {project.trailerUrl && (
                    <a
                      href={project.trailerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded-full text-sm font-medium hover:bg-red-700 transition-colors"
                    >
                      <Icon name="Play" size={14} />
                      Трейлер
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
