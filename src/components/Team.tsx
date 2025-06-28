import React from "react";
import Icon from "@/components/ui/icon";

const Team = () => {
  const teamMembers = [
    {
      name: "Волкова Шура",
      role: "Основатель, режиссёр, актриса",
      description:
        "Одна из основателей студии. Режиссёр и актриса одновременно.",
      icon: "Crown",
    },
    {
      name: "Рощин Саша",
      role: "Основатель, актёр",
      description: "Второй основатель студии. Актёр.",
      icon: "Star",
    },
    {
      name: "Миша Горковенко",
      role: "Актёр, режиссёр",
      description: "Актёр, возможно проявил себя в качестве режиссёра.",
      icon: "Camera",
    },
    {
      name: "Влад Горковенко",
      role: "Актёр",
      description: "Актёр и брат Миши.",
      icon: "Users",
    },
    {
      name: "Тимофей Щур",
      role: "Актёр, оператор",
      description: "Актёр и оператор, самый старший в группе.",
      icon: "Video",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Наша команда
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Творческие профессионалы, которые создают магию кино
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#9b87f5]/30"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#9b87f5]/10 rounded-full flex items-center justify-center mb-6">
                  <Icon
                    name={member.icon}
                    size={24}
                    className="text-[#9b87f5]"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>

                <p className="text-[#9b87f5] font-semibold mb-4">
                  {member.role}
                </p>

                <p className="text-gray-600 leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
