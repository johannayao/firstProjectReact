import { useState } from "react";

    const Papa = ()=>{
        const [change , setChange] = useState("")
        return (
            <div>
                <input onChange={(e) => setChange(e.target.value) } type="text" />
                <input type="text" />
                <input type="text" />
                <button>envoyer</button>
                <p>{change}</p>
                <button>envoyer</button>
            </div>
        )
}


export default Papa;