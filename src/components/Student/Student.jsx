import './Student.css';
import Score from '../Score/Score';

export default function Student(props) {
  return(
    <div className="Student">
      <h1>{props.name}</h1>
      <h2>{props.bio}</h2>

      {props.scores.map(s =>
        <Score 
          date={s.date}
          score={s.score}
        />
      )}
    </div>
  )
}