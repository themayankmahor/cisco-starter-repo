import React, {useEffect, useState} from "react";

function IPAddress({version}) {
    
    const [ip, setIp] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        const url = version === 'v6' ? 'https://api64.ipify.org?format=json' : 'https://api.ipify.org?format=json';

        fetch(url).then((res) => res.json()).then((data) => setIp(data.ip)).then((err) => setError('Failed to fetch IP Address'));
    }, [version]);

    return(
        
        <div>
            <p>
                {version === 'v6' ? 'IPv6' : 'IPv4'} Address:{' '}
                {ip ? ip : error ? error : 'Loading...'}
            </p>
        </div>
    )
}

export default IPAddress;