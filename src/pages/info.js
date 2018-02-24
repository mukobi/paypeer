import React from 'react';
import Toggle from '../components/toggle';

const Info = () => (
    <div>
        <div>
            <h1>Info</h1>
        </div>
        <div className="container"> 
            <Toggle title="What is Litecoin?" text="Litecoin, or LTC, is a peer-to-peer open source cryptocurrency that was developed by Charlie Lee, former Director of Engineering at Coinbase, in 2011. Litecoin is very similar to Bitcoin, but offers fastest transaction times at lower fees. Some have referred to LTC as the “Silver to BTCs Gold”." />
        </div>
    </div>
);

export default Info
