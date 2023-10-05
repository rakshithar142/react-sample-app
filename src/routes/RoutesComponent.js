import React from "react";
import { Route, Routes } from "react-router-dom";
import ClassComponent from "../components/ClassComponent/ClassComponent";
import FunctionalComponent from "../components/FunctionalComponent/FunctionalComponent";
import Home from "../components/Home/Home";
import ListsAndKeys from "../components/ListsAndKeys/ListsAndKeys";
import RefComponent from "../components/RefsComponent/RefComponent";
import EventsComponent from "../components/Events/EventsComponent";
import SearchUsers from "../components/HigherOrderComponent/Users";
import SearchTodo from "../components/HigherOrderComponent/TodoList";
import Forms from "../components/Forms/Forms";
import Rest from "../components/Rest/Rest";

export default function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="classcomponent" element={<ClassComponent />} />
      <Route path="functionalcomponent" element={<FunctionalComponent />} />
      <Route path="lists&keys" element={<ListsAndKeys />} />
      <Route path="refs" element={<RefComponent />} />
      <Route path="events" element={<EventsComponent />} />
      <Route
        path="hoc"
        element={
          <div style={{display: 'flex'}}>
            <SearchUsers />
            <SearchTodo />
          </div>
        }
      />
      <Route path="forms" element={<Forms />} />
      <Route path="rest" element={<Rest />} />
    </Routes>
  );
}
