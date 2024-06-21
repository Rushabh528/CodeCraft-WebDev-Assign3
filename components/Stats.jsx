/* eslint-disable react/prop-types */
import '../styles/Stats.css';

function Stats(props) {
    return (
        <div className="carousel">
            <ul className="carousel-list">
                <li>
                    <h4>Intelligence: {props.stats.intelligence}</h4>
                </li>
                <li>
                    <h4>Strength: {props.stats.strength}</h4>
                </li>
                <li>
                    <h4>Speed: {props.stats.speed}</h4>
                </li>
                <li>
                    <h4>Durability: {props.stats.durability}</h4>
                </li>
                <li>
                    <h4>Power: {props.stats.power}</h4>
                </li>
                <li>
                    <h4>Combat: {props.stats.combat}</h4>
                </li>
            </ul>
        </div>
    );
}

export default Stats;
