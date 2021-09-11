import React from "react";

export const Notification = (props) => {
    return (
        <div className={`alert alert-${props.messageType} confirmation-alert`} role="alert">
            {props.message}
            <button onClick={props.closeMessage} className={`pull-right btn btn-${props.messageType}`} aria-hidden="true">
                Close
            </button>
        </div>
    )
}