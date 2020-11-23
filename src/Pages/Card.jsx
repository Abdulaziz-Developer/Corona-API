import React , {Component } from 'react';


class Card extends Component {
    render(){
        return (
            <div className="card">
                <div className="status">{this.props.statusname}</div>
                <div className="the-number">{this.props.number}</div>
            </div>
        );
    }
}
 
export default Card;