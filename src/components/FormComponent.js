import React, {useState} from "react";

export const FormComponent=()=>{
    const [formData, setformData]=useState({
       firstName:'',
       lastName:'',
       email:'',
    });

    //The handleChange function updates the form data state whenever the user types in the input fields.
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setformData({...formData,[name]:value});
        };
    
        
        const handleSubmit=(e)=>{
            e.preventDefault();

            console.log(formData);

            localStorage.setItem('formData',JSON.stringify(formData));
            //reset form data after submission...
            setformData({firstName:'',lastName:'',email:''});
        };

        return (
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input 
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                       />
                </label>
                 <br/>
                   <label>
                 Last Name:
                 <input
                 type="text"
                 name="lastName"
                 value={formData.lastName}
                 onChange={handleChange}
                 />
                 </label>

                 <br/>
                   <label>
                 Email:
                 <input
                 type="text"
                 name="email"
                 value={formData.email}
                 onChange={handleChange}
                 />
                 </label>


                 <button type="submit">Submit</button>
            </form>
        )
        };

