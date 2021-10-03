import React, { useState } from "react";
import DatePicker from "react-datepicker";


class InputDate extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            startDate: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
            placeholderText="Select Date"
        />;
    }
}

export default InputDate;