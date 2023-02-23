import React from 'react';
import Display from './Display';
import Button from './Button';
import calculate from '../logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    this.setState((prevState) => calculate(prevState, e.target.innerText));
  };

  render() {
    const { total, next } = this.state;
    return (
      <div className="btnContainer">
        <Display value={(total || next || '0')} />
        <div className="pnlButtonsContainer">
          <div className="pnlMainButtons">
            <div className="pnlRow">
              <Button name="AC" onclick={this.handleClick} />
              <Button name="+/-" onclick={this.handleClick} />
              <Button name="%" onclick={this.handleClick} />
              <Button name="÷" addClass="orange" onclick={this.handleClick} />
            </div>
            <div className="pnlRow">
              <Button name="7" onclick={this.handleClick} />
              <Button name="8" onclick={this.handleClick} />
              <Button name="9" onclick={this.handleClick} />
              <Button name="x" addClass="orange" onclick={this.handleClick} />
            </div>
            <div className="pnlRow">
              <Button name="4" onclick={this.handleClick} />
              <Button name="5" onclick={this.handleClick} />
              <Button name="6" onclick={this.handleClick} />
              <Button name="-" addClass="orange" onclick={this.handleClick} />
            </div>
            <div className="pnlRow">
              <Button name="1" onclick={this.handleClick} />
              <Button name="2" onclick={this.handleClick} />
              <Button name="3" onclick={this.handleClick} />
              <Button name="+" addClass="orange" onclick={this.handleClick} />
            </div>
            <div className="pnlRow">
              <Button name="0" addClass="doblesize" onclick={this.handleClick} />
              <Button name="." onclick={this.handleClick} />
              <Button name="=" addClass="orange" onclick={this.handleClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
