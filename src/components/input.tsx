import { BiSearch } from "react-icons/bi";

export function Input() {
  return (
    <div className="flex flex-row items-center gap-3 border border-gray-300 rounded-md px-6 py-4 w-full shadow-sm focus:border-[#CAB3FF] focus:border-2">
      <BiSearch />
      <input type="text" placeholder="Pesquisar" />
    </div>
  );
}
