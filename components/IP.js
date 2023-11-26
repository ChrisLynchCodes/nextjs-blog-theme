import React, { useEffect, useState } from 'react';

const IP = () => {
  const [ipAddress, setIpAddress] = useState(null);

  useEffect(() => {
    const fetchIpAddress = async () => {
      try {
        const response = await fetch('https://api64.ipify.org?format=json');
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error('Error fetching IP address:', error);
      }
    };

    fetchIpAddress();
  }, []);

  return (
    <div>
      {ipAddress ? (
        <p>Your IP address is: {ipAddress}</p>
      ) : (
        <p>Loading IP address...</p>
      )}
    </div>
  );
};

export default IP;
