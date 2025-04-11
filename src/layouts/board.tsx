import profileImg from "../assets/profile.png";
import { HiPencil } from "react-icons/hi2";

import { Button } from "../components/button";
import { Input } from "../components/input";
import { Card } from "../components/card";

import { doings, dones, toDos } from "../data/data";

export function Board() {
  const items_dictionary = {
    todos: {
      title: "A fazer",
      items: toDos,
    },
    doing: {
      title: "Fazendo",
      items: doings,
    },
    dones: {
      title: "Feito",
      items: dones,
    },
  };

  return (
    <div className="flex flex-col w-full min-h-screen mt-1 rounded-tl-4xl bg-[#FBFAFF] p-12 gap-8">
      <div className="flex flex-row justify-between items-center mb-8">
        <div className="flex flex-row items-center gap-3">
          <h1 className="text-3xl font-bold">Meu Kanban</h1>
          <HiPencil className="text-[#CAB3FF] text-2xl" />
        </div>
        <img src={profileImg} alt="Profile" />
      </div>

      <div className="flex flex-row items-center gap-4 max-md:px-2">
        <Button />
        <Input />
      </div>

      <div className="grid grid-cols-3 gap-16 max-lg:grid-cols-2 max-md:grid-cols-1 max-md:gap-8">
        {items_dictionary &&
          Object.entries(items_dictionary).map(([key, item]) => (
            <div key={key} className="flex flex-col items-start">
              <h2 className="text-xl font-bold text-[#403937]">{item.title}</h2>
              <div className="flex flex-col gap-4 mt-4">
                {item.items.length > 0 ? (
                  item.items.map((children) => (
                    <Card
                      key={children.id}
                      title={children.title}
                      description={children.description}
                      badges={children.badges}
                    />
                  ))
                ) : (
                  <h3 className="text-lg text-[#756966] font-medium p-4">
                    Nenhum item!
                  </h3>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
