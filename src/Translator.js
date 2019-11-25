import React from 'react';
import Axios from 'axios';

export default class Translator extends React.Component{
    state = {
        factNumber: '',
        factText: ''
    }

    handleFactNumberChanged =(event)=>{
        const value = event.target.value;
        this.setState((state) => ({...state, factNumber: value}))
    }

    handleGetFact=()=>{
        const self = this;
        Axios.get(`http://numbersapi.com/${this.state.factNumber}?json`)
            .then(response => self.setState((state) => ({...state, factText: response.data.text})));    
    }
    render(){
        return(
            <div>
                <label>
                    Enter the number to get the fact from :
                    <input type='text' onChange={this.handleFactNumberChanged} />
                </label>
                 <p>The fact for the number {this.state.factNumber} is : <b>{this.state.factText}</b></p>
                <button onClick={this.handleGetFact}>Get Fact !</button>
            </div>
        )
    }
}