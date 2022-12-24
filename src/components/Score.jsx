// Styles
import "../styles/score/score.css";
import "../styles/score/responsive.css";

const Score = () => {
  return (
    <section className="score">
      <div className="score__title">
        ROCK
        PAPER
        SCISSORS
      </div>
      <div className="score__points">
        <p>SCORE</p>
        <span>12</span>
      </div>
    </section>
  )
}

export default Score