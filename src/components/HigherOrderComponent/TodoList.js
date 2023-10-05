import React, { useEffect, useState } from "react";
import axios from "axios";
import HOC from "./HOC";

function TodoList({ data }) {
  //   const [todos, setTodos] = useState([]);
  //   const [term, setTerm] = useState("");

  //   useEffect(() => {
  //     axios
  //       .get("https://jsonplaceholder.typicode.com/todos")
  //       .then((res) => setTodos(res.data))
  //       .catch((err) => console.log(err));
  //   }, []);

    let renderTodos =
      data &&
      data.map((todo) => {
        return (
          <div key={todo.id}>
            <p>
              <strong>{todo.title}</strong>
            </p>
          </div>
        );
      });

//   let filteredTodos =
//     todos &&
//     todos
//       .slice(0, 10)
//       .filter(({ title }) => {
//         return title.indexOf(term) >= 0;
//       })
//       .map((todo) => {
//         return (
//           <div key={todo.id}>
//             <p>
//               <strong>{todo.title}</strong>
//             </p>
//           </div>
//         );
//       });

  return (
    <div>
      {/* <h3>Todos</h3>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      /> */}
      {renderTodos}
    </div>
  );
}

const SearchTodo = HOC(TodoList, "todos");

export default SearchTodo;
