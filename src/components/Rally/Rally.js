import React from 'react';
import { withRouter } from 'react-router-dom';
import './Rally.css';

const rally = (props) => (
    <article className="Rally" onClick={props.clicked}>
        <h1>{props.church}</h1>
        <div className="Host">
            <div>
            	{props.churchName}
            	{props.churchStreet}
            	{props.churchState}
            	{props.churchZipcode}
            	{props.eventStart}
            	{props.eventEnd}
            	{props.churchContactName}
            	{props.churchContactPhone}
            	{props.churchContactEmail}
            	{props.stateRepName}
            	{props.stateRepPhone}
            	{props.stateRepEmail}
            </div>
        </div>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default withRouter(rally);