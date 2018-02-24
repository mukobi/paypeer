import React from 'react';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {addClass: false}
    }

    toggle() {
        console.log("toggled" + this);
        this.setState({addClass: !this.state.addClass});
    }

    alertMe() {
        alert("test");
    }

    render() {
        let activeClass = ["toggle"];
        if(this.state.addClass) {
            activeClass.push('active');
        }
        return (
            <div className={activeClass.join(" ")} onClick={this.toggle.bind(this)}>
                <div className="toggle-title">
                    <h3>
                    <i></i>
                    <span className="title-name">{this.props.title}</span>
                    </h3>
                </div>
                <div className="toggle-inner">
                    <p>{this.props.text}</p>
                </div>
            </div>
        );
    }
}

export default Toggle;