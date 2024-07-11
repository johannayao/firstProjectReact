import "./score.css"
const Score = ({qlength,point})=>{
    return(
        
        <div>
            <span className="pp">nombre de question:{qlength}</span>
            <h3 className="hum">Score:{point}</h3>
        </div>
    )
}
export default Score