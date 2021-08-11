import './Score.css';

export default function Score(props) {
    return(
        <div className="Score">
            <h1>Date: {props.date}</h1>
            <h2>Score: {props.score}</h2>
        </div>
    )
}