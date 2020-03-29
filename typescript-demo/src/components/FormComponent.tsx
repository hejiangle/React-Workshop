import { Component, ChangeEvent, ReactNode } from "react";
import { InputComponent } from "./InputComponent";
import React from "react";

type State = {
    firstName: string,
    lastName: string
}

type Props = {
    formTitle: string
}

export class FormComponent extends Component <Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {firstName: '', lastName: ''};
    }

    handleSubmit = () => {
        alert('Current user\'s name is ' + this.state.firstName + ' ' + this.state.lastName );
    }

    handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({firstName: event.target.value});
    }

    handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({lastName: event.target.value});
    }

    render(){
        return (
            <div>
                <p>{this.props.formTitle}</p>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <InputComponent lable="FirstName" value={this.state.firstName} handleChange={this.handleFirstNameChange.bind(this)}/>
                    <InputComponent lable="LastName" value={this.state.lastName} handleChange={this.handleLastNameChange.bind(this)}/>
                    <div className='submit-button'>
                        <input type='submit' value='submit'/>
                    </div>
                </form>
            </div>
        );
    }
}