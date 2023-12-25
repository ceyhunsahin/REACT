
import React, { useState, useEffect } from 'react';

function Clock() {
    const [time, setTime] = useState(new Date()); // State to store the current time

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date()); // Update time every second
        }, 1000);

        return () => clearInterval(interval); // Clear interval on unmount
    }, []);

    return (
        <div>
            <h2>Current Time: {time.toLocaleTimeString()}</h2>
        </div>
    );
}

export default Clock;
