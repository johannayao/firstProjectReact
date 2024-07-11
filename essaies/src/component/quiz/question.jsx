const Question = ({question})=>{
    return(
        <div>
            <p>{question}</p>
            <p>
                <input name="ki" id="un" type="radio" />
                <label htmlFor="un">vrai</label>
               
            </p>
            <p>
                <input name="ki" id="deu" type="radio" />
                <label  htmlFor="deu">faux</label>
            </p>
        </div>
    )
}
export default Question