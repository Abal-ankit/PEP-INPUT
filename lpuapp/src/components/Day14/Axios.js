import React, { useState, useEffect } from "react";
import axios from "axios";

function Axios() {
  const [resource, setResource] = useState("posts");
  const [items, setItems] = useState({});
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/${resource}`)
    //   .then((response) => response.json())
      .then((res) => setItems(res.data))
      .catch((error) => console.log("Error: ", error));
  }, [resource]);

  return (
    <div>
      <button onClick={() => setResource("posts")}>Get Posts</button>
      <button onClick={() => setResource("comments")}>Get Comments</button>
      <button onClick={() => setResource("users")}>Get Users</button>
      <h4>{resource}</h4>
      {items.length && items.map((item) => <ul key={item.id}>{JSON.stringify(item)}</ul>)}
    </div>
  );
}

export default Axios;
