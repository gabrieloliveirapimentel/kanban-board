import logoImg from "../assets/logo.svg";

import phone from "../assets/tablet-portrait.svg";
import people from "../assets/people.svg";
import document from "../assets/document-text.svg";
import configuration from "../assets/cog.svg";

export function Menu() {
  return (
    <div className="flex flex-col px-10 pt-8">
      <img src={logoImg} alt="Logo" className="w-16 h-16" />

      <div className="grid gap-8 mt-20">
        <div className="flex flex-row items-center">
          <img src={phone} alt="Phone" className="w-6 h-6" />
          <span className="text-lg text-white font-bold ml-4">Boards</span>
        </div>
        <div className="flex flex-row items-center">
          <img src={people} alt="People" className="w-6 h-6" />
          <span className="text-lg text-[#CAB3FF] font-semibold ml-4">
            Equipes
          </span>
        </div>
        <div className="flex flex-row items-center">
          <img src={document} alt="Document" className="w-6 h-6" />
          <span className="text-lg text-[#CAB3FF] font-semibold ml-4">
            Relatórios
          </span>
        </div>
        <div className="flex flex-row items-center">
          <img src={configuration} alt="Configuration" className="w-6 h-6" />
          <span className="text-lg text-[#CAB3FF] font-semibold ml-4">
            Ajustes
          </span>
        </div>
      </div>
    </div>
  );
}
