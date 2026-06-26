import { useState, useEffect } from "react";
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
      setAnswersLogs(prev => [...prev, true]);
    } else {
      setAnswersLogs(prev => [...prev, false]);
    }
    setQuizIndex(prev => prev + 1);
  };

  useEffect(() => {
    if (answersLogs.length === MAX_QUIZ_LEN){
      const correctNum = answersLogs.filter(answer => answer === true)
      navigation(ROUTES.RESULT,{
        state: {
          maxQuizLen: MAX_QUIZ_LEN,
          correctNumLen: correctNum.length
        }
      });
    }
  },[answersLogs,MAX_QUIZ_LEN,navigation]);

  return (
    <>
      {quizData[quizIndex] &&<Display>{
      `Q${quizIndex +1}. ${quizData[quizIndex].question}`}</Display>}
      <br />
      {quizData[quizIndex]&& quizData[quizIndex].options.map((option, index) =>
          <Button key={`option-${index}`} onClick={() => handleClick(index)}>{option}</Button>)}
    </>
  );
}
