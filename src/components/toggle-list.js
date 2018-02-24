import React from 'react';
import Toggle from './toggle';

class ToggleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: null
        };
        this.onChildToggle = this.onChildToggle.bind(this);
    }
    
    onChildToggle(id) {
        this.setState({
            active: id
        });
    }

    render() {
        return (
            <div className="toggle-list" >
                <Toggle id="1" activeId={this.state.active} onToggle={this.onChildToggle} title="What is Litecoin?" text="Litecoin, or LTC, is a peer-to-peer open source cryptocurrency that was developed by Charlie Lee, former Director of Engineering at Coinbase, in 2011. Litecoin is very similar to Bitcoin, but offers fastest transaction times at lower fees. Some have referred to LTC as the “Silver to BTCs Gold”." />
                <Toggle id="2" activeId={this.state.active} onToggle={this.onChildToggle} title="How Do I buy Litecoin from Litespeed?" text="Buying Litecoin on Litespeed is easy! Just navigate to the “Buy” Page, enter the ammount of Litecoin you want to buy, or USD you would like to spend, and click exchange! Its that easy!" />
                <Toggle id="3" activeId={this.state.active} onToggle={this.onChildToggle} title="How Do I Sell Litecoin on Litespeed?" text="Selling Litecoin on Litespeed is simple! Just Navigate to the “Sell” Page, enter the ammount of Litecoin you would like to sell and press “Exchange”. Once you have followed all the steps, you will recieve a notification and payment will be sent to the Payout Method you selected." />
                <Toggle id="4" activeId={this.state.active} onToggle={this.onChildToggle} title="How Do I send Litecoin to another user?" text="You can send Litecoin to another user by navigating to the “Wallet” Page and finding the form labeled “Send Litecoin”. Select the user you would like to send Litecoin to and press send!" />
                <Toggle id="5" activeId={this.state.active} onToggle={this.onChildToggle} title="Can I Deposit or Withdraw Litecoin to and from Litespeed's intergrated Wallet?" text="Yes! You can deposit Litecoin from an existing wallet to Litespeed’s entergrated Wallet and use that Litecoin to send to another user, or simply sell! You also have the option to Withdraw your Litecoin to an external Wallet." />
                <Toggle id="6" activeId={this.state.active} onToggle={this.onChildToggle} title="Why choose Litespeed?" text="Litespeed offers competive pricing and rates, entergrated wallet, secure transactions, user friendly UI, and the ability to Buy and Sell Litecoin without revealing personal information like SSN, I.D., Etc.. Litespeed’s focus is to deliever a user friendly experience, with low fees and rates, and with Payout and Purchasing Methods most exchanges do NOT accept." />
                <Toggle id="7" activeId={this.state.active} onToggle={this.onChildToggle} title="Is Litespeed Secure?" text="Yes, Litespeed has done everything in its power to provide a safe and user friendly experience when using our services. However, We take security very seriously, and urge all users to take all steps needed to keep thier accounts and wallets safe, including a strong password, Two-Step Authenticator, and keeping all login information private. Litespeed can not be held responsible for any hacked or stolen accounts and urge users to keep your accounts and personal information safe." />
                <Toggle id="8" activeId={this.state.active} onToggle={this.onChildToggle} title="Can my Sell order be denied?" text="Although it is rare that we would deny a users request to sell, Litespeed reserves the right to hold or cancel a sell we find to be suspicious. If your Sell Order has not been completed, and your payment has not been recieved, do not panic! If there is any delay in your order you can always contact support to check the status of your sell order in the instance where it is put on hold. If the Sell Order IS CANCELED, all funds will be sent back to your Litespeed Intergrated Wallet. If you feel like your sell order is wrongfuly denied, Please contact us." />
            </div>
        )
    }
}

export default ToggleList;