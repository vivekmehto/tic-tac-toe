import React, { useState } from "react";
import "./style.css";
import Icon from "./components/Icon";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const itemArray = new Array(0).fill("empty");

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    //
  };

  const checkIsWinner = () => {
    //
  };

  const changeItem = (itemNumber) => {
    //
  };

  return <Icon name="empty" />;
};

export default App;
