import Display from "../components/Display/Display";
import Button from "../components/Button/Button";
import quizData from "../data/quiz";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../const";

export default function QuizPage() {
  const [quizIndex, setQuizIndex] = useState(0);
  const [answersLogs, setAnswersLogs] = useState([]);
  const navigation = useNavigate();
  const MAX_QUIZ_LEN = quizData.length

  const handleClick = (clickedIndex) => {
    if (clickedIndex === quizData[quizIndex].answerIndex) {
      setAnswersLogs((prev) => [...prev, true]);
    } else {
      setAnswersLogs((prev) => [...prev, false]);
    }
    setQuizIndex((prev) => prev + 1);
  };

  useEffect(() => {
    if (answersLogs.length === MAX_QUIZ_LEN){
      const correctNum = answersLogs.filter((answer) => {
        return answer === true
      })
      navigation(ROUTES.RESULT,{
        stete: {
          maxQuizLen: MAX_QUIZ_LEN,
          correctNum: correctNum
        }
      });
    }
  },[answersLogs]);

  return (
    <>
      <Display>{
      `Q1. ${quizData[quizIndex].question}`}</Display>
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
