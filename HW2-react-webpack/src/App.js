import React from "react";

class Welcome extends React.Component {
    render() {
        return React.createElement("h1", null, "Hello World");
    }
}

class Message extends React.PureComponent {
    render() {
        return <h2>What's up buddy</h2>;
    }
}

export default function App() {
    return (
      <div>
          <Welcome />
          <Message />
      </div>
    );
}