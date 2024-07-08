import { useState } from 'react'
export default function Feed(){
    const [formData,SubmitFormData]=useState({
    name:"",
    rollno:"",
    feed:""
    })
    const [table,submitTable]=useState([])
    function HandleChange(e){
        const {name,value} = e.target
        SubmitFormData({...formData,[name]:value});
    }
    function handleSubmit(){
        submitTable([...table,formData])
        SubmitFormData({name:"",
            rollno:"",
            feed:""
        })
    }
    return(
        <div>
        <input type="text" 
        name="name"
        value={formData.name}
        onChange={HandleChange}
        placeholder="Name"
        />
        <input type="text"
        name="rollno"
        value={formData.rollno}
        onChange={HandleChange}
        placeholder="Rollno"
        />
        <input type="text"
        name="feed"
        value={formData.feed}
        onChange={HandleChange}
        placeholder="your feedback"
        />
        <button onClick={handleSubmit}>Submit</button>
        <table>
            <tr>
                <th>Name</th>
                <th>RollNo</th>
                <th>Feed</th>
                </tr>
                <tbody>
                    {table.map((key,index)=>
                    <tr>
                        <td>{key.name}</td>
                        <td>{key.rollno}</td>
                        <td>{key.feed}</td>
                    </tr>
                )}
                </tbody>
                </table>
        </div>
    )
}