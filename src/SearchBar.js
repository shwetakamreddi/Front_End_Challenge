import React from 'react'
import { ProductConsumer } from "./Context"

export default function SearchBar() {
    return (
        <ProductConsumer>
            {
                (value) => {
                    const {handleInput,searchText,handleEnterKeyPressed}=value
                    return (
                        <div>
                            <input type="text" className="form-control" placeholder="Search movies..." onChange={handleInput}
                                onKeyPress={handleEnterKeyPressed} value={searchText}
                            />
                        </div>
                    )
                }
            }
        </ProductConsumer>
    )
}
