import './App.css'
import { useLocation } from 'react-router-dom'

export default function Dashboard() {

  let {state} = useLocation()

  return (
    <div className='m-5'>
      <img src={state.image} alt='Not found' className='float-child w-25 me-5 img'/>
      <div className='float-child text-center mt-5'>
        <u><h3>{state.title}</h3></u><br />
        <h5>Price : {state.price}</h5>
        <p className='lead'>{state.description}</p>
        <h6>Rating : {state.rating.rate}, Count : {state.rating.count}</h6>
      </div>
    </div>
  )
}
