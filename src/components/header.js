import React from 'react';
import Score from './score';
import '../css/header.css';

const Header = (props) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="right">
                    <li> {/* Score card goes here */ }
                        <Score
                        score={props.score}
                        highScore={props.highScore}
                        round = {props.round}/>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;