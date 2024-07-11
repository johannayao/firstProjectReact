import "./question.css"
const Question = ({question})=>{
    return(
        <div className="vuvu">
            <h1 className="gros">{question}</h1>
            <span>
                <input name="ki" id="un" type="radio" />
                <label htmlFor="un">vrai</label>
               
            </span>
            <span className="one">
                <input name="ki" id="deu" type="radio" />
                <label  htmlFor="deu">faux</label>
            </span>
        </div>
    )
}
export default Question