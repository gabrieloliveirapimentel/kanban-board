import logoImg from "../assets/logo.svg";
import { FaClipboard, FaUserGroup, FaFileLines, FaGear } from "react-icons/fa6";

export function Menu() {
  return (
    <div className="flex flex-col px-12 pt-8">
      <img src={logoImg} alt="Logo" className="w-16 h-16" />

      <div className="grid gap-6 mt-20">
        <button className="flex flex-row items-center hover:cursor-pointer">
          <FaClipboard className="w-5 h-5 text-white" />
          <span className="text-lg ml-2 font-bold text-white">Boards</span>
        </button>
        <button className="flex flex-row items-center ">
          <FaUserGroup className="w-5 h-5 text-[#CAB3FF]" />
          <span className="text-lg ml-2 text-[#CAB3FF]">Equipes</span>
        </button>
        <button className="flex flex-row items-center">
          <FaFileLines className="w-5 h-5 text-[#CAB3FF]" />
          <span className="text-lg ml-2 text-[#CAB3FF]">Relatórios</span>
        </button>
        <button className="flex flex-row items-center">
          <FaGear className="w-5 h-5 text-[#CAB3FF]" />
          <span className="text-lg ml-2 text-[#CAB3FF]">Ajustes</span>
        </button>
      </div>
    </div>
  );
}
