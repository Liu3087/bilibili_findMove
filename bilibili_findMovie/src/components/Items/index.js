import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class Items extends Component {

    state = {selectId:this.props.filters[0].id}

    updateFilter = (id)=>{
        const newselectId = id
        this.setState({selectId:newselectId})
    }

    render() {
        const {selectId} = this.state
        const {filters,saveMovies} = this.props
        return (
            <div className="filter_row">
                {
                    filters.map((filterObj)=>{
                        if(filterObj.id === selectId){
                            return <Item done={true} updateFilter={this.updateFilter} saveMovies={saveMovies} key={filterObj.id} {...filterObj}/>
                        }
                        else
                            return <Item done={false} updateFilter={this.updateFilter} saveMovies={saveMovies} key={filterObj.id} {...filterObj}/>
                    })
                }
            </div>
        )
    }
}
