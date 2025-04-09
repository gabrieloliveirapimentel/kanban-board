import { HiPencil } from "react-icons/hi2";
import { IoFilter } from "react-icons/io5";

import profileImg from "../assets/profile.png";
import { Input } from "../components/input";

export function Board() {
  return (
    <div className="flex flex-col w-full min-h-screen mt-1 rounded-tl-4xl bg-[#FBFAFF] px-8 py-12">
      <div className="flex flex-row justify-between items-center mb-8">
        <div className="flex flex-row items-center gap-3">
          <h1 className="text-3xl font-bold">Meu Kanban</h1>
          <HiPencil className="text-[#CAB3FF] text-2xl" />
        </div>
        <img src={profileImg} alt="Profile" />
      </div>

      <div className="flex flex-row items-center gap-4">
        <button>
          <IoFilter className="text-2xl" />
          <span className="">Filtrar</span>
        </button>
        <Input />
      </div>

      <div>
        <div>
          <h2> A fazer</h2>
          <div className="bg-white p-4 rounded-md shadow-md mt-4">
            <h3 className="text-lg font-semibold">Tarefa 1</h3>
            <p className="text-gray-600">Descrição da tarefa 1</p>
          </div>
        </div>

        <div>
          <h2> A fazer</h2>
          <div className="bg-white p-4 rounded-md shadow-md mt-4">
            <h3 className="text-lg font-semibold">Tarefa 1</h3>
            <p className="text-gray-600">Descrição da tarefa 1</p>
          </div>
        </div>

        <div>
          <h2> A fazer</h2>
          <div className="bg-white p-4 rounded-md shadow-md mt-4">
            <h3 className="text-lg font-semibold">Tarefa 1</h3>
            <p className="text-gray-600">Descrição da tarefa 1</p>
          </div>
        </div>
      </div>
    </div>
  );
}
