import Episodes from "./Episodes";
import ListItem from "./ListItem";
import ShowItem, { Item } from "./ShowItem";

function Section({ theme }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 mx-3 lg:gap-7 gap-y-6">
      <div>
        <ListItem theme={theme} />
      </div>
      <div className="col-span-2">
        <ShowItem>
          <Item theme={theme} />
          <Episodes theme={theme} />
        </ShowItem>
      </div>
    </div>
  );
}

export default Section;
