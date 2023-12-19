import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { handlename,handlearr } from "../Redux/Slice.js";

const Home=()=>{
    let state=useSelector((samp)=>samp)
        console.log(state)
        let dispatch=useDispatch()

    let updatename=()=>{

        dispatch(handlename("Tamil"))
    }
    let updatearr=()=>{
       let x= state.data.arr.filter((a)=>{
            return a>2
        })

        dispatch(handlearr(x))
    }
    
    return <div>
        {state.data.name}
        <button onClick={updatename}>click</button>
        {state.data.arr.map((a)=>{
            return <h4>{a}</h4>
        })}
         <button onClick={updatearr}>click</button>
         <div>
            {
                state.data.arrobj.map((e)=>{
                    return <div>
                        <h4 on>{e.name}</h4>
                        <p>{e.work}</p>
                    </div>
                })
            }
        </div>

    </div>
}
export default Home