import Row from "./Row";

const Table = ({ items, reqType }) => {
  return (
    <div className="table-container">
      <p>Table Items for {reqType}</p>
      <table>
        <tbody>
          {items.map((item) => (
            <Row key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
