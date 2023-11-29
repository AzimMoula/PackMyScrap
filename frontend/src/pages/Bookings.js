import { useEffect, useState } from "react";
import BookingForm from "../components/BookingForm";

const Bookings = () => {
    
    const [bookings,setBookings] = useState(null)

    useEffect(() => {
    const fetchBookings = async () => {
        try {
            const response = await fetch('/bookings');
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const json = await response.json();
            setBookings(json);
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    };

    fetchBookings();
}, []);

    
    return (
        <div className="bookings">
            <h1>BOOKINGS</h1>
            <div>
                {bookings && bookings.map((booking) => (
                    <div key={booking._id}>
                        <h4>time of pickup: {booking.time}</h4>
                    </div>
                ))}
            </div>
            <BookingForm />
        </div>
    );
}
 
export default Bookings;