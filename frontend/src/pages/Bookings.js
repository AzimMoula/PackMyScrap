import { useEffect } from "react";
import BookingForm from "../components/BookingForm";
import { useBookingsContext } from "../hooks/useBookingsContext";

const Bookings = () => {
    
    const { bookings,dispatch } = useBookingsContext()

    useEffect(() => {
    const fetchBookings = async () => {
        try {
            const response = await fetch('/bookings');
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const json = await response.json();
            dispatch({type: 'SET_BOOKINGS', payload: json})
        } catch (error) {
            console.error('Error fetching bookings:', error);
        }
    };

    fetchBookings();
}, [dispatch]);

    
    return (
        <div className="bookings">
            <h1 className="heading">BOOKINGS</h1>
            <div className="booking-details">
                {bookings && bookings.map((booking) => (
                    <div key={booking._id}>
                        <h4>time of pickup: {booking.time}</h4>
                    </div>
                ))}
            </div>
            <BookingForm/>
        </div>
    );
}
 
export default Bookings;