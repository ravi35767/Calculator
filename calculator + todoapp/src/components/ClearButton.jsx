import React, { Component } from 'react';
import "./ClearButton.css";


export const ClearButton = props => (
    <div className="clear-btn" onClick={props.handelClear}>
        {props.children}
    </div>
)

