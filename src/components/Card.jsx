import React, { Component } from 'react';

class Card extends Component {
    state = {
        clicked: false,
    }

    handleClick = () => { 
        if (!this.state.clicked) { 
            this.props.flipAndDiscard();
            this.setState({
                clicked: true,
            });
        } else { 
            this.props.returnToDeck();
            this.setState({
                clicked: false,
            });
        }
    }

    render() { 
        const { content, option, level } = this.props;

        return (
            <div className={`card`} onClick={this.handleClick}>
                <div className={`card__face card__face--front`}>
                    <p className={`card-content`}> { content } </p>
                </div>
                <div className={`card__face card__face--back`}>
                    <div className={`card-content-back`}>
                        <p className={`back-option`}> {option} </p>
                        <p className={`back-level`}> LEVEL {level} </p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Card;