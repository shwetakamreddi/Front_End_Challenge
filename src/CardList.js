import React from 'react'
import Card from "./Card"
import { ProductConsumer } from "./Context"

export default function CardList() {
    return (
        <ProductConsumer>
            {
                (value) => {
                    const { searchMovie } = value
                    
                    return (
                        <>
                        <h1 className="mt-5">Choices For Nomination</h1>
                            <div className="movies row" style={{"border":"1px solid black","margin-top":"1rem","textAlign":"center","padding":"10px"}}>
                                {
                                    searchMovie.map((item) => {
                                        return (
                                            <Card className="col-4" key={item.imdbID} item={item} value={value}/>
                                        )
                                    })
                                }
                            </div>
                        </>
                    )
                }
            }
        </ProductConsumer>

    )
}
