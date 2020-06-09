import React, { useState } from "react";
import styled from "styled-components";
import TwoQuestionSlide from "./2QuestionSlide.jsx"
import ThreeQuestionSlide from "./3QuestionSlide.jsx"
import FourQuestionSlide from "./4QuestionSlide.jsx"


// testing border:
// border - style: solid;
// border - width: 1px;
// border - color: black;

const Translator = styled.div`
  width: 1225px;
  height: 1800px;

  justify-content: center;
  transition: -ms-transform 0.5s ease 0s, -webkit-transform 0.5s ease 0s, transform 0.5s ease 0s !important;
  transform: translateY(${(props) => props.state}px)
`;

const QuestionSet = styled.div`
  width: 1225px;
  height: 600px;
  display: flex;
`;

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translateY: 0,
      surveyData: this.props.surveyData,
      road: 0,
      race: 0,
      allTerrain: 0,
      brakes: '',
      

    }
    this.handleTranslate = this.handleTranslate.bind(this);
  }

  handleTranslate() {
    this.setState({
      translateY: this.state.translateY - 600
    })
  }

  render() {
    return(
      <Translator state={this.state.translateY}>
        <QuestionSet><ThreeQuestionSlide data={this.state.surveyData[0]} translate={this.handleTranslate}/></QuestionSet>
        <QuestionSet><TwoQuestionSlide data={this.state.surveyData[1]} translate={this.handleTranslate} /></QuestionSet>
        <QuestionSet><ThreeQuestionSlide data={this.state.surveyData[2]} translate={this.handleTranslate}/></QuestionSet>
        <QuestionSet><FourQuestionSlide data={this.state.surveyData[3]} translate={this.handleTranslate} /></QuestionSet>
        <QuestionSet><TwoQuestionSlide data={this.state.surveyData[4]} translate={this.handleTranslate} /></QuestionSet>
        <QuestionSet><TwoQuestionSlide data={this.state.surveyData[5]} translate={this.handleTranslate} /></QuestionSet>
        <QuestionSet><FourQuestionSlide data={this.state.surveyData[6]} translate={this.handleTranslate} /></QuestionSet>
      </Translator>
    )
  }
}

export default QuestionList;