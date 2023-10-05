import React from "react";

export default function EventsComponent() {
  const [text, setText] = React.useState("");

  function handleChange(event) {
    setText(event.target.value);
  }
  return (
    <div>
      <h4>
        An event is an action that could be triggered as a result of the user
        action or system generated event.{" "}
      </h4>
      <label htmlFor="input">Input:</label>
      <input id='input' type="text" onChange={handleChange} />

      {text}
    </div>
  );
}
