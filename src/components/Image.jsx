import React from 'react'

const Image = (props) => {
  const {data} = props;
  return (
    <div className='imgContainer'>
      <img src={data.hdurl} alt={data.title || 'bg-img'} className='space-img' />
    </div>
    
  )
}

export default Image