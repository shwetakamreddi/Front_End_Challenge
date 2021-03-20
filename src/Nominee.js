import React from 'react'

export default function Nominee({ item, value }) {
    const { imdbID, Title, Year, Poster } = item
    const { removeNominee ,nominees} = value
    return (
        <div className="card m-5" style={{ "width": "18rem" }}>
            <img className="card-img-top" src={Poster} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{Title}</h5>
                <p className="card-text">{Year}</p>
                <div className="d-flex justify-content-around">
                    <span>
                        <a href="#" className="btn btn-primary" onClick={() => {
                            removeNominee(imdbID)
                        }}>Remove</a>
                    </span>
                </div>
            </div>
        </div>
    )
}
