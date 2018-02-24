import React from 'react';
import ToggleList from '../components/toggle-list';

import '../style/info.css';

const Info = () => (
    <div className="b-info">
        <div>
            <h1>Info</h1>
        </div>
        <div className="container"> 
            <ToggleList />
        </div>
    </div>
);

export default Info
