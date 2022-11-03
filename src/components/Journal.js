import React from 'react'
export default function Journal(props) {

    return(
        <div className='journal--cover'>
            <div className='journal--japan'>
                <img  src={props.Travels.imageUrl}   alt='fuji' className='japan--pic'  />
                <div className='japan--text'>
                    <span className='journal--location'><span className='journal--true-location'>{props.Travels.location}</span><a href={props.Travels.googleMapsUrl} className='google--font'>View on Google Maps</a></span>
                    <h2 className='journal--title'>{props.Travels. title}</h2>
                    <span className='journal--date'>{props.Travels.startDate} - {props.Travels.endDate}</span>
                    <span>{props.Travels.description}</span>


                </div>
            </div>






        </div>
    )
    
}