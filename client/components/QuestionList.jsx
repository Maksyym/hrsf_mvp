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


//google search url: https://www.google.com/search?q=electric+race+bike&tbm=shop

class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translateY: 0,
      surveyData: this.props.surveyData
    }
    this.handleTranslate = this.handleTranslate.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.generateAnswer = this.generateAnswer.bind(this);
    this.completeQuiz = this.completeQuiz.bind(this);
    this.answersArray = [];
  }


  handleTranslate() {
    this.setState({
      translateY: this.state.translateY - 600
    })
  }

  handleSelection(option) {
    this.answersArray.push(option)
  }

  completeQuiz() {
    const url = this.generateAnswer(this.answersArray);
    const win = window.open(url, '_blank');
    win.focus();
  }

  generateAnswer(array) {
    let bikeType = '';
    let material = '';
    let brakes = '';
    let driveTrain = '';
    let storage = '';
    let cargo = '';
    //determine type of bike
    if (array[0] === 3 && array[2] === 1) {
      bikeType = 'race+bike+';
    } else if ((array[0] === 1 || 2) && array[2] === 1) {
      bikeType = 'road+bike+';
    } else if ((array[0] === 2 || 3) && array[2] === 2) {
      bikeType = 'hybrid+bike+';
    } else if ((array[0] === 2 || 3) && array[2] === 3) {
      bikeType = 'mountain+bike+';
    } else {
      bikeType = 'bike+';
    }

    //determine material of bike
    if (array[3] === 1 ){
      material = 'carbon+fiber+';
    }
    if (array[3] === 2 ){
      material = 'aluminum+';
    }
    if (array[3] === 3 ){
      material = 'titanium+';
    }
    if (array[3] === 4 ){
      material = 'steel+';
    }

    //determine brake type
    if (array[4] === 1) {
      brakes = 'rim+brakes';
    }
    if (array[4] === 2) {
      brakes = 'disk+brakes';
    }

    //determine drivetrain
    if (array[5] === 2) {
      driveTrain = 'electric+';
    }

    //determine payload capacity
    if (array[6] === 2 || 3) {
      storage === 'storage+rack+and+'
    } else if (array[6] === 4) {
      cargo = 'cargo+';
    }

    if (cargo) {
      return `https://www.google.com/search?q=${driveTrain}${material}${cargo}+bike&tbm=shop`;
    } else {
      return `https://www.google.com/search?q=${driveTrain}${material}${bikeType}+with+${storage}${brakes}&tbm=shop`;
    }
  }

  render() {
    return(
      <Translator state={this.state.translateY}>
        <QuestionSet>
          <ThreeQuestionSlide data={this.state.surveyData[0]} translate={this.handleTranslate} select={this.handleSelection}/>
        </QuestionSet>
        <QuestionSet>
          <TwoQuestionSlide data={this.state.surveyData[1]} translate={this.handleTranslate} select={this.handleSelection}/>
        </QuestionSet>
        <QuestionSet>
          <ThreeQuestionSlide data={this.state.surveyData[2]} translate={this.handleTranslate} select={this.handleSelection}/>
        </QuestionSet>
        <QuestionSet>
          <FourQuestionSlide data={this.state.surveyData[3]} translate={this.handleTranslate} select={this.handleSelection}/>
        </QuestionSet>
        <QuestionSet>
          <TwoQuestionSlide data={this.state.surveyData[4]} translate={this.handleTranslate} select={this.handleSelection}/>
        </QuestionSet>
        <QuestionSet>
          <TwoQuestionSlide data={this.state.surveyData[5]} translate={this.handleTranslate} select={this.handleSelection}/>
        </QuestionSet>
        <QuestionSet>
          <FourQuestionSlide data={this.state.surveyData[6]} translate={this.handleTranslate} select={this.handleSelection} finish={this.completeQuiz}/>
        </QuestionSet>
        <QuestionSet><h1>Thank you for participating</h1><br/><h4>We hope you enjoy the rest of your day!</h4></QuestionSet>
      </Translator>
    )
  }
}

export default QuestionList;