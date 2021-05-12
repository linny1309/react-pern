import React, { Fragment, useState } from "react"

const InputAction = () => {

    const [action_desc, setAction_desc] = useState("")

    const onSubmitForm = async e => {
        try {
            e.preventDefault();
            const body = { action_desc };
            console.log(action_desc);
            const response = await fetch(
                "http://localhost:5000/actions", {
                method: "POST",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            console.log(response)
            window.location = "/"
        } catch(err) {
            console.error(err.message)
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Input Action</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Enter an Action" 
                    value={action_desc} 
                    onChange={e => setAction_desc(e.target.value)} 
                />
                <button className="btn btn-success">Add</button>
            </form>
        </Fragment>
    ) 
}

export default InputAction;