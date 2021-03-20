import React, { Component, createContext, useEffect } from 'react'
import api from "./api"
const ProductContext = createContext()

class ProductProvider extends Component {
    userData;
    userNominee;
    userCount;
    state = {
        searchText: '',
        searchMovie: [],
        nominees: [],
        count: 0
    }
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('searchMovie'))
        this.userNominee = JSON.parse(localStorage.getItem('nominees'))
        this.userCount = JSON.parse(localStorage.getItem('count'))
        if (localStorage.getItem('searchMovie')) {
            this.setState({
                searchMovie: this.userData
            })
        }
        if (localStorage.getItem('nominees')) {
            this.setState({
                nominees: this.userNominee
            })
        }
        if (localStorage.getItem('count')) {
            this.setState({
               count: this.userCount
            })
        }
    }

handleInput = (e) => {
    const text = e.target.value
    this.setState(() => {
        return { searchText: text }
    })
}

onSearch = async (text) => {
    const results = await api.get("/", {
        params: { s: text, i: "tt3896198", apiKey: "39dbbe28" },
    });
    let tempMovies = [...this.state.searchMovie]
    let movies = results
    let movie = movies.data.Search
    let filterMovie = movie.find((item) => item.Title === text)
    tempMovies = [...tempMovies, filterMovie]
    this.setState(() => {
        return { searchMovie: tempMovies }
    })
    const { searchMovie } = this.state
    localStorage.setItem('searchMovie', JSON.stringify(searchMovie))
}
handleEnterKeyPressed = (e) => {
    if (e.key === 'Enter') {
        this.onSearch(this.state.searchText)
    }
}

removeBlog = (id) => {
    let tempValues = [...this.state.searchMovie]
    let removedData = tempValues.filter((item) => item.imdbID !== id)
    this.setState(() => {
        return { searchMovie: removedData }
    })
    let data=tempValues
    data=data.filter((item)=>item.imdbID!==id)
    localStorage.setItem('searchMovie', JSON.stringify(data))
}

addToNominee = (id) => {
    let tempValues = [...this.state.searchMovie]
    let removedData = tempValues.filter((item) => item.imdbID !== id)
    let tempNominee = [...this.state.nominees]
    let added = tempValues.find((item) => item.imdbID === id)
    let count = this.state.count
    count = count + 1
    if (count > 5) {
        count = count - 1
        alert("You can only add 5 nominations")
        this.setState(() => {
            return { nominees: tempNominee, count: count }
        })
    }
    else {
        tempNominee = [...tempNominee, added]
        this.setState(() => {
            return { searchMovie: removedData, nominees: tempNominee, count: count }
        })
    }
    const incre = count
    localStorage.setItem('count', JSON.stringify(incre))
    localStorage.setItem('searchMovie', JSON.stringify(removedData))
    localStorage.setItem('nominees', JSON.stringify(tempNominee))

}
removeNominee = (id) => {
    let tempNominees = [...this.state.nominees]
    let count = this.state.count
    count = count - 1
    let newNominees = tempNominees.filter((item) => item.imdbID !== id)
    this.setState(() => {
        return { nominees: newNominees, count: count }
    })
    let data = JSON.parse(localStorage.getItem('nominees'))
    data = data.filter((item) => item.imdbID !== id)
    localStorage.setItem('nominees', JSON.stringify(data))
    const decre=count
    localStorage.setItem('count', JSON.stringify(decre))
}
render() {
    return (
        <ProductContext.Provider value={{
            ...this.state,
            handleInput: this.handleInput,
            handleEnterKeyPressed: this.handleEnterKeyPressed,
            removeBlog: this.removeBlog,
            addToNominee: this.addToNominee,
            removeNominee: this.removeNominee
        }}>
            {this.props.children}
        </ProductContext.Provider>
    )
}
}

const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }