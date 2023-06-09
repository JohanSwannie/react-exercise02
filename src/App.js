import { useState, useEffect } from "react";
import ButtonControl from "./ButtonControl";
import List from "./List";
import Table from "./Table";

const App = () => {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState("comments");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchItems();
  }, [reqType]);

  return (
    <div className="App">
      <ButtonControl reqType={reqType} setReqType={setReqType} />
      <List items={items} reqType={reqType} />
      <Table items={items} reqType={reqType} />
    </div>
  );
};

export default App;
