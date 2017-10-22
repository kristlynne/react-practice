import React from 'react';
import Answer from './Answer'

class Question extends React.Component {

  render() {
    let answerArray = props.answers.map(answerObject => {
      let answerText;

      return(
        <div>
        <Answer
        answerText = {answerObject.body}
        />
        className="Question">
        <h1> {props.question.body}</h1>
        <ul> {answerArray} </ul>
        </div>
      )
    }
  
}

export default Question
