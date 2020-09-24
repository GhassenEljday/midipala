import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import Form from "./components/Form.jsx";

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <div>
        <Form />
      </div>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById("app"));
