import Display from "../components/Display/Display";
import quizData from "../data/quiz";
import Button from "../components/Button/Button";

export default function QuizPage() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [answersLogs, setAnswersLogs] = useState([]);

  const handleClick = (clickedIndex) => {
    if (clickedIndex === quizData[quizIndex].answerIndex) {
      setAnswersLogs((prev) => [...prev, true]);
    } else {
      setAnswersLogs((prev) => [...prev, false]);
    }
    setQuizIndex((prev) => prev + 1);
  };
  return (
    <>
      <Display>{`Q1. ${quizData[quizIndex].question}`}</Display>
      {quizData[quizIndex].options.map((option, index) => {
        return (
          <Button key={`option-${index}`} onClick={() => handleClick(index)}>
            {option}
          </Button>
        );
      })}
    </>
  );
}
