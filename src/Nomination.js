import React from 'react'
import { ProductConsumer } from "./Context"
import Nominee from "./Nominee"

export default function Nomination() {
    return (
        <ProductConsumer>
            {
                (value) => {
                    const { nominees } = value
                    return (
                    <>
                    <h1 className="text-center">Nominess</h1>
                        <div className="movies row" style={{ "border": "1px solid black", "margin-top": "1rem", "textAlign": "center","padding":"10px"}}>
                            {
                                nominees.map((item) => {
                                    return <Nominee key={item.imdbID} item={item} value={value} />
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
