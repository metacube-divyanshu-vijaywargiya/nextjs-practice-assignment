"use client"
import { useState, useEffect } from "react" 

type User ={
    id : number,
    name : string,
    username : string,
    email : string,
    phone : string
}

export default function userClient(){
    const [users, setUsers]= useState<User[]>([]);
    const [error , setError] = useState("");
    const [loading , setLoading] =useState(true);

    useEffect(()=>{
        async function fetchUsers(){
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if(!response.ok){throw new Error("Failed to fetch users")};
                const data = await response.json();
                setUsers(data);
                console.log(data);
            } catch (error) {
                setError("Failed to fetch users");
            }finally{
                setLoading(false)
            }
        }

        fetchUsers();
    },[])

    if(loading) return <div>Loading...</div>
    if(error) return <div>{error}</div>

    return( 
        <ul className="p-4">
            {users.map((user)=>(
                <li key={user.id} className="p-4 text-gray-700 bg-white">{user.name}{user.email}</li>
            ))}
        </ul>
    )
}