import React from  'react';
    
    
const UserForm = (props) => {
    const{inputs, setInputs} = props;

    const onChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };
    
    return(
        <form>
            <div className="form-group">
            <label htmlFor="firstname">First Name: </label> 
            <input type="text" onChange={onChange} name="firstname" />
            </div>
            <div className="form-group">
            <label htmlFor="lastname">Last Name: </label> 
            <input type="text" onChange={onChange} name="lastname" />
            </div>
            <div className="form-group">
            <label htmlFor="email">Email Address: </label> 
            <input type="text" onChange={onChange} name="email"/>
            </div>
            <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input type="text" onChange={onChange} name="password"/>
            </div>
            <div className="form-group">
            <label htmlFor="passconfirm">Confirm Password: </label>
            <input type="text" onChange={onChange} name="passconfirm"/>
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;