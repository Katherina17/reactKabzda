import React, {useState} from "react";

const usersArr = ['Valera', 'Sasha', 'Alex', 'Nina']

export const Example1 = () => {
    const[counter, setCounter] = useState(0);
    const[users, setUsers] = useState(usersArr);
    const addUSer = () => {
        let newUser = 'sveta' + new Date().getTime();
        setUsers([...users, newUser])
    }
    return (
        <>
            <button onClick={() => setCounter(counter +1)}>+</button>
            <button onClick={addUSer}>add user</button>
            <NewMessagesCounter count={counter}/>
            <Users users={users}/>
        </>
    )
}


export const NewMessagesCounter = (props: { count: number }) => {
    console.log('num')
    return (
        <div>
            {props.count}
        </div>
    )
}

export const UsersSecret = (props: {users: string[]}) => {
    console.log('users')
    return (
        <div>
            {props.users.map((u, index) => {
                return (
                    <p key={index}>
                        {u}
                    </p>
                )
            })}
        </div>
    )
}

const Users = React.memo(UsersSecret);