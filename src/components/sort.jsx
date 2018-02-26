import React from 'react';

const Sort = ({typeHandler, options}) => {
    return (
        <div className="header__sort">
        <label className="header__label">search</label>
        <select onChange={typeHandler} className="select-field">
            {
            options.map(option => (
                <option key={option} value={option.replace(/ /g,"_")}>{option}</option>
            ))
            }
        </select>
        </div>
    );
}

export default Sort;