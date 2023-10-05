import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../redux/actions";

function ListsAndKeys() {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUserDetails());
  }, []);

  return (
    <div>
      <h2>Lists and Keys</h2>
      <h4>
        When you render lists in React, you can use the key prop to specify a
        unique key for each item. This key is used to identify which item to
        update when you want to update a specific item.
      </h4>
      {userDetails &&
        userDetails?.map((value) => <li key={value.id}>{value.name}</li>)}
    </div>
  );
}
export default ListsAndKeys;
