import React, { useState } from "react";
import styled from "styled-components";

/* Tech Debt:
1. refactor functions and state to reuse code more efficiently
*/

const TwoQuestionSlideComponent = styled.div`
  height: 500px;
  width: 598px;
  margin: 50px 5px;
  display: inline-flex;
  border-style: solid;
  border-width: 2px;
  border-color: ${props => props.color};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

class TwoQuestionSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionData: [],
      optionOneHover: false,
      optionOneColor: 'grey',
      optionTwoHover: false,
      optionTwoColor: 'grey',
    }
    this.handleMouseOver1 = this.handleMouseOver1.bind(this);
    this.handleMouseLeave1 = this.handleMouseLeave1.bind(this);
    this.handleMouseOver2 = this.handleMouseOver2.bind(this);
    this.handleMouseLeave2 = this.handleMouseLeave2.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
  }

  handleMouseOver1(event) {
    console.log(event)
    this.setState({
      optionOneHover: true,
      optionOneColor: 'lawngreen'
    })
  }

  handleMouseLeave1() {
    this.setState({
      optionOneHover: false,
      optionOneColor: 'grey'
    })
  }

  handleMouseOver2() {
    this.setState({
      optionTwoHover: true,
      optionTwoColor: 'lawngreen'
    })
  }

  handleMouseLeave2() {
    this.setState({
      optionTwoHover: false,
      optionTwoColor: 'grey'
    })
  }

  handleClick1() {
    event.preventDefault()
    console.log(`1 has been clicked`)
  }

  handleClick2() {
    event.preventDefault()
    console.log(`2 has been clicked`)
  }

  render() {
    return(
      <div>
        <TwoQuestionSlideComponent
          color={this.state.optionOneColor}
          onMouseEnter={this.handleMouseOver1}
          onMouseLeave={this.handleMouseLeave1}
          onClick={this.handleClick1}
        >
          1.1
        </TwoQuestionSlideComponent>
        <TwoQuestionSlideComponent
          color={this.state.optionTwoColor}
          onMouseEnter={this.handleMouseOver2}
          onMouseLeave={this.handleMouseLeave2}
          onClick={this.handleClick2}
        >
          1.2
        </TwoQuestionSlideComponent>
      </div>
    )
  }

 }

export default TwoQuestionSlide;