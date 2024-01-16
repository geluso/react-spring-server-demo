import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";

const Users = () => {
    console.log("rerendering users")
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const loadUsers = () => {
        setIsLoading(true);
        fetch("http://localhost:8080/users")
        .then(res => res.json())
        .then(json => {
            console.log('got json:', json)
            setUsers(json)
            setIsLoading(false);
        })
    }

    useEffect(loadUsers, []);

    const createUser = (ev) => {
        ev.preventDefault();
        let firstname = ev.target.elements.firstname.value;
        let email = ev.target.elements.email.value;
        let data = {name: firstname, email}

        setIsSaving(true);

        fetch("http://localhost:8080/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(json => {
            console.log('saved')
        })
        .catch(() => {
            console.log('problem')
        })
        .finally(() => {
            setIsSaving(false);
        })
    }

    const updateUser = (ev) => {
        ev.preventDefault();
        let id = ev.target.elements.id.value;
        let firstname = ev.target.elements.firstname.value;
        let email = ev.target.elements.email.value;
        let data = {id: id, name: firstname, email}

        setIsSaving(true);

        fetch("http://localhost:8080/users/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => {
            console.log('updated', res)
            loadUsers();
        })
        .catch(() => {
            console.log('problem')
        })
        .finally(() => {
            setIsSaving(false);
        })
    }

    const deleteUser = (ev) => {
        ev.preventDefault();
        let id = ev.target.elements.id.value;
        setIsDeleting(true);

        fetch("http://localhost:8080/users/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            console.log('deleted', res);
            loadUsers();
        })
        .catch(() => {
            console.log('problem')
        })
        .finally(() => {
            setIsDeleting(false);
        })
    }

    return <div>
        <h1>Users</h1>
        <p>This is the users page.</p>
        <div>
            <h2>Create new user</h2>
            <form onSubmit={createUser}>
                <input placeholder="firstname" name="firstname" />
                <input placeholder="email" name="email" type="email" />
                <input type="submit" value="add new user"/>
            </form>
        </div>
        <div>
            <h2>Update user</h2>
            <form onSubmit={updateUser}>
                <input placeholder="id" name="id" type="number" />
                <input placeholder="firstname" name="firstname" />
                <input placeholder="email" name="email" type="email" />
                <input type="submit" value="save user"/>
            </form>
        </div>
        <div>
            <h2>Delete user</h2>
            <form onSubmit={deleteUser}>
                <input name="id" type="number" />
                <input type="submit" value="delete user"/>
            </form>
        </div>
        <p>
            <button onClick={loadUsers}>reload</button>
        </p>

        {isLoading && <p>Loading...</p>}
        {isSaving && <p>Saving...</p>}
        {isDeleting && <p>Deleting...</p>}
        <h2>Users</h2>
        {<ul>
            {users.map(user => {
                return <li key={user.id}>{user.id} {user.name} {user.email}</li>
            })}
        </ul>}
    </div>
}

export default Users;