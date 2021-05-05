import React from 'react'
import { useReducer } from 'react';
import { useState } from 'react';

const initialState = {
    counter: 100,
}

type ACTIONTYPES  =
| { type: "increment"; payload: number;}
| { type: "decrement"; payload: number;}

function counterReducer(state: typeof initialState, action: ACTIONTYPES){
    switch(action.type) {

        case "increment":
        //neeeds to return the updated state
        return {
            ...state,
            counter: state.counter + action.payload,
        };
        case "decrement":
        //neeeds to return the updated state
        return {
            ...state,
            counter: state.counter - action.payload,
        };
        default:
            throw new Error("Bad Action");
    }
}

function UseReducerComponent() {

    const [state, dispatch] = useReducer(counterReducer, initialState)
    return (
        <div>
            <div>{state.counter}</div>

            <button onClick={() =>
             dispatch({
                    type: "decrement",
                    payload: 5,
                })
            }>
                Decrement
            </button>
            <button onClick={() => 
                dispatch({
                    type: "increment",
                    payload: 10,

                })
            }>
                Increment
            </button>

        </div>
    )
}

export default UseReducerComponent;
