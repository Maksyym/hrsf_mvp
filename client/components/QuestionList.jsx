import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Translator = styled.div`
  width: 1225px;
  height: 1800px;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  justify-content: center;
  transition: -ms-transform 0.5s ease 0s, -webkit-transform 0.5s ease 0s, transform 0.5s ease 0s !important;
  transform: translateY(${(props) => props.state}%)
`;

const Placeholder = styled.div`
  width: 1223px;
  height: 598px;
  border-style: solid;
  border-width: 1px;
  border-color: red;
`;

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translateY: 0
    }
    this.handleTranslate = this.handleTranslate.bind(this);
  }

  handleTranslate() {

    this.setState({
      translateY: this.state.translateY - (1/3*100)
    })
  }

  render() {
    return(
      <Translator state={this.state.translateY}>
        <Placeholder onClick={this.handleTranslate}>1</Placeholder>
        <Placeholder onClick={this.handleTranslate}>2</Placeholder>
        <Placeholder onClick={this.handleTranslate}>3</Placeholder>
        <Placeholder onClick={this.handleTranslate}>4</Placeholder>
      </Translator>
    )
  }
}

export default QuestionList;