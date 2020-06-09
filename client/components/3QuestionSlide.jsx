import React, { useState } from "react";
import styled from "styled-components";

/* Tech Debt:
1. refactor functions and state to reuse code more efficiently
*/

const ThreeQuestionSlideComponent = styled.div`
  height: 270px;
  width: 598px;
  margin-top: 20px;
  margin-left: 5px;
  margin-right: 5px !important;
  border-style: solid;
  border-width: 1px;
  border-color: ${props => props.color};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  display: inline-block;
  vertical-align: top;
`;

const Justifier = styled.div`
  margin-left: 304px;
`;

const OptionPicture = styled.img`
  height: 262px;
  width: 294px;
  margin: 4px;
  border-radius: 5px;
  display: inline-block;
`;

const OptionText = styled.div`
  height: 262px;
  width: 290px;
  margin-top: 5px;
  display: inline-block;
  vertical-align: top;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const OptionHeader = styled.h3`
  vertical-align: top;
  text-align: center;
  align-items: center;
  margin-bottom: 30px;
`;

const OptionDescription = styled.p`
  text-align: center;
  vertical-align: center;
`;

class ThreeQuestionSlide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionData: [],
      optionOneHover: false,
      optionOneColor: 'grey',
      optionTwoHover: false,
      optionTwoColor: 'grey',
      optionThreeHover: false,
      optionThreeColor: 'grey'
    }
    this.handleMouseOver1 = this.handleMouseOver1.bind(this);
    this.handleMouseLeave1 = this.handleMouseLeave1.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
    this.handleMouseOver2 = this.handleMouseOver2.bind(this);
    this.handleMouseLeave2 = this.handleMouseLeave2.bind(this);
    this.handleClick2 = this.handleClick2.bind(this);
    this.handleMouseOver3 = this.handleMouseOver3.bind(this);
    this.handleMouseLeave3 = this.handleMouseLeave3.bind(this);
    this.handleClick3 = this.handleClick3.bind(this);
  }

  handleMouseOver1() {
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

  handleClick1() {
    event.preventDefault()
    this.props.select(1);
    this.props.translate();
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

  handleClick2() {
    event.preventDefault()
    this.props.select(2);
    this.props.translate();
  }

  handleMouseOver3() {
    this.setState({
      optionThreeHover: true,
      optionThreeColor: 'lawngreen'
    })
  }

  handleMouseLeave3() {
    this.setState({
      optionThreeHover: false,
      optionThreeColor: 'grey'
    })
  }

  handleClick3() {
    event.preventDefault()
    this.props.select(3);
    this.props.translate();
  }

  render() {
    const style = {height: '600px', width: '1225px'}
    return (
      <div style={style}>
        <ThreeQuestionSlideComponent
          color={this.state.optionOneColor}
          onMouseEnter={this.handleMouseOver1}
          onMouseLeave={this.handleMouseLeave1}
          onClick={this.handleClick1}
        >
          <OptionPicture src={this.props.data[0].pic}/>
          <OptionText>
            <OptionHeader>{this.props.data[0].header}</OptionHeader>
            <OptionDescription>{this.props.data[0].description}</OptionDescription>
          </OptionText>
        </ThreeQuestionSlideComponent>
        <ThreeQuestionSlideComponent
          color={this.state.optionTwoColor}
          onMouseEnter={this.handleMouseOver2}
          onMouseLeave={this.handleMouseLeave2}
          onClick={this.handleClick2}
        >
          <OptionPicture src={this.props.data[1].pic} />
          <OptionText>
            <OptionHeader>{this.props.data[1].header}</OptionHeader>
            <OptionDescription>{this.props.data[1].description}</OptionDescription>
          </OptionText>
        </ThreeQuestionSlideComponent>
        <Justifier>
          <ThreeQuestionSlideComponent
            color={this.state.optionThreeColor}
            onMouseEnter={this.handleMouseOver3}
            onMouseLeave={this.handleMouseLeave3}
            onClick={this.handleClick3}
          >
            <OptionPicture src={this.props.data[2].pic} />
            <OptionText>
              <OptionHeader>{this.props.data[2].header}</OptionHeader>
              <OptionDescription>{this.props.data[2].description}</OptionDescription>
            </OptionText>
        </ThreeQuestionSlideComponent>
        </Justifier>
      </div>
    )
  }

}

export default ThreeQuestionSlide;