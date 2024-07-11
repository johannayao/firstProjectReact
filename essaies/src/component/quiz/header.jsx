
import { useState } from "react";
import "./header.css"
const Header = (props)=>{
    return(
        <>
            <u className="trais"><h1 className="une">{props.title}</h1></u>
        </>
    )
}
export default Header