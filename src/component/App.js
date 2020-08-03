import React, {Component} from 'react';
import './App.css';
import { Portfolio } from './Portfolio/Portfolio';
import {about} from './../constants/About';
import {skills} from './../constants/Skills';

class App extends Component {
 
 constructor(){
   super();

   this.state={
        selectedSection:"",
        selectedHeading:"",
        selectedQuote:"",
        about:null,
        skills:null
   };
 }

 componentDidMount(){
   this.setState({
     selectedSection:"about",
     about,skills,
     selectedHeading:about.heading,
     selectedQuote:about.quote
   })
 }
 handleSectionClick = (sectionName) => {
  this.setState({
    selectedSection:sectionName,
    selectedHeading:this.state[sectionName].heading,
    selectedQuote:this.state[sectionName].quote
  })
 }

  render(){
    return (
      <div className="App">
        <Portfolio  
            about={this.state.about}
            skills={this.state.skills}
            selectedHeading={this.state.selectedHeading}
            selectedQuote={this.state.selectedQuote}
            selectedSection={this.state.selectedSection}
            handleSectionClick={this.handleSectionClick} 
            />
      </div>
      
      );
  }
 
}

export default App;
