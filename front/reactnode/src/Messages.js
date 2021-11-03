import React, {useEffect, useState} from 'react';
import axios from 'axios';
 
function Messages(props) {
    const [messages, setMessages] = useState('');
    let params = {
        name: "Lynn Kuhlman",
        id: 230154
    }
    useEffect(() => {
        axios.get('http://localhost:3402/messages', {params})
        .then(res => {
            console.log("RES: ", res.data);
            setMessages(res.data.messages)
        })
    })
    return (
        <div>
            <h1> {messages} </h1>
        </div>
    );

}
export default Messages;