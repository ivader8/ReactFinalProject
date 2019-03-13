import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'


const BookCard = ({ imageUrl, title, summary, id }) => {
    return (
        <Fragment>
            <div className="card col-4">
                <img className="card-img-top card-image"
                    src={imageUrl}
                    alt="What the Wind Knows " />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        {summary}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted"></small>
                    <Link
                        type="button"
                        className="btn btn-primary float-right btn-sm"
                        href={`/details/${id}`}
                    >
                        Details
                    </Link>
                    <button type="button" className="btn btn-warning float-right btn-sm">
                        Order
                    </button>
                </div>
            </div>
        </Fragment>
    );

};
export default BookCard;

