import { createContext } from "react"; 

const initialState =  {
    first: "Jorge",
    last: "Romero",
};

export type UserState = typeof initialState

const context = createContext<typeof initialState>(initialState)


export default context;