import React, { Component } from 'react'
import Movie from '../Movie'

export default class Movies extends Component {
    render() {
        const {movies} = this.props
        return (
            <div>
                {
                    movies.map((movieObj)=>{
                        return <Movie movieObj={movieObj} key={movieObj.id}/>
                    })
                }
            </div>
        )
    }
}
