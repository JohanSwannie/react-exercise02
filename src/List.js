import ListItem from "./ListItem";

const List = ({ items }) => {
  return (
    <ul>
      <p>List Display - Scroll down for Table Display</p>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default List;
