import HEADER_IMG from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={HEADER_IMG} alt="Quiz logo" />
      <h1>ReactQuiz</h1>
    </header>
  );
}
