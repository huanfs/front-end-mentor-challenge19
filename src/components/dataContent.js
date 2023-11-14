import style from "./dataStyles.css";
import {useState, useEffect} from 'react';
const DataContent = (props) => {
    const [date, setDate] = useState(new Date());
    const [method, setMethod] = useState();
    const [match, setMatch] = useState();

    useEffect(()=>{
            const metodo = `get${props.type}()`;
            setMethod(metodo);
    },[])

    useEffect(()=>{
        if(method=="getDay()"){
            setMatch(date.getDay())
        }
        else if(method=="getHours()"){
            setMatch(date.getHours())
        }
        else if(method=="getMinutes()"){
            setMatch(date.getMinutes())
        }
        else if(method=="getSeconds()"){
            setMatch(date.getSeconds())
        }
    })

    


    return(
        <div className="visor">
            <h2>{match}</h2>
            <p className="typeOfData">{props.type}</p>
        </div>
    )
}

export default DataContent;