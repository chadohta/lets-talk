import React, { Component } from 'react';
import '../styles/Game.css';

import { getCards } from '../db/cards';
import Card from './Card';

class Game extends Component {
    freezeClick = false;

    state = {
        option: '',
        level: 1,
        cards: [],
    }

    componentDidMount = () => {
        var option = this.props.option;
        var level = this.props.level;
        this.setState({
            option: option,
            level: level,
        }, () => {
            this.getDeck();
        });
    }

    getDeck = () => { 
        var cards = getCards(this.state.option, this.state.level);
        this.shuffleArray(cards);
        this.setState({
            cards: cards,
        });
    }

    shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    flipAndDiscard = () => { 
        this.freezeClick = true;
        let card = document.querySelector(".card:last-child");
        card.style.animation = "flipping 1s linear forwards";

        let discardPile = document.querySelector(".discard-pile");
        setTimeout(() => { 
            card.style.animation = "";
            card.classList.toggle("is-flipped");
            card.classList.add('card-discard');
            card.classList.remove('card');
            discardPile.append(card);
            this.freezeClick = false;
        }, 1000);
    }

    returnToDeck = () => { 
        this.freezeClick = true;
        let card = document.querySelector(".card-discard:last-child");
        card.style.animation = "reverse-flip 1s linear forwards";

        let stack = document.querySelector(".stack");
        setTimeout(() => {
            card.style.animation = "";
            card.classList.toggle("is-flipped");
            card.classList.remove('card-discard');
            card.classList.add('card');
            stack.append(card);
            this.freezeClick = false;
        }, 1000);
    }

    freezeClickFn = (e) => {
        if (this.freezeClick) {
            e.stopPropagation();
            e.preventDefault();
        }
    }

    render() { 
        const { cards, option, level } = this.state;
        document.addEventListener("click", this.freezeClickFn, true);

        return (
            <div id="game">
                <button className="home-button" onClick={this.props.home}> HOME </button>

                <div className="stack">
                    <button className="next-level-button" onClick={this.props.nextLevel}> NEXT LEVEL </button>
                    {cards.map((card, index) => {
                        return (
                            <Card 
                                key={index} 
                                option={option}
                                level={level}
                                content={card} 
                                flipAndDiscard={this.flipAndDiscard}
                                returnToDeck={this.returnToDeck}
                            />
                        );
                    })}
                </div>

                <div className="discard-pile">
                    <div className="discard-placeholder"></div>
                </div>
            </div>
        );
    }
}
 
export default Game;