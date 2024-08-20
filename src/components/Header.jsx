import { FaMoon, FaSun } from "react-icons/fa6";
import ShowLike from "./ShowLike";

function Header({ theme, children }) {
  return (
    <>
      <div
        className={`navbar my-3 rounded-2xl justify-between px-3 shadow-xl ${
          theme === "dim" ? "bg-gray-700" : "bg-gray-100"
        }`}
      >
        <a className="text-xl">Rick & Morty</a>
        <div className="flex items-center gap-1">
          <ShowLike />
          {children}
        </div>
      </div>
    </>
  );
}

export default Header;

export function ChangeTheme({ handelTheme }) {
  return (
    <div>
      <label className="swap swap-rotate btn btn-ghost btn-circle">
        <input
          onClick={handelTheme}
          type="checkbox"
          className="theme-controller "
        />
        <FaSun className="swap-off fill-current" size={20} />
        <FaMoon className="swap-on fill-current" size={20} />
      </label>
    </div>
  );
}
