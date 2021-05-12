import React, {Fragment, useEffect, useState} from "react"

import EditAction from "./EditAction"

const ListActions = () => {

    const [actions, setActions] = useState([])
    
    const getActions = async () => {
        try {

            const response = await fetch("http://localhost:5000/actions") 
            const jsonData = await response.json()

            setActions(jsonData)
            console.log(jsonData)
        } catch(err) {
            console.error(err.message)
        }
    } 
    
    const deleteAction = async id => {
        console.log(id)
        try {
            const deleteAction = await fetch(`http://localhost:5000/actions/${id}`, {
                method: "DELETE"
            })
          setActions(actions.filter(action => action.action_id !== id))
        } catch(err) {
            console.error(err.message)
        }
    }

    useEffect(() => {
        getActions()
    }, [])

    return (
        <Fragment>
        <table className="table mt-5 text-center">
            <thead>
            <tr>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {actions.map(action => (
                <tr key={action.action_id}>
                    <td>{action.action_desc}</td>
                    <td><EditAction action={action} /></td>
                    <td><button className="btn btn-danger" onClick={() => deleteAction(action.action_id)}>Delete</button></td>
                </tr>
            ))}
            </tbody>
        </table>
        </Fragment>
    )
}

export default ListActions;