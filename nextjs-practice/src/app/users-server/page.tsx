type User ={
    id : number,
    name : string,
    username : string,
    email : string,
    phone : string
}


//loading and error component we made are automatically being used by next js 
export default async function UsersServer(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    return(
        <ul className="space-y-4 p-4">
        {users.map((user :User)=>(
            <li key={user.id} className="p-4 rounded-md text-gray-700 bg-white shadow-md">{user.name}{user.email}</li>
        ))}
    </ul>
    )

}