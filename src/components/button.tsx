import { IoFilter } from "react-icons/io5";

export function Button() {
  return (
    <button className="grid gap-4 items-center h-full">
      <IoFilter className="text-2xl" />
      <span className="">Filtrar</span>
    </button>
  );
}
