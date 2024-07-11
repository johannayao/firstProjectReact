import { useState } from "react";
import Header from "./component/quiz/header"
import Score from './component/quiz/score.jsx'
import Question from "./component/quiz/question";
import "./quiz.css"

const Quiz = ()=>{
    return(
        <div className="containt">
            <Header title="bienvenu johannaaaa"/>
            <Score qlength= {10} point={20}/>
            <Question question={19}/>
        </div>
    )
}

export default Quiz