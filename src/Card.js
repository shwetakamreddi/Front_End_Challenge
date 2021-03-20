import React from 'react'
export default function Card({ item,value}) {
    const {imdbID,Poster,Year,Title}=item;
    const {removeBlog,addToNominee,nominees}=value;
    return (
        <div className="card m-5" style={{ "width": "18rem" }}>
            <img className="card-img-top" src={Poster} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{Title}</h5>
                <p className="card-text">{Year}</p>
                <div className="d-flex justify-content-around">
                    <span onClick={()=>{
                        removeBlog(imdbID)
                    }}>
                        <a href="#" className="btn btn-primary">Remove</a>
                    </span>
                    <span onClick={()=>{
                        localStorage.setItem('nominees', JSON.stringify(nominees))
                        addToNominee(imdbID)
                    }}>
                        <a href="#" className="btn btn-primary">Add</a>
                    </span>
                </div>
            </div>
        </div>
    )
}



