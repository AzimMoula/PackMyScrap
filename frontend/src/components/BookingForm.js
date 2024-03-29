import { useState } from "react";
import { useBookingsContext } from "../hooks/useBookingsContext";

const BookingForm = () => {
    const { dispatch } = useBookingsContext()

    const [vehicle, setVehicle] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [address, setAddress] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const booking = {vehicle, date, time, address};

        const response = await fetch('/bookings', {
            method: 'POST',
            body: JSON.stringify(booking),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const json = await response.json()
        if(!response.ok) {
            setError(json.error)
        }
        else {
            setError(null)
            setAddress('')
            setDate('')
            setTime('')
            setVehicle('')
            dispatch({type: 'CREATE_BOOKING', payload: json})
        }
    }

    return ( 
        <form className="bookform" onSubmit={handleSubmit}>
            <input type="text" onChange={(e) => setVehicle(e.target.value)} value={vehicle} placeholder="material"/>
            <input type="date" onChange={(e) => setDate(e.target.value)} value={date} placeholder="date"/>
            <input type="text" onChange={(e) => setTime(e.target.value+"")} value={time} placeholder="time"/>
            <input type="text" onChange={(e) => setAddress(e.target.value)} value={address} placeholder="address"/>

            <button>Submit</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
}
 
export default BookingForm;