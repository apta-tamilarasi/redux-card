import React from "react";
import './Cliqcard.css'

import { BsBagFill, BsHeartFill, BsHeart } from 'react-icons/bs'

import { useDispatch, useSelector } from "react-redux";
import { handlearr } from "../Redux/Slice.js";

const Cliqcard = () => {


    let state=useSelector((samp)=>samp)
    console.log(state)
    let dispatch=useDispatch()

    let heart = (getid) => {
        console.log('heart')
        let x =state.data.arr.data.map((e) => {
            return getid === e.id ?
             e.fav === 'false' ?({ ...e, fav:"true",opps:true })
                    : { ...e, fav:"false" } : e
        })

        // state.data.arr.data.find((e) => {
        //     return getid === e.id ?dispatch({type:'updateoops', payload:true}):''

        // })
        dispatch(handlearr(x))
        console.log(x)
        
    }

    
    let add=(getid)=>{
        let y= state.data.arr.data.map((e)=>{
             return getid===e.id?
             e.card===false?{...e,card:true}
             :{...e,card:false}:e
         })
 
         dispatch(handlearr(y))
        //  console.log(state.arr)
     }

     let inc=(getid)=>{
        let y=state.data.arr.data.map((e)=>{
             return getid===e.id?
             e.card===true?{...e,count:e.count+1}:e:e
         })
 
         dispatch(handlearr(y))
        //  console.log(state.arr)
     }

     let de=(getid)=>{
        let y= state.data.arr.data.map((e)=>{
             return getid===e.id?
             e.card===true?
             e.count>1?{...e,count:e.count-1}:{...e,card:false}:e:e
         })
 
         dispatch(handlearr(y))
        //  console.log(state.arr)
     }



    return <section>
        <div className="cardcon">
            <div className="cardrow">
                {
                    state.data.arr.data.map((a, b) => {
                       
                        return state.data.name==='' || state.data.name===null?<div key={b} className="cardcol">
                            <div className="cardimg">
                                <img src={a.path} alt="loading" />
                            </div>
                            <div className="cardabout">
                                <h3>{a.name}</h3>
                                <p>{a.about}</p>
                            </div>

                            <div className="cardprice">
                                <h4>Rs. {a.newrate}</h4>
                                <h5><s>{a.oldrate}</s></h5>
                                <div id="offer">{a.offer}% Offer</div>
                            </div>

                            <div className="cardicon">
                                {a.fav === 'false' ? <div onClick={() => heart(a.id)}><BsHeart /></div> :
                                    <div onClick={() => heart(a.id)} style={{ color: 'red' }}><BsHeartFill /></div>

                                }

                                {
                                    a.card===false?
                                    <div className="add" onClick={()=>add(a.id)}><BsBagFill /></div>:
                                    <div className="inde"><button onClick={()=>de(a.id)}>-</button> <span>{a.count}</span> <button onClick={()=>inc(a.id)}>+</button></div>
                                }
                               
                            </div>
                        </div>:a.type===state.data.name ||state.data.name===a.name ?
                        <div key={b} className="cardcol">
                        <div className="cardimg">
                            <img src={a.path} alt="loading" />
                        </div>
                        <div className="cardabout">
                            <h3>{a.name}</h3>
                            <p>{a.about}</p>
                        </div>

                        <div className="cardprice">
                            <h4>Rs. {a.newrate}</h4>
                            <h5><s>{a.oldrate}</s></h5>
                            <div id="offer">{a.offer}% Offer</div>
                        </div>

                        <div className="cardicon">
                            {a.fav === 'false' ? <div onClick={() => heart(a.id)}><BsHeart /></div> :
                                <div onClick={() => heart(a.id)} style={{ color: 'red' }}><BsHeartFill /></div>

                            }

                            {
                                a.card===false?
                                <div className="add" onClick={()=>add(a.id)}><BsBagFill /></div>:
                                <div className="inde"><button onClick={()=>de(a.id)}>-</button> <span>{a.count}</span> <button onClick={()=>inc(a.id)}>+</button></div>
                            }
                           
                        </div>
                    </div>:''
                    })

                }
            </div>
        </div>

    </section>
}

export default Cliqcard