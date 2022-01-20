import React from "react";
import ReactDOM from "react-dom";
const App = () => {
    return React.createElement("div", null, "hello world");
};
ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
