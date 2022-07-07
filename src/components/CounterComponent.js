import React from 'react';
import { WheelComponent } from './WheelComponent';
export class CounterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {digits: "10"};
        this.wheel1 = React.createRef();
        this.wheel2 = React.createRef();
        this.wheel3 = React.createRef();
        this.wheel4 = React.createRef();

        this.handleRollover = this.handleRollover.bind(this);
        this.handleDigitsChange = this.handleDigitsChange.bind(this);
      }
    
    incr() {
        this.wheel4.current.incr();

    }

    reset() {
        this.wheel1.current.initialize();
        this.wheel2.current.initialize();
        this.wheel3.current.initialize();
        this.wheel4.current.initialize();
        
    }

    handleRollover(i) {
        switch(i) {
            case '4':
                this.wheel3.current.incr();
                break;
            case '3':
                this.wheel2.current.incr();
                break;
            case '2':
                this.wheel1.current.incr();
                break;
            default:
                break;
        }
    }

    handleDigitsChange(e) {
        this.wheel1.current.initialize();
        this.wheel2.current.initialize();
        this.wheel3.current.initialize();
        this.wheel4.current.initialize();
        this.setState({digits: e.target.value});
    }

    updateValue(i, v) {
        switch(i) {
            case '4':
                this.wheel3.current.incr();
                break;
            case '3':
                this.wheel2.current.incr();
                break;
            case '2':
                this.wheel1.current.incr();
                break;
            default:
                break;
        }
    } 

   
    render() {
      return (
        <div>
            <label>
            Which base?&nbsp;
            <select value={this.state.digits} onChange={this.handleDigitsChange}>
                <option value="2">2</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="16">16</option>
            </select>
            </label>
            <p>&nbsp;</p>
        <p>
            <button onClick={() => this.incr()}>Click</button>
            <button onClick={() => this.reset()}>Reset</button>
        </p>
        <h2>
        <WheelComponent ref={this.wheel1} digits={this.state.digits} id="1" rollover={(x) => this.handleRollover(x)}></WheelComponent>
        <WheelComponent ref={this.wheel2} digits={this.state.digits} id="2" rollover={(x) => this.handleRollover(x)}></WheelComponent>
        <WheelComponent ref={this.wheel3} digits={this.state.digits} id="3" rollover={(x) => this.handleRollover(x)}></WheelComponent>
        <WheelComponent ref={this.wheel4} digits={this.state.digits} id="4" rollover={(x) => this.handleRollover(x)}></WheelComponent>
        </h2>
        </div>
      );
    }
  }

  export default CounterComponent;