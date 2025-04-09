import { BiSearch } from "react-icons/bi";

export function Input() {
  return (
    <div className="flex flex-row items-center gap-3 shadow-md border-gray-300 rounded-md px-6 py-4 w-full focus-within:border-3 focus-within:border-[#7C3AED] ">
      <BiSearch size={22} className="text-[#505059]" />
      <input type="text" placeholder="Pesquisar" className="text-[#756966]" />
    </div>
  );
}
