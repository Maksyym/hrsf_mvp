import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Modal, { ModalProvider, BaseModalBackground } from "styled-react-modal";
import QuestionList from "./QuestionList.jsx";

const StyledModal = Modal.styled`
  width: 1250px;
  height: 600px;
  display: flex;
  align-items: top;
  justify-content: center;
  background-color: white;
  opacity: ${props => props.opacity};
  transition: opacity ease 500ms;
  overflow: hidden !important;
`;

class SurveyModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal(e) {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleModal}>Discover your dream bike!</button>
        <StyledModal
          isOpen={this.state.modalOpen}
          onBackgroundClick={this.toggleModal}
          onEscapeKeydown={this.toggleModal}>
          <QuestionList surveyData={this.props.surveyData}/>
        </StyledModal>
      </div>
    )
  }
}

export default SurveyModal;