import React, { useEffect, useState } from 'react';

function Welcome() {
    const [username, setUsername] = useState('');

    async function fetchText() {
        let response = await fetch('https://localhost:7127/api/test2');
    
        console.log(response.status); // 200
        console.log(response.statusText); // OK
    
        if (response.status === 200) {
            let data = await response.text();
            console.log(data);
            setUsername(data); // Update the state of the username variable
        }
    }

    useEffect(() => {
        fetchText();
    }, []);

    return <h1>Welcome {username}!</h1>;
}

export default Welcome;