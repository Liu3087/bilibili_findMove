import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
import './index.css'

export default class Movie extends Component {

    render() {
        const {movieObj} = this.props
        return (
            <div className="movies_item">
                <a href={movieObj.a_url} target="_blank" rel="noreferrer" >
                    <LazyLoad height={155}>
                        <img className="movie_pic" src={movieObj.img_url} alt={movieObj.name} style={{width:"100%"}}/>
                    </LazyLoad>
                    <div className="movie_num">{movieObj.number}</div>
                    <div className="movie_tag">会员专享</div>
                    <div className="movie_name">{movieObj.name}</div>
                    <div className="movie_time">{movieObj.time}</div>
                </a>
            </div>
        )
    }
}
