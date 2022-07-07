import React from 'react';

export class WheelComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
    }

    incr() {
        let v = this.state.value + 1;
        if (v === parseInt(this.props.digits)) {
            v = 0;
            this.props.rollover(this.props.id);
        }
        this.setState({value: v});
    }

    initialize() {
        this.setState({value: 0});
    }

    displayVal(x) {
        switch(x) {
            case 10:
                return 'A';
            case 11:
                return 'B';
            case 12:
                return 'C';
            case 13:
                return 'D';
            case 14:
                return 'E';
            case 15:
                return 'F';
            default:
                return x;
        }
    }

    render() {
        return <span>{this.displayVal(this.state.value)}</span>;
    }
  }

  export default WheelComponent;