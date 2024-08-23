import Episodes from "./Episodes";
import ListItem from "./ListItem";
import ShowItem, { Item } from "./ShowItem";

function Section({ children }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mx-3 lg:gap-7 gap-y-6">
      {children}
    </div>
  );
}

export default Section;
