import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";
import SurveyModal from "./SurveyModal.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <div>
        <ModalProvider>
          <div className="App">
            <h2>Click this bad boy to get started:</h2>
            <SurveyModal />
          </div>
        </ModalProvider>
      </div>
    )
  }
}

export default App;