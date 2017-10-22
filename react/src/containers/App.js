import React from 'react';
import Question from '../Components/Question';

class App extends React.Component{
  render(){
    return(
      <div>
        <h1>React Quiz!</h1>
        <Question
          question = {this.props.data.question}
          answers = {this.props.data.answers}
        />
      </div>
    )
  }
}

export default App
