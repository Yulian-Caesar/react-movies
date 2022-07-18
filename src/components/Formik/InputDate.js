import React from 'react';
import DatePicker from 'react-datepicker';
import { LabelContainer } from './Style';


class InputDate extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            startDate: '',
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        const valueOfInput = date.format();
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
            <>
                {this.props.label ? <LabelContainer htmlFor={this.props.name}>{this.props.label}</LabelContainer> : null }
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    placeholderText='Select Date'
                    label={this.props.label}
                    name={this.props.name}
                    id={this.props.name}
                />
            </>
        );
    }
}

export default InputDate;