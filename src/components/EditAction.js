import React, { Fragment, useState } from "react";

const EditAction = ({ action }) => {
  const [action_desc, setAction_desc] = useState(action.action_desc);

  //Edit action_desc function

  const updateAction_desc = async e => {
    e.preventDefault();
    try {
      const body = { action_desc };
      const response = await fetch(
        `http://localhost:5000/actions/${action.action_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-primary"
        data-toggle="modal"
        data-target={`#id${action.action_id}`}
      >
        Edit
      </button>
      <div
        class="modal"
        id={`id${action.action_id}`}
        onClick={() => setAction_desc(action.action_desc)}
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Action</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => setAction_desc(action.action_desc)}
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={action_desc}
                onChange={e => setAction_desc(e.target.value)}
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                data-dismiss="modal"
                onClick={e => updateAction_desc(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => setAction_desc(action.action_desc)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditAction;