import { FaCircleArrowDown } from "react-icons/fa6";
import { episodes } from "../../data/data.js";
function Episodes({ theme }) {
  const datas = episodes;
  return (
    <div
      className={`${
        theme === "dim" ? "bg-gray-700/50" : "bg-gray-100/50"
      } p-4 rounded-2xl shadow-md`}
    >
      <div className="flex items-center justify-between mb-6">
        <p className="font-bold text-2xl">List of Episodes:</p>
        <FaCircleArrowDown size={20} className="cursor-pointer" />
      </div>
      <div className="space-y-2">
        {datas.map((item, index) => (
          <div className="flex justify-between">
            <div className="flex text-lg font-semibold">
              <p>
                <span>{String(index).padStart(2, "0")}-</span>
                {item.episode} :
              </p>
              <p>{item.name}</p>
            </div>
            <div
              className={`${
                theme === "dim" ? "bg-gray-600" : "bg-gray-200"
              } rounded-badge px-6`}
            >
              <p className="font-semibold">{item.air_date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Episodes;
