import React from 'react'
import { useState } from 'react'


const Calculator = () => {
    const [val,setVal] = useState("")
    
    const backspace = ()=>{
        try {
            setVal(val.slice(0,-1))
        } catch (error) {
            setVal("")
        }
    }
    const calculate = ()=>{
        try {
            setVal(eval(val))
        } catch (error) {
            setVal("Error")
        }
    }
  return (
    <div>
        <div className="container my-2">
            <div className="row">
                <div className="col-12">
                    <h1 className="display-5 fw-bolder text-center text-primary">CALCULATOR</h1><hr/>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-4">
                <div className="card  mb-3 pt-3 shadow">
                    <div className="card-body text-primary">
                        <input type="text" className="form-control form-control-lg mb-4 text-center bg-light
                        fs-4 text-primary shadow" value={val} onChange={(e)=>setVal(e.target.value)}/>
                        <div className="row mt-2">
                             <div className="col-3">
                                <button className="btn btn-light text-primary shadow p-4 fs-5" value="1" onClick={(e)=>setVal(val+e.target.value)}>1</button>
                             </div>
                             <div className="col-3">
                                <button className="btn btn-light text-primary shadow p-4 fs-5" value="2" onClick={(e)=>setVal(val+e.target.value)}>2</button>
                             </div>
                             <div className="col-3">
                                <button className="btn btn-light text-primary shadow p-4 fs-5" value="3" onClick={(e)=>setVal(val+e.target.value)}>3</button>
                             </div>
                             <div className="col-3">
                                <button className="btn btn-light text-primary shadow p-4 fs-5" value="C" onClick={()=>backspace()}>C</button>
                             </div>
                        </div>
                        <div className="row mt-2">
                             <div className="col-3">
                                <button className="btn btn-light text-primary shadow p-4 fs-5" value="4" onClick={(e)=>setVal(val+e.target.value)}>4</button>
                             </div>
                             <div className="col-3">
                                <button className="btn btn-light text-primary shadow p-4 fs-5" value="5" onClick={(e)=>setVal(val+e.target.value)}>5</button>
                             </div>
                             <div className="col-3">
                                <button className="btn btn-light text-primary shadow p-4 fs-5" value="6" onClick={(e)=>setVal(val+e.target.value)}>6</button>
                             </div>
                             <div className="col-3">
                                <button className="btn btn-light text-primary shadow p-4 fs-5" value="+" onClick={(e)=>setVal(val+e.target.value)}>+</button>
                             </div>
                        </div>
                        <div className="row mt-2">
                             <div className="col-3">
                                <button className="btn btn-light text-primary shadow p-4 fs-5" value="7" onClick={(e)=>setVal(val+e.target.value)}>7</button>
                             </div>
                             <div className="col-3">
                                <button className="btn btn-light text-primary shadow p-4 fs-5" value="8" onClick={(e)=>setVal(val+e.target.value)}>8</button>
                             </div>
                             <div className="col-3">
                                <button className="btn btn-light text-primary shadow p-4 fs-5" value="9" onClick={(e)=>setVal(val+e.target.value)}>9</button>
                             </div>
                             <div className="col-3">
                                <button className="btn btn-light text-primary shadow p-4 fs-5" value="*" onClick={(e)=>setVal(val+e.target.value)}>X</button>
                             </div>
                        </div>
                        <div className="row mt-2">
                             <div className="col-3">
                                <button className="btn btn-light text-primary shadow p-4 fs-5" value="." onClick={(e)=>setVal(val+e.target.value)}>.</button>
                             </div>
                             <div className="col-3">
                                <button className="btn btn-light text-primary shadow p-4 fs-5" value="0" onClick={(e)=>setVal(val+e.target.value)}>0</button>
                             </div>
                             <div className="col-3">
                                <button className="btn btn-light text-primary shadow p-4 fs-5" value="-"onClick={(e)=>setVal(val+e.target.value)} >-</button>
                             </div>
                             <div className="col-3">
                                <button className="btn btn-light text-primary shadow p-4 fs-5" value="/" onClick={(e)=>setVal(val+e.target.value)}>/</button>
                             </div>
                        </div>
                        <div className="row mt-4 border border-black">
                            
                            <button className="btn btn-light text-primary shadow p-4 fs-5 w-100" value="=" onClick={()=>calculate()}>=</button>
                            
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Calculator