import React, { useContext, useState } from 'react'
import UserContext, { UserState } from "./store";

function ConsumerComponent(){
    //const user: UserState = useContext(UserContext)

    const user = useContext<UserState>(UserContext)
    return (
        <div>
            <div>First: { user.first} </div>
            <div>Last: { user.last} </div>
        </div>
    )

}

function UseContextComponent() {

    const [user, userSet] = useState<UserState>({
        first: "Joshua",
        last: "Moreno"
    
    });


    return (
        <UserContext.Provider value={user}>
          <ConsumerComponent />  
          <button
          onClick={() => userSet({
            first: "Jorge",
            last: "Romero"
          })}
          >Change context</button>
        </UserContext.Provider>
    )
}

export default UseContextComponent

