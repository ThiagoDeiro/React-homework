import React from 'react';
import Axios from 'axios';

export default class NumberTraslator extends React.Component{
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
        Axios.get(`http://numbersapi.com/${this.state.factNumber}/math?json`)
            .then(response => self.setState((state) => ({...state, factText: response.data.text})));    
    }
    render(){
        return(
            <div>
                <label className='label-main-page'>
                    Enter the number to get the fact from :
                    <input className="input-Element" type='text' onChange={this.handleFactNumberChanged} />
                </label>
                 <p className='text'>The fact for the number {this.state.factNumber} is : <b>{this.state.factText}</b></p>
                <button className='get-fact-button' onClick={this.handleGetFact}>Get Fact !</button>
            </div>
        )
    }
}