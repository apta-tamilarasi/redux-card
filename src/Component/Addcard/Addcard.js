import React from "react";
import './Cliqcard.css'

import { BsBagFill, BsHeartFill, BsHeart } from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux"
import { handlearr } from "../Redux/Slice.js";



const Addcard = () => {
    let state=useSelector((samp)=>samp)
    console.log(state)
    let dispatch=useDispatch()

    let add = (getid) => {
        let y = state.data.arr.data.map((e) => {
            return getid === e.id ?
                e.card === false ? { ...e, card:true ,opps:true}
                    : { ...e, card:false } : e
        })

        dispatch(handlearr(y))
        console.log(state.arr)
    }

    let heart = (getid) => {
        let x = state.data.arr.data.map((e) => {
            return getid === e.id ?
                e.fav === 'false' ? { ...e, fav:"true" }
                    : { ...e, fav:"false" } : e
        })
        dispatch(handlearr(x))
    }

    let inc=(getid)=>{
        let y= state.data.arr.data.map((e)=>{
             return getid===e.id?
             e.card===true?{...e,count:e.count+1}:e:e
         })
 
         dispatch(handlearr(y))
     }

     let de=(getid)=>{
        let y= state.data.arr.data.map((e)=>{
             return getid===e.id?
             e.card===true?
             e.count>1?{...e,count:e.count-1}:{...e,card:false}:e:e
         })
 
         dispatch(handlearr(y))
        
     }

    return <section>
        <div className="cardcon">
            <div className="cardrow">
                {
                    state.data.arr.data.map((a, b) => {
                        console.log(a)
                        return a.card === true ? <div key={b} className="cardcol">
                            <div className="cardimg">
                                <img src={a.path} alt="loading" />
                            </div>
                            <div className="cardabout">
                                <h3>{a.name}</h3>
                                <p>{a.about}</p>
                            </div>

                            <div className="cardprice">
                                <h4>{a.oldrate}</h4>
                                <h5><s>{a.newrate}</s></h5>
                                <div id="offer">{a.offer}% Offer</div>
                            </div>

                            <div className="cardicon">
                                {a.fav === 'false' ? <div onClick={() => heart(a.id)} ><BsHeart /></div> :
                                    <div onClick={() => heart(a.id)} style={{ color: 'red' }}><BsHeartFill /></div>

                                }
                                {
                                    a.card === false ?
                                        <div className="add" onClick={() => add(a.id)}><BsBagFill /></div> :
                                        <div className="inde"><button onClick={() => de(a.id)}>-</button> <span>{a.count}</span> <button onClick={() => inc(a.id)}>+</button></div>
                                }
                            </div>
                        </div> : ''
                    })

                }
            </div>
        </div>

    </section>
}

export default Addcard