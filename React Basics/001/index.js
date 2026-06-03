const div = React.createElement(
    "div", {}, 
    React.createElement("div", {}, 
        React.createElement("h1", {}, "Hello React Div"),
    )
);

      const root = ReactDOM.createRoot(document.getElementById("root"));
      root.render(div);

      const heading = React.createElement("h1", {}, "Hello React Heading");
      const root1 = ReactDOM.createRoot(document.getElementById("heading"));
      root1.render(heading); 