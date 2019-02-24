import React, { Component } from 'react';
import Input from '../Input';

import Context from '../context';

import './index.scss';

export default class AppHead extends Component {

    static contextType = Context;

    constructor(props){
        super(props);
        this.state = {
          inputValue : []
        }

    }
      
    handleKeyPress = (e) => {
        
        const {
            handleKeyPress
        } = this.context;
        
        handleKeyPress(e.key);
    }
    
    componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
    }
    
    componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
    }


    render() {
        const {inputValue} = this.state;

        return (

            <>
            <h1 className="text-center">{this.props.title}</h1>
            <Input inputValue={inputValue}/>
            </>

        );
    }
}
