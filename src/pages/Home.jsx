import React, { Component } from 'react';
import '../styles/Home.css';

import Game from '../components/Game';

class Home extends Component {
    state = {
        option: 'friends',
        level: 1,
        displayOptions: true,
        displayLevels: false,
        redirect: false,
    }

    handleFriends = () => { 
        this.setState({
            option: 'friends',
            displayOptions: false,
            displayLevels: true,
        });
    }

    handleDating = () => { 
        this.setState({
            option: 'dating',
            displayOptions: false,
            displayLevels: true,
        });
    }

    handleLevel = (level) => { 
        this.setState({
            level: level,
            redirect: true,
        });
    }

    handleBackButton = () => { 
        this.setState({
            displayOptions: true,
            displayLevels: false,
        });
    }

    handleHomeButton = () => { 
        this.setState({
            displayOptions: true,
            displayLevels: false,
            redirect: false,
        });
    }

    handleNextLevel = () => { 
        this.setState({
            displayOptions: false,
            displayLevels: true,
            redirect: false,
        }, () => { 
            if (this.state.level < 3) { 
                this.setState((prevState) => ({
                    level: prevState.level + 1,
                    redirect: true,
                }));
            }
        });
    }

    render() {
        if (this.state.redirect) { 
            return (
                <Game 
                    option={this.state.option}
                    level={this.state.level}
                    home={this.handleHomeButton}
                    nextLevel={this.handleNextLevel}
                />
            );
        } else {
            return (
                <div id="home">
                    <div className="home-container">
                        <div id="titleBar">
                            <h1 className="title"> LETS TALK </h1>
                        </div>

                        {this.state.displayOptions &&
                            <div className="options-container">
                                <button className="play-option" onClick={this.handleFriends}> FRIENDS </button>
                                <button className="play-option" onClick={this.handleDating}> DATING </button>
                            </div>
                        }

                        {this.state.displayLevels && 
                            <div className="levels-container">
                                <button className="level-option" onClick={() => this.handleLevel(1)}> LEVEL ONE </button>
                                <button className="level-option" onClick={() => this.handleLevel(2)}> LEVEL TWO </button>
                                <button className="level-option" onClick={() => this.handleLevel(3)}> LEVEL THREE </button>
                                <button className="back-button" onClick={this.handleBackButton}> BACK </button>
                            </div>
                        }
                    </div>
                </div>
            );
        }
    }
}

export default Home;