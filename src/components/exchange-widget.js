import React from 'react';
import '../style/exchange-widget.css';

const ExchangeWidget = () => (
    <div className="b-exchange-widget">
        <div className="input-area">
			<input className="currency-input" id="you-have" type="number" name="you have" placeholder="You have" />
			<select className="currency-type" id="primary" name="exchanged_from">
						<option>ETH</option>
						<option>ZEC</option>
						<option>DASH</option>
						<option>XRP</option>
						<option>XMR</option>
						<option>LTC</option>
			</select>
        </div>
        <i className="fas fa-exchange-alt" />
        <div className="input-area">
            <input className="currency-input" id="you-get" readOnly="true" type="number" name="you get" placeholder="You get" />
            <select className="currency-type" id="secondary" name="exchanged_to">
						<option>LTC</option>
						<option>ETH</option>
						<option>ZEC</option>
						<option>DASH</option>
						<option>XRP</option>
						<option>XMR</option>
            </select>
        </div>
    </div>
);

export default ExchangeWidget

