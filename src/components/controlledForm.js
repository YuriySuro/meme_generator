import React from 'react';

class ControlledForm extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        if(document.querySelector("#formInput").value === this.state.value) {
            document.querySelector("#formInput").value = ""; 
        }
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label className="col-form-label">Name:</label>
                    <input id="formInput" type="text" className="form-control" value={this.state.value} onChange={this.handleChange}/>
                </div>
                <input type="submit" className="btn btn-primary" value="Submit"/>
            </form>
        );
    }
}

export default ControlledForm;