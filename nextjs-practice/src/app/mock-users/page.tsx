import { revalidatePath } from "next/cache";

type MockUser ={
    id : number,
    name : string,
}


//loading and error component we made are automatically being used by next js 
export default async function MockUsers(){
    const response = await fetch("http://67d2628e90e0670699bd53e0.mockapi.io/users");
    console.log(response);
    
    const users = await response.json();

    async function addUser(formData : FormData){
        "use server" //directive to perform this on server
        const name = formData.get("name");
        const res = await fetch("http://67d2628e90e0670699bd53e0.mockapi.io/users",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({name})
        })
        const newUser = await res.json();
        revalidatePath("/mock-users"); //to revalidate the path once changes has been done on that path 
        console.log(newUser);
        
    }
    return(
        <div className="py-10">
            <form action={addUser} className="mb-4 text-center">
                <input type="text" name="name" required className="border bg-white p-2 mr-2 text-black" />
                <button type="submit" className="bg-blue-400 rounded-md text-white px-4 py-2">Add user</button>
            </form>

        <ul className="grid grid-cols-4 gap-4 py-10">
        {users.map((user :MockUser)=>(
            <li key={user.id} className="p-4 rounded-md text-gray-700 bg-white shadow-md">{user.name}</li>
        ))}
    </ul>
        </div>
    )

}