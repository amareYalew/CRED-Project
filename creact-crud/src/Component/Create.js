import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import axios from 'axios';

export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const postData = () => {
        axios.post(`https://62eae9f8ad29546325962c2f.mockapi.io/StudentData`, {
            firstName,
            lastName,
            checkbox
        })

        console.log(true)
    }
    // const handleInputChange=(e)=>{
    //    setData({...name,
    //     [e.target.name]:e.target.name
    // })
    // }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input 
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e)=>setFirstName(e.target.value)}
                     />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' 
                    value={lastName}
                    onChange={(e)=>setLastName(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onClick={()=>setCheckbox(!checkbox)} />
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}