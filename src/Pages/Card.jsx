import React , {Component } from 'react';


class Card extends Component {
    render(){
        return (
            <div className="card">
                <div className="status"><p>{this.props.statusname}</p></div>
                <div className="the-number"><p>{this.props.number}</p></div>
            </div>
        );
    }
}
 
export default Card;