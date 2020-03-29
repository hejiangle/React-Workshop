import React, { Component } from 'react'

type Props =  {
    lable : string,
    value : string,
    handleChange : (event: React.ChangeEvent<HTMLInputElement>) => void
};

export const InputComponent = (props: Props) => 
(
    <div>
        <label> 
            { props.lable } 
            <input type = "text" value = {props.value} onChange = { props.handleChange } />
        </label>
    </div>
);
