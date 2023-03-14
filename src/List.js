import ListItem from "./ListItem";

const List = ({ items, reqType }) => {
  return (
    <ul>
      <p>List of Items for {reqType}</p>
      {items.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default List;
