import React, { useState, useContext } from 'react';
import { MyContext } from '../Mycontext'; // Corrected import

export default function Register() {
    const [formData, submitFormData] = useState({
        name: "",
        email: "",
        pass: ""
    });

    const { table, setTable } = useContext(MyContext); // Corrected useContext

    function handleChange(e) {
        const { name, value } = e.target;
        submitFormData({ ...formData, [name]: value });
    }

    function handleSubmit() {
        setTable([...table, formData]);
        submitFormData({
            name: "",
            email: "",
            pass: ""
        });
    }

    return (
        <div className="flex-inline max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 m-10">
            <h1 className="text-xl text-center font-bold font-mono">Register</h1>
            <input name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Enter User Name" />
            <br />
            <input name="email" type="text" value={formData.email} onChange={handleChange} placeholder="Enter User Email" />
            <br />
            <input name="pass" type="password" value={formData.pass} onChange={handleChange} placeholder="Enter User Password" />
            <br />
            <button   className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-2 h-10 rounded focus:outline-none focus:shadow-outline"
onClick={handleSubmit}>Submit</button>
        </div>
    );
}
