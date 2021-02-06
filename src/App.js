import logo from "./logo.svg";
import "./App.css";
import Address from "./components/Address";
import ProfilPhoto from "./components/ProfilPhoto";
import FullName from "./components/FullName";
import React from "react";

//importing bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

//importing CSS
import "./style.css";

function App() {
  return (
    <Card style={{ width: "27rem" }}>
      <Card.Img variant="top" />
      <ProfilPhoto />
      <Card.Body>
        <Card.Title className="title">Full name & Address</Card.Title>
        <FullName />
        <Address />
      </Card.Body>
    </Card>
  );
}

export default App;
