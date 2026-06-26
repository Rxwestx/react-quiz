import {Link, useLocation } from "react-router-dom"
import { ROUTES } from "../const";

export default function ResultPage() {
  const location = useLocation();
  const { maxQuizLen, correctNumLen } = location.state || {};
  return (
    <>
      <h1>Result</h1>
      <p>あなたの正解数は...</p>
      <p>{`全${maxQuizLen}問中、${correctNumLen}問正解でした！`}</p>
      <br />
      <Link to={ROUTES.QUIZ}>もう一度チャレンジ</Link>
    </>
  )
}
