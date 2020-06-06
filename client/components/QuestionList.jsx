import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Translator = styled.div`
  width: 70rem;
  height: 10rem;
  border-style: solid;
  border-width: 1px;
  border-color: black;
  transform: translateY(${(props) => props.state}%)
`;

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translateY: 0
    }
  }

  render() {
    return(
      <Translator state={this.state.translateY}>Hi</Translator>
    )
  }
}

export default QuestionList;