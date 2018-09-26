import React, { Component } from 'react';
import './ButtonPanel.css';
import Button from './Button'
class ButtonPanel extends Component {
  
  handleClick = buttonName => {
    this.props.clickHandler(buttonName);
  };
  
  render() {
    return (
      <div className="ButtonPanel">
        <div>
          <Button name = 'AC' clickHandler={this.handleClick}/>
          <Button name = '+/-' clickHandler={this.handleClick}/>
          <Button name = '%' clickHandler={this.handleClick}/>
          <Button name = '/' orange clickHandler={this.handleClick}/>
        </div>
        <div>
          <Button name = '7' clickHandler={this.handleClick}/>
          <Button name = '8' clickHandler={this.handleClick}/>
          <Button name = '9' clickHandler={this.handleClick}/>
          <Button name = 'X' orange clickHandler={this.handleClick}/>
        </div>
        <div>
          <Button name = '4' clickHandler={this.handleClick}/>
          <Button name = '5' clickHandler={this.handleClick}/>
          <Button name = '6' clickHandler={this.handleClick}/>
          <Button name = '-' orange clickHandler={this.handleClick}/>
        </div>
        <div>
          <Button name = '1' clickHandler={this.handleClick}/>
          <Button name = '2' clickHandler={this.handleClick}/>
          <Button name = '3' clickHandler={this.handleClick}/>
          <Button name = '+' orange clickHandler={this.handleClick}/>
        </div>
        <div>
          <Button name = '0' wide clickHandler={this.handleClick}/>
          <Button name = '.' clickHandler={this.handleClick}/>
          <Button name = '=' orange clickHandler={this.handleClick}/>
        </div>
      </div>
    );
  }
}

export default ButtonPanel;