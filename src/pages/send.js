import React from 'react'
import '../style/send.css';

const Send = () => (
    <div className="b-content b-send">
        <div className="title">
            <h1>Send</h1>
        </div>
        <div className="send-widget">
            <h2>Find users</h2>
            <div className="input">
                <input type="text" name="nick" className="search-text" placeholder="Search by nickname..." />
                <input type="submit" className="search-submit" name="search" value="Search" />
            </div>
        </div>
    </div>
);

export default Send
