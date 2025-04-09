import { Board } from "./layouts/board";
import { Menu } from "./layouts/menu";

export function App() {
  return (
    <div className="flex flex-row">
      <Menu />
      <Board />
    </div>
  );
}
