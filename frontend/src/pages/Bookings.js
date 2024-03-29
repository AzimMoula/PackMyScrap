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
            <div className="heading">
                <h1>BOOKINGS</h1>
                <button className="newBook">
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path fill="#ffffff" d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224div8c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288div00c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                    <p>New</p>
                </button>
            </div>
            <div className="booking-details">
                {bookings && bookings.map((booking) => (
                    <div key={booking._id} className="booking-details">
                        <h4>Pick-Up On: {booking.time}</h4>
                        <strong>Address: {booking.address}</strong>
                        <p>booking date: {booking.date}</p>
                    </div>
                ))}
            </div>
            <BookingForm/>
        </div>
    );
}
 
export default Bookings;