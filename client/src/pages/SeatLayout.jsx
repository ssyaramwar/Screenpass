// import { ClockIcon } from 'lucide-react'
// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import Loading from '../components/Loading'
// const SeatLayout = () => {

//     const { id, date } = useParams()

//     const [selectedSeats, setSelectedSeats] = useState([])
//     const [selectedTime, setSelectedTime] = useState(null)
//     const [show, setShow] = useState(null)

//     const navigate = useNavigate()

//     // const getShow = async () => {

//     //     const movie = dummyShowsData.find(show => show._id === id)

//     //     if (movie) {
//     //         setShow({
//     //             movie: movie,
//     //             dateTime: dummyDateTimeData
//     //         })
//     //     }
//     // }

//  const getShow = async () => {

//     const movie = dummyShowsData.find(
//         show => String(show._id) === String(id)
//     )

//     console.log("id:", id)
//     console.log("movie:", movie)

//     if (movie) {
//         setShow({
//             movie: movie,
//             dateTime: dummyDateTimeData
//         })
//     }
// }
//     useEffect(() => {
//         getShow()
//     }, [id])

//     return show ? (

//         <div className='flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50'>

//             {/* Available Timings */}

//             <div className='w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30'>

//                 <p className='text-lg font-semibold px-6'>
//                     Available Timings
//                 </p>

//                 <div className='mt-5 space-y-1'>

//                     {show.dateTime[date]?.map((item) => (

//                         <div
//                             key={item.time}
//                             onClick={() => setSelectedTime(item)}
//                             className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer transition
//                             ${
//                                 selectedTime?.time === item.time
//                                     ? "bg-primary text-white"
//                                     : "hover:bg-primary/20"
//                             }`}
//                         >

//                             <ClockIcon className='w-4 h-4' />

//                             <p className='text-sm'>
//                                 {item.time}
//                             </p>

//                         </div>

//                     ))}

//                 </div>

//             </div>

//             {/* Seats Layout */}

//             <div>

//             </div>

//         </div>

//     ) : (

//        <Loading/>

//     )
// }

// export default SeatLayout
// import { ClockIcon } from 'lucide-react'
// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'

// import Loading from '../components/Loading'
// import { dummyShowsData, dummyDateTimeData } from '../assets/assets'

// const SeatLayout = () => {

//   const { id, date } = useParams()

//   const [selectedSeats, setSelectedSeats] = useState([])
//   const [selectedTime, setSelectedTime] = useState(null)
//   const [show, setShow] = useState(null)

//   const navigate = useNavigate()

//   const getShow = async () => {

//     const movie = dummyShowsData.find(
//       show => String(show._id) === String(id)
//     )

//     if (movie) {
//       setShow({
//         movie: movie,
//         dateTime: dummyDateTimeData
//       })
//     }
//   }

//   useEffect(() => {
//     getShow()
//   }, [id])

//   return show ? (

//     <div className='flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50'>

//       {/* Available Timings */}

//       <div className='w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30'>

//         <p className='text-lg font-semibold px-6'>
//           Available Timings
//         </p>

//         <div className='mt-5 space-y-1'>

//           {show.dateTime[date]?.map((item) => (

//             <div
//               key={item.time}
//               onClick={() => setSelectedTime(item)}
//               className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer transition ${
//                 selectedTime?.time === item.time
//                   ? 'bg-primary text-white'
//                   : 'hover:bg-primary/20'
//               }`}
//             >

//               <ClockIcon className='w-4 h-4' />

//               <p className='text-sm'>
//                 {item.time}
//               </p>

//             </div>

//           ))}

//         </div>

//       </div>

//       {/* Seats Layout */}

//       <div>

//       </div>

//     </div>

//   ) : (

//     <Loading />

//   )
// }

// export default SeatLayout








// import { ClockIcon } from 'lucide-react'
// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import BlurCircle from '../components/BlurCircle'
// import Loading from '../components/Loading'
// import { dummyShowsData, dummyDateTimeData } from '../assets/assets'
// import {assets} from '../assets/assets'
// import toast from 'react-hot-toast'
// const SeatLayout = () => {


//     const groupRows =[["A" ,"B"] ,["C" ,"D"] ,["E","F"],["G","H"],["I","J"]]

//     const { id, date } = useParams()

//     const [selectedSeats, setSelectedSeats] = useState([])
//     const [selectedTime, setSelectedTime] = useState(null)
//     const [show, setShow] = useState(null)

//     const navigate = useNavigate()

//     const getShow = async () => {

//         const movie = dummyShowsData.find(
//             show => String(show._id) === String(id)
//         )

//         console.log("Movie ID:", id)
//         console.log("Selected Date:", date)
//         console.log("Movie:", movie)
//         console.log("Available timings:", dummyDateTimeData[date])

//         if (movie) {

//             setShow({
//                 movie: movie,
//                 dateTime: dummyDateTimeData
//             })

//         }
//     }
// const handleSeatClick =(seatId) =>{
//     if (!selectedTime) {
//         return toast("Please select time First")

//     }

//     if (!selectedSeats.includes(seatId) && selectedSeats.length >4){
//         return toast("You Can Only Select 5 Seats ")
//     }
//     setSelectedSeats(prev =>
//     prev.includes(seatId)
//         ? prev.filter(seat => seat!== seatId)
//         : [...prev, seatId]
// )
// }



//     const renderSeats =(row ,count =9) =>(
//         <div key ={row} className="flex gap-2 mt-2">
//             <div className ="flex flex-wrap items-center justify-center gap-2">
//                 {Array.from({length:count}, (_,i)=>{
//                     const seatId =`${row}${i+1}`;
//                     return (
//                         <button key={seatId} onClick ={() => handleSeatClick 
//                             (seatId)} className={`h-8 w-8 rounded border border-primary/60 cursor-pointer ${selectedSeats.includes(seatId) && "bg-primary text-white"} `}> {seatId}
//                             </button>
//                     );
//                 })
//         </div>

//     )

//     useEffect(() => {
//         getShow()
//     }, [id, date])

//     return show ? (

//         <div className='flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50'>

//             {/* Available Timings */}

//             <div className='w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30'>

//                 <p className='text-lg font-semibold px-6'>
//                     Available Timings
//                 </p>

//                 <div className='mt-5 space-y-1'>

//                     {show.dateTime[date]?.map((item) => (

//                         <div
//                             key={item.showId}
//                             onClick={() => setSelectedTime(item)}
//                             className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md cursor-pointer transition ${
//                                 selectedTime?.showId === item.showId
//                                     ? 'bg-primary text-white'
//                                     : 'hover:bg-primary/20'
//                             }`}
//                         >

//                             <ClockIcon className='w-4 h-4' />

//                             <p className='text-sm'>
//                                 {new Date(item.time).toLocaleTimeString(
//                                     'en-IN',
//                                     {
//                                         hour: '2-digit',
//                                         minute: '2-digit'
//                                     }
//                                 )}
//                             </p>

//                         </div>

//                     ))}

//                     {/* No timings */}

//                     {!show.dateTime[date]?.length && (

//                         <p className='px-6 text-sm text-gray-400'>
//                             No timings available
//                         </p>

//                     )}

//                 </div>

//             </div>

//             {/* Seats Layout */}

//             <div className='flex-1 ml-0 md:ml-10 mt-10 md:mt-0'>

//                 {selectedTime ? (

//                     <div className='text-center'>
//                         <BlurCircle top= "-100px" left ="-100px"/>
//                         <BlurCircle bottom ="0" right ="0"/>
//                         <h2 className='text-xl  font-semibold'>
//                             Select Your Seats
//                         </h2>
//                         <div className="flex justify-center">
//                         <img src={assets.screenImage} alt ="Screen"/>
//                         </div>

//                         <p className='text-gray-400 mt-2'>
//                             {/* Show time: {new Date(selectedTime.time).toLocaleTimeString(
//                                 'en-IN',
//                                 {
//                                     hour: '2-digit',
//                                     minute: '2-digit'
//                                 }
//                             )} */}

//                             <h1>SCREEN SIDE</h1>
//                         </p>


//                         <div className='flex flex-col item-center mt-10 text-xs text-gray-300'>
//                             <div>
//                                 {groupRows[0].map(row => renderSeats(row))}

//                         </div>

//                     </div>

//                 ) : (

//                     <p className='text-gray-400 text-center text-xl'>
//                         Select a show timing to continue.
//                     </p>

//                 )}

//             </div>

//         </div>

//     ) : (

//         <Loading />

//     )
// }

// export default SeatLayout







import { ArrowRightIcon, ClockIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import BlurCircle from '../components/BlurCircle'
import Loading from '../components/Loading'

import {
    assets,
    dummyShowsData,
    dummyDateTimeData
} from '../assets/assets'

import toast from 'react-hot-toast'


const SeatLayout = () => {

    const groupRows = [
        ["A", "B"],
        ["C", "D"],
        ["E", "F"],
        ["G", "H"],
        ["I", "J"]
    ]

    const { id, date } = useParams()

    const [selectedSeats, setSelectedSeats] = useState([])
    const [selectedTime, setSelectedTime] = useState(null)
    const [show, setShow] = useState(null)


    // Get movie/show
    const getShow = async () => {

        const movie = dummyShowsData.find(
            show => String(show._id) === String(id)
        )

        console.log("Movie ID:", id)
        console.log("Selected Date:", date)
        console.log("Movie:", movie)
        console.log(
            "Available timings:",
            dummyDateTimeData[date]
        )

        if (movie) {

            setShow({
                movie: movie,
                dateTime: dummyDateTimeData
            })

        }
    }


    // Seat click handler
    const handleSeatClick = (seatId) => {

        // Time must be selected first
        if (!selectedTime) {
            return toast("Please select time first")
        }


        // Maximum 5 seats
        if (
            !selectedSeats.includes(seatId) &&
            selectedSeats.length >= 5
        ) {
            return toast("You can only select 5 seats")
        }


        // Select / deselect seat
        setSelectedSeats(prev =>
            prev.includes(seatId)
                ? prev.filter(seat => seat !== seatId)
                : [...prev, seatId]
        )

    }


    // Render seats
    const renderSeats = (row, count = 9) => (

        <div
            key={row}
            className="flex justify-center gap-2 mt-2"
        >

            {Array.from(
                { length: count },
                (_, i) => {

                    const seatId = `${row}${i + 1}`

                    return (

                        <button
                            key={seatId}
                            onClick={() =>
                                handleSeatClick(seatId)
                            }
                            className={`
                                h-8
                                w-8
                                rounded
                                border
                                border-primary/60
                                cursor-pointer
                                transition
                                ${
                                    selectedSeats.includes(seatId)
                                        ? "bg-primary text-white"
                                        : "hover:bg-primary/20"
                                }
                            `}
                        >
                            {seatId}
                        </button>

                    )

                }
            )}

        </div>

    )


    useEffect(() => {

        getShow()

        // Reset seats when date/movie changes
        setSelectedSeats([])
        setSelectedTime(null)

    }, [id, date])


    return show ? (

        <div className="flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30 md:pt-50">


            {/* ============================= */}
            {/* AVAILABLE TIMINGS */}
            {/* ============================= */}

            <div className="w-60 bg-primary/10 border border-primary/20 rounded-lg py-10 h-max md:sticky md:top-30">

                <p className="text-lg font-semibold px-6">
                    Available Timings
                </p>


                <div className="mt-5 space-y-1">

                    {show.dateTime[date]?.map((item) => (

                        <div
                            key={item.showId}
                            onClick={() =>
                                setSelectedTime(item)
                            }
                            className={`
                                flex
                                items-center
                                gap-2
                                px-6
                                py-2
                                w-max
                                rounded-r-md
                                cursor-pointer
                                transition
                                ${
                                    selectedTime?.showId === item.showId
                                        ? "bg-primary text-white"
                                        : "hover:bg-primary/20"
                                }
                            `}
                        >

                            <ClockIcon className="w-4 h-4" />

                            <p className="text-sm">

                                {new Date(
                                    item.time
                                ).toLocaleTimeString(
                                    "en-IN",
                                    {
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    }
                                )}

                            </p>

                        </div>

                    ))}


                    {/* No timings */}

                    {!show.dateTime[date]?.length && (

                        <p className="px-6 text-sm text-gray-400">
                            No timings available
                        </p>

                    )}

                </div>

            </div>



            {/* ============================= */}
            {/* SEATS LAYOUT */}
            {/* ============================= */}

            <div className="flex-1 ml-0 md:ml-10 mt-10 md:mt-0">

                {selectedTime ? (

                    <div className="relative text-center">


                        {/* Background circles */}

                        <BlurCircle
                            top="-100px"
                            left="-100px"
                        />

                        <BlurCircle
                            bottom="0"
                            right="0"
                        />


                        {/* Heading */}

                        <h2 className="text-xl font-semibold">
                            Select Your Seats
                        </h2>


                        {/* Screen */}

                        <div className="flex justify-center mt-6">

                            <img
                                src={assets.screenImage}
                                alt="Screen"
                                className="max-w-full"
                            />

                        </div>


                        {/* Screen side */}

                        <h1 className="text-gray-400 mt-2">
                            SCREEN SIDE
                        </h1>


                        {/* ============================= */}
                        {/* SEATS */}
                        {/* ============================= */}

                        <div className="flex flex-col items-center mt-10 text-xs text-gray-300">

                            {/* A & B */}

                            <div>

                                {groupRows[0].map(row =>
                                    renderSeats(row)
                                )}

                            </div>


                            {/* C & D */}

                            <div className="mt-4">

                                {groupRows[1].map(row =>
                                    renderSeats(row)
                                )}

                            </div>


                            {/* E & F */}

                            <div className="mt-4">

                                {groupRows[2].map(row =>
                                    renderSeats(row)
                                )}

                            </div>


                            {/* G & H */}

                            <div className="mt-4">

                                {groupRows[3].map(row =>
                                    renderSeats(row)
                                )}

                            </div>


                            {/* I & J */}

                            <div className="mt-4">

                                {groupRows[4].map(row =>
                                    renderSeats(row)
                                )}

                            </div>

                        </div>


                        {/* Selected seats */}

                        <div className="mt-8">

                            <p className="text-gray-400">

                                Selected Seats:{" "}

                                {selectedSeats.length > 0
                                    ? selectedSeats.join(", ")
                                    : "None"
                                }

                            </p>

                        </div>

                        <buttton onClick ={()=>navigate ('/my-bookings')} 
                        className ='flex item-center gap-1 mt-20 px-10 py-30 text-sm bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer active:scale-95'>
                            Proceed to Checkout 
                            <ArrowRightIcon strokeWidth={3} className='w-4 h-4' />

                        </buttton>








                    </div>

                ) : (

                    <p className="text-gray-400 text-center text-xl">

                        Select a show timing to continue.

                    </p>

                )}

            </div>

        </div>

    ) : (

        <Loading />

    )
}


export default SeatLayout