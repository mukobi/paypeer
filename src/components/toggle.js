import React from 'react';

class Toggle extends React.Component {

    onToggle() {
        this.props.onToggle(this.props.id);
    }

    render() {
        let outerClass = this.props.activeId === this.props.id ? "toggle active" : "toggle";
        return (
            <div className={outerClass} onClick={this.onToggle.bind(this) }>
                <div className="toggle-title">
                    <h3>
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