import React from 'react'
import { Link } from 'react-router-dom';

export const HeroCard = ({
    data
}) => {
  return (
    <div className='col animate__animated animate__fadeIn'>
        <div className="card">
            <div className="row no-glutters">
                <div className="col-4">
                    <img src={data.images.md} alt={''} className='card-img' />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{ data.name }</h5>
                        <p className="card-text">{  }</p>
                        <p className="card-text">{ data.biography.publisher }</p>

                        <Link to={`/hero/${data.id}`}>
                            More info...
                        </Link>
                    </div>
                </div>
            </div>
        </div> 
    </div>
  )
}
