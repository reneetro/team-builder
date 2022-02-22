import React from 'react';

const form = (props) => {
    
    const handleChange = evt => {
        const { name, value } = evt.target;
        update(name, value);
    }

    onSubmit = evt => {
        evt.preventDefault();
        submit();
    }
    
    
    return (
        <form>
            <label> Name 
            <input
            placeholder='Enter your name'
            value={values.name}
            name='name'
            onChange= {handleChange}
            />
            </label>
            <label>Email
            <input
                placeholder= 'Enter your email'
                value={values.email}
                name='email'
                onChange={handleChange}
            />
            </label>
            <label>Department
                <select value={values.role} name='role ' onChange={onChange}>
                    <option value=''>-Select Your Department</option>
                    <option value='Communications'>Communications</option>
                    <option value='Marketing'>Marketing</option>
                    <option value='IT'>IT</option>
                    <option value='Management'>Management</option>
                    <option value='Other'>Other</option>
                </select>
            </label>
            <div className= 'submit'>
                <button>submit</button>
            </div>
        </form>
    )
}

export default form;