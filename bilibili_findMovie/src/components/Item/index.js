import React, { Component } from 'react'
import axios from 'axios'
import './index.css'

export default class Item extends Component {

    handleCss = (id)=>{
        return this.props.updateFilter(id)
    }

    getMovieData = ()=>{
        axios.get('http://localhost:3000/movies').then(
            response =>{
                this.props.saveMovies(response.data);
            },
            error => {console.log('请求服务器失败',error);}
        )
    }

    componentDidMount(){
        this.getMovieData();
    }

    render() {
        const change = {true:'after',false:'before'}
        const {id,name,href,done} = this.props
        return (           
                <a className={change[done]} onClick={() => {this.handleCss(id);this.getMovieData()}} href={href}>{name}</a>                
        )
    }
}
