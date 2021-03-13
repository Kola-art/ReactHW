import React from 'react';
import './App.css';

class TextForUser extends React.Component{
  render(){
    const message = this.props.message;
    return(
      <div>
        <p>    {message}    </p>
        </div>
    )
  }
}

const TextfromFunction = (props) =>{
   const { text, variable } = props;
  return(
    <div>
     <p>{text}</p> 
      { variable ? <p> {variable} </p> : <p>Ups No Variable</p>  }
    </div>
 )
}

function App() {
  const variableText = "Text from variable";
  return (
  <div>
    <div className="App">
       <TextForUser message="Some text for user from class 1" />
      <TextfromFunction text={'And there is text but from function'} variable={variableText} />
    </div>
    <div className="App2">
        <TextForUser message="Some text for user in another div from class 1" />
        <TextfromFunction text={'And you are right there is text from function but in another div'} />
    </div>
  </div>
    
  );
}

export default App;
