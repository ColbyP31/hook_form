import React from 'react';

const Results = props => {
    const {firstname, lastname, email, password, passconfirm} = props.data;
    return(
        <div>
            <h3>Results</h3>
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {passconfirm}</p>
        </div>
    );
};

export default Results;