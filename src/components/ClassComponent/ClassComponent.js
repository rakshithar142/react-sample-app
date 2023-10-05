import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    console.log("Constructor");
    this.state = {
      data: "Initial Data",
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    // You can modify the state here based on the props
    return null;
  }

  componentDidMount() {
    console.log("Component Did Mount");
    // Perform actions after the component is mounted
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    // Return true if the component should re-render, false otherwise
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    // Return a value that will be passed to componentDidUpdate
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("Component Did Update");
    // Perform actions after the component's state or props are updated
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
    // Perform cleanup actions before the component is removed from the DOM
  }

  handleButtonClick = () => {
    this.setState({
      data: "Updated Data",
    });
  };

  render() {
    console.log("Render");
    return (
      <div>
        <h1>React Lifecycle Methods Example</h1>
        <p>{this.state.data}</p>
        <button onClick={this.handleButtonClick}>Update State</button>
      </div>
    );
  }
}
