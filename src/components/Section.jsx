import ListItem from "./ListItem";
import ShowItem from "./ShowItem";

function Section() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mx-3 gap-6">
      <div>
        <ListItem />
      </div>
      <div className="col-span-2">
        <ShowItem />
      </div>
    </div>
  );
}

export default Section;
