import React, { useReducer } from "react";
function reducer(state, action) {
    switch (action.type) {
        case "updateField":
            return {
                ...state,
                [action.field]: action.value
            };

        case "reset":
            return initialState;

        default:
            return state;
    }
}
const initialState = {
    name: "",
    email: "",
    password: ""
};

export default function ReducerForm() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h2>Signup Form</h2>

            <input
                placeholder="Name"
                value={state.name}
                onChange={(e) =>
                    dispatch({
                        type: "updateField",
                        field: "name",
                        value: e.target.value
                    })
                }
            />

            <input
                placeholder="Email"
                value={state.email}
                onChange={(e) =>
                    dispatch({
                        type: "updateField",
                        field: "email",
                        value: e.target.value
                    })
                }
            />

            <input
                placeholder="Password"
                value={state.password}
                onChange={(e) =>
                    dispatch({
                        type: "updateField",
                        field: "password",
                        value: e.target.value
                    })
                }
            />

            <button onClick={() => dispatch({ type: "reset" })}>
                Reset
            </button>
            <div>Name : {state.name}</div>
            <div>Email : {state.email}</div>
            <div>Password : {state.password}</div>
        </div>

    );
}