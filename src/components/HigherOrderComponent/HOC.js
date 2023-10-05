import { Component } from "react";
import axios from "axios";

const HOC = (WrappedComponent, entity) => {
  return class extends Component {
    state = {
      data: [],
      term: "",
    };
    componentDidMount() {
      axios
        .get(`https://jsonplaceholder.typicode.com/${entity}`)
        .then((res) => this.setState({ ...this.state, data: res.data }))
        .catch((err) => console.log(err));
    }
    render() {
      let { term, data } = this.state;

      let filteredData = data.slice(0, 10).filter((d) => {
        if (entity === "users") {
          const { name } = d;
          return name.indexOf(term) >= 0;
        }
        if (entity === "todos") {
          const { title } = d;
          return title.indexOf(term) >= 0;
        }
      });
      return (
        <div>
          <h2>Higher Order Component</h2>
          <h4>
            A higher-order component (HOC) is an advanced technique in React for
            reusing component logic. Concretely, a higher-order component is a
            function that takes a component and returns a new component.
          </h4>
          <h3>{entity}</h3>
          <input
            type="text"
            value={term}
            onChange={(e) =>
              this.setState({ ...this.state, term: e.target.value })
            }
          />
          <WrappedComponent data={filteredData}></WrappedComponent>
        </div>
      );
    }
  };
};

export default HOC;
