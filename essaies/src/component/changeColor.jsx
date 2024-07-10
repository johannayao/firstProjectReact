import { useState,useEffect } from "react"

const ChangeColor = ()=>{
    const [color , setColor] = useState('#000000')
    useEffect(()=>{
        console.log("change");
    },[color])
    function genColor(){
        let optout = "#"
        const alphabet = "abcdef0123456789"
        while (optout.length<7){
            const index = Math.floor(Math.random() *alphabet.length)
            optout += alphabet[index]
        }
        console.log(optout);
        setColor(optout)
    }
        return(
           <div style={{backgroundColor:color, padding:"13rem"}}>
           <input onClick={()=>genColor()}value={color} onChange={(e)=>(setColor.e.target)}></input>
           </div>
        )
}



export {ChangeColor}