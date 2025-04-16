import React, {useEffect, useState} from "react";
import ReconnectingWebSocket from 'reconnecting-websocket';

function LatencyMonitor() {
    
    const [latency, setLatency] = useState(null);

    useEffect(() => {

        const socket = new ReconnectingWebSocket('ws://localhost:55455');

        socket.onmessage = (message) => {

            const timestamp = Number(message.data);

            if (!isNaN(timestamp)){

                const now = Date.now();
                const delay = now - timestamp;
                setLatency(delay);
            }
            else{
                console.warn("Invalid timestamp received:", message.data);
            }

            // try{

            //     const data = JSON.parse(message.data);
            //     const sentTime = data.timestamp;
            //     const currentTime = Date.now();
            //     const packetLatency = currentTime - sentTime;
            //     setLatency(packetLatency);
            // }
            // catch(err){

            //     console.log('Failed to parse message: ', err);
            // }
        }

        return () => socket.close();
    }, [])

    return(
        <div>
            <p>Packet Latency : {latency !== null ? `${latency} ms` : 'Waiting for packets...'}</p>
        </div>
    )
}

export default LatencyMonitor;