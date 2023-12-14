import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { useQuery, gql } from "@apollo/client";
const USERS_QUERY = gql`
    query getUsers{
        users {
            id
            name
            email
            password
        }
    }
`;


const User = () => {
    const { data, loading, error } = useQuery(USERS_QUERY);
    const [users, setUsers ] = useState([]);
    useEffect(()=>{
        if(data){
            setUsers(data);
            console.log(data);
        }
    },[data])

    useEffect(()=>{
        // if(data.length>0){
            showUsers();
            console.log(users);
        // }

    },[users])
    
    const showUsers = () => {
        return(
            users.length > 0?
            users.map((user: any)=> {
                return(
                    <>
                        <tr>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        </tr>
                    </>
                )
            }):
            <></>
        )
    }

    return(
        <>
        <div>
        <Table
            >
            <thead>
                <tr>
                <th>
                    Name
                </th>
                <th>
                    Email
                </th>
                </tr>
            </thead>
            <tbody>
                { showUsers() }
            </tbody>
            </Table>
        </div>
        </>
    )
}
export default User;