import React from 'react';

const ExchangeWidget = () => (
    <div>
        <div>
		<input id="you-have" type="number" name="you have" placeholder="you have" />
            <select class="currency-type" id="primary" name="exchanged_from">
						<option>ETH</option>
						<option>ZEC</option>
						<option>DASH</option>
						<option>XRP</option>
						<option>XMR</option>
						<option>LTC</option>
					</select>
        </div>
        <i className="fas fa-exchange-alt" />
        <div>
            <input id="you-get" readonly="true" type="number" name="you get" placeholder="you Get" />
            <select class="currency-type" id="secondary" name="exchanged_to">
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

