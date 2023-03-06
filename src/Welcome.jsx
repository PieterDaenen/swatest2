import React, { useEffect, useState } from 'react';

function Welcome() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    fetch('https://localhost:7127/api/test2')
    .then(console.log("request gebeurt hier"))
      .then(response => response.json())
      .then(data => setUsername(data))
      .catch(error => console.error(error));
  }, []);

  return <h1>Welcome {username}!</h1>;
}

export default Welcome;