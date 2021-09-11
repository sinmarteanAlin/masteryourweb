import React, { useState } from "react";
import { Notification } from "./notification";

export default function Contact() {
    const [
        displayNotificationMessage,
        setDisplayNotificationMessage,
    ] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [callbackMessage, setCallbackMessage] = useState('');
    const [callbackMessageType, setCallbackMessageType] = useState('');
    const [requestPending, setRequestPending] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();

        setRequestPending(true);
        const data = {
            name,
            email,
            message
        };
        fetch('https://formspree.io/f/xyyllrke', {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                Accept: "application/json",
            },
        })
            .then((response) => {
                successfullResponse();
            })
            .catch((error) => {
                console.log('error', error);
                failedResponse();
            })
            .finally(() => {
                setRequestPending(false);
                clearFormData();
            });
    };

    const successfullResponse = () => {
        setCallbackMessage("Email sent successfully!");
        setCallbackMessageType("success");
        setDisplayNotificationMessage(true);
    };

    const failedResponse = () => {
        setCallbackMessage("There was a problem sending the email. Please try again! :( ");
        setCallbackMessageType("danger");
        setDisplayNotificationMessage(true);
    };

    const clearFormData = () => {
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div className="contact section" id="Contact">
            <div className="container">
                {displayNotificationMessage && (
                    <Notification
                        message={callbackMessage}
                        messageType={callbackMessageType}
                        closeMessage={() =>
                            setDisplayNotificationMessage(false)
                        }
                    />
                )}
                <div className="section-head">
                    <h2 className="text-center">Contact</h2>
                </div>
                <form onSubmit={handleFormSubmit}>
                    <div>
                        <label>
                            Your Name:{" "}
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Your Email:{" "}
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Message:{" "}
                            <textarea
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                            ></textarea>
                        </label>
                    </div>
                    <div className="form-submit-button-container">
                        <button disabled={requestPending}>
                            <span>Send</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
