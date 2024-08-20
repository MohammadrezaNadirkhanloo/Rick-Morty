import { FaMoon, FaSun } from "react-icons/fa6";
import ShowLike from "./ShowLike";

function Header({ handelTheme, theme }) {
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
          <ChangeTheme data={handelTheme} />
        </div>
      </div>
    </>
  );
}

export default Header;

function ChangeTheme({ data }) {
  return (
    <div>
      <label className="swap swap-rotate btn btn-ghost btn-circle">
        <input onClick={data} type="checkbox" className="theme-controller " />
        <FaSun className="swap-off fill-current" size={20} />
        <FaMoon className="swap-on fill-current" size={20} />
      </label>
    </div>
  );
}
