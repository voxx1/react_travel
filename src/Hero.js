import { FaMapMarkerAlt } from 'react-icons/fa'


const Hero = (props) => {
    return (
        <div className="hero--container">
            <div className="hero--container--item">
                <img src={props.place.imageUrl} />
                <div className="hero--container--item--text">
                    <span><FaMapMarkerAlt style={{ color: 'red' }} /> {props.place.location.toUpperCase()} <a href={`${props.place.googleMapsUrl}`}>View on Google Maps</a></span>
                    <h2>{props.place.title}</h2>
                    <p className='date'>{props.place.startDate} - {props.place.endDate}</p>
                    <p className='text'>{props.place.description}</p>
                </div>
            </div>


        </div >
    )
}

export default Hero