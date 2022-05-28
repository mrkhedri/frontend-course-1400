import React, {useState, useEffect} from "react";

function FunctionalComponentLifecycle() {
    const [date, setDate] = useState(new Date())

    const tick = () => setDate(new Date());

    useEffect(() => {
        // console.log('date -> ', date.toLocaleTimeString())
    }, [date])

    useEffect(() => {
        // Did mount
        const timerID = setInterval(() => tick(), 1000);
        // console.log('In Did mount')

        return () => {
            // Will unmount
            clearInterval(timerID);
            // console.log('In Will unmount')
        }
    }, [tick])

    return (
        <div>
            <h2>It is {date.toLocaleTimeString()}.</h2>
        </div>
    );
}

export default FunctionalComponentLifecycle;