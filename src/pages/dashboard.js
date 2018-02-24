import React from 'react';
import TradingView from '../components/trading-view';

const Dashboard = () => (
    <div className="b-content" >
        <div className="title">
            <h1>Dashboard</h1>
        </div>
        <div className="balance">
            <h2>Balance</h2>
            <p>Please login to see your balance</p>
        </div>
        <div>
            <TradingView />
        </div>
    </div>
);

export default Dashboard
