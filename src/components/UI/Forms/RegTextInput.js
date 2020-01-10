import React from 'react'
import PropTypes from 'prop-types';
function RegTextInput(props) {
    let wrapperClass = "form-group";
    if (props.error && props.error.length > 0) {
        wrapperClass += " has-errors";
    }
    return (
        <div className={wrapperClass}>
            <label htmlFor={props.id}>{props.label}</label>
            <div className="RegisterField">
                <input
                    id={props.id}
                    type="text"
                    onChange={props.onChange}
                    name={props.name}
                    className="RegisterControl"
                    value={props.value}
                />
            </div>
            {props.error && <div className="alert alert-danger">{props.error}</div>}
        </div>
        
    )
}
export default RegTextInput;

RegTextInput.propsTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    error: PropTypes.string
};
RegTextInput.defaultProps = {
    error: ""
};