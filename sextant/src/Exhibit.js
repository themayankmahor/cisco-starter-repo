import React from "react";

function Exhibit({heading, children}) {
    return(
        <div style={{ border: '1px solid #ccc', margin: '1rem', padding: '1rem', borderRadius: '8px' }}>
        <h2>{heading}</h2>
        <div>{children}</div>
      </div>
    );
}

export default Exhibit;