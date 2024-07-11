import { useState } from "react";
import Header from "./component/quiz/header"
import Score from './component/quiz/score.jsx'
import Question from "./component/quiz/question";

const Quiz = ()=>{
    return(
        <div>
            <Header title="johannaaaaa"/>
            <Score qlength= {10} point={20}/>
            <Question question={19}/>
            
        </div>
    )
}

export default Quiz