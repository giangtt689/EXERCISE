import React from 'react';

const Footer = () => {
    return (
        <div className="row">
            <label htmlFor="all">
                <input type="checkbox" name="all" id="all"/>
                All
            </label>
            <p>
                You have 0 to do
            </p>
            <button id="delete">Delete</button>

        </div>
    );
};

export default Footer;