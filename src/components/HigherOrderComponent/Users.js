import React, { useEffect, useState } from "react";
import axios from "axios";
import HOC from "./HOC";

const Users = ({ data }) => {
  // const [data, setData] = useState("");
  // const [term, setTerm] = useState("");

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => setData(res.data))
  //     .catch((err) => console.log(err));
  // }, []);
  console.log(data);
  let renderUsers =
    data &&
    data.map((user) => {
      return (
        <div key={user.id}>
          <p>
            <strong>{user.name}</strong>
          </p>
        </div>
      );
    });

  // let filteredUsers =
  //   data &&
  //   data
  //     .filter(({ name }) => {
  //       return name.indexOf(term) >= 0;
  //     })
  //     .map((user) => {
  //       return (
  //         <div key={user.id}>
  //           <p>
  //             <strong>{user.name}</strong>
  //           </p>
  //         </div>
  //       );
  //     });

  return (
    <div>
      {/* <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      {filteredUsers} */}
      {renderUsers}
    </div>
  );
};

const SearchUsers = HOC(Users, "users");

export default SearchUsers;
