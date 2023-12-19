import React from "react";
import './Cliqcard.css'

import { BsBagFill, BsHeartFill, BsHeart } from 'react-icons/bs'
import { useDispatch, useSelector } from "react-redux";
import { handlearr } from "../Redux/Slice.js";

const Wishlistcard = () => {
  
    let state=useSelector((samp)=>samp)
    console.log(state)
    let dispatch=useDispatch()


    let add = (getid) => {
        let y = state.data.arr.data.map((e) => {
            return getid === e.id ?
                e.card === false ? { ...e, card:true }
                    : { ...e, card:false } : e
        })
        dispatch(handlearr(y))

    }

    let heart = (getid) => {
        let x = state.data.arr.data.map((e) => {
            return getid === e.id ?
                e.fav === 'false' ? { ...e, fav:"true" }
                    : { ...e, fav: "false" } : e
        })

        dispatch(handlearr(x))
    }

    return <section>
        <div className="cardcon">
            <div className="cardrow">
                {
                    state.data.arr.data.map((a, b) => {
                        return a.fav === 'true' ? <div key={b} className="cardcol">
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
                                        <div className="add" onClick={() => add(a.id)}><BsBagFill /></div> : ''
                                }



                            </div>
                        </div> : ''
                    })

                }
            </div>
            {
                state.data.arr.data.map((e, i) => {
                    console.log(state.oops, e.fav)
                    return state.oops === false && e.fav === "false" ?

                        i === state.arr.length - 1 ?
                            <div>
                                <h1>no wishlist</h1>
                            </div> : ''
                        : ""
                })
            }

        </div>

    </section>
}

export default Wishlistcard