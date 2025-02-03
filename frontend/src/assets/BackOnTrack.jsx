import React from 'react'

const BackOnTrack = ({setGameName}) => {
    const goBack  = () => {
        setGameName('')
      }
  return (
    <button className=' ml-3  border-sky-600 border-2  p-2 rounded-full text-sky-600 absolute top-5 left-5 uppercase cursor-pointer' onClick={() => goBack()}> <i className='fa fa-arrow-left'></i></button>

  )
}

export default BackOnTrack