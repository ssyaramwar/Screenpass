import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
const SeatLayout = () => {

  const {id, date} = useParams()
  const [selectedSeats,setselecedSeats] = useState([])
  const [selecetdTime,setSelectedTime] = useState(null)
  const [show,setShow] = useState(null)

  const navigate=useNavigate()
  const getShow=async()=>{
    const show= dummyShowsData.find(show=>show._id===id)
    if(show){
      setShow({
        movie:show,
        dateTime:dummyDateTimeData
      })
    }
  }

  useEffect(()=>{
    getShow()
  }, [id])



  return show ?(
    <div className='flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50 '>
      {/*Available Timings*/}
      <div className='w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30'>
      <p className='text-lg font-semibold px-6'>
        Available Timings
      </p>
      <div className='mt-5 '>
        {show.dateTime[date].map((item)=>(
          <div className={`flex items-center justify-between px-6 py-3 mt-4 rounded cursor-pointer ${selecetdTime===item.time ? "bg-primary text-white" : "bg-primary/10 text-primary"}`}> 
            <ClockIcon className="w-4 h-4"/>
            <p className='text-sm'>{item.time}</p>
          </div>
        ))}
      </div>

      </div>
      {/*seatLayout*/}
      <div>

      </div>

    </div>
  ):(
    <div className='flex justify-center items-center h-screen'>
      <Loading />
    </div>
  )
}

export default SeatLayout
