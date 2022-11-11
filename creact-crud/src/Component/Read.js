
import React, { useEffect, useState } from 'react';
import { Table } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function Read() {

    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData=()=>{
        axios.get(`https://62eae9f8ad29546325962c2f.mockapi.io/StudentData`)
        .then(res => {
            console.log(res)
            setAPIData(res.data)
        })
    }

    const setData = (data) => {
        console.log(data)
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)

     }
     const onDelete=(id)=>{
        console.log(id)
       axios.delete(`https://62eae9f8ad29546325962c2f.mockapi.io/StudentData/${id}`)
       .then(()=>{
        getData();
       })

     }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => (
                        <Table.Row>
                        <Table.Cell>{data.firstName}</Table.Cell>
                        <Table.Cell>{data.lastName}</Table.Cell>
                        <Table.Cell>{data.checkbox?"Checked":"Unchecked"}</Table.Cell>
                        <Link to='/update'>
                        <Table.Cell>
                        <button onClick={() => setData(data)}>Update</button>
                        </Table.Cell>
                        <Table.Cell>
                        <button onClick={() => onDelete(data.id)}>Delete</button>
                        </Table.Cell>
                        </Link>
                        </Table.Row>
                    ))

                    }
                </Table.Body>
            </Table>
        </div>
    )
}