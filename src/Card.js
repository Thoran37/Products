import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Card(props) {

  let navigate = useNavigate()

  function navigateDashboard() {
    navigate(`dashboard/${props.data.title}`, { state: props.data })
  }
  return (
    <div className='col mb-3'>
      <div className='card h-100 shadow-lg p-3'>
        <img src={props.data.image} className='card-img-top' alt='Not found' style={{ height: "300px" }} />
        <div className='card-body'>
          <h4 className='card-title'>{props.data.title}</h4>
        </div>
        <button type='button' className='btn btn-info w-50 mx-auto' onClick={navigateDashboard}>Details</button>
      </div>
    </div>
  )
}
