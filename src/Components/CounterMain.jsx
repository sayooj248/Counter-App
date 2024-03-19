import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase,decrease,reset } from '../Redux/Slice'

function CounterMain() {
  const count=useSelector((state)=>state.counter.value)
  const dispatch=useDispatch()
  return (
    <div className='w-100 justify-content-center align-item-center d-flex' style={{height:'220px'}}>
        <div className='w-50 border boder-light p-3'>
            <h1 className=' text-light text-center'>counter </h1>
            <h2 className='text-warning text-center'>{count}</h2>
            <div className=' mt-3 d-flex justify-content-between'>
              <button className=' btn btn-success' onClick={()=>{dispatch(increase())}}>Increase</button>
              <button className=' btn btn-info ' onClick={()=>{dispatch(reset())}}>Reset</button>
              <button className=' btn btn-danger'onClick={()=>{dispatch(decrease())}} >Decrease</button>

            </div>
        </div>
    </div>
  )
}

export default CounterMain