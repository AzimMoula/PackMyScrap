import { useState } from "react";

const BookingForm = () => {

    const [vehicle, setVehicle] = useState('')
    const [month, setMonth] = useState('')
    const [day, setDay] = useState('')
    const [time, setTime] = useState('')
    const [address, setAddress] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const booking = {vehicle, month, day, time, address};

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
            setDay('')
            setMonth('')
            setTime('')
            setVehicle('')
        }
    }

    return ( 
        <form className="booking" onSubmit={handleSubmit}>
            <label>Vehicle:</label>
            <input type="text" onChange={(e) => setVehicle(e.target.value)} value={vehicle}/>
            <label>Month:</label>
            <input type="text" onChange={(e) => setMonth(e.target.value)} value={month}/>
            <label>Day:</label>
            <input type="text" onChange={(e) => setDay(e.target.value)} value={day}/>
            <label>Time:</label>
            <input type="text" onChange={(e) => setTime(e.target.value)} value={time}/>
            <label>Address:</label>
            <input type="text" onChange={(e) => setAddress(e.target.value)} value={address}/>

            <button>Submit</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
}
 
export default BookingForm;