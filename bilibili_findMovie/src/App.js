import React, { Component } from 'react'
import Items from './components/Items'
import Movies from './components/Movies'
import './App.css'

export default class App extends Component {

    state = {
        data: {
            filters: [
                {id:"001",filter:[
                    {id:"01",name:"最多播放",href:"#play"},
                    {id:"02",name:"最近更新",href:"#update"},
                    {id:"03",name:"最新上映",href:"#release"}
                ]},
                {id:"002",filter:[
                    {id:"04",name:"全部",href:"#all"},
                    {id:"05",name:"中国大陆",href:"#china"},
                    {id:"06",name:"中国港台",href:"#chinese"},
                    {id:"07",name:"美国",href:"#america"},
                    {id:"08",name:"日本",href:"#japan"},
                    {id:"09",name:"韩国",href:"#korea"},
                    {id:"10",name:"法国",href:"#france"},
                    {id:"11",name:"英国",href:"#britain"},
                    {id:"12",name:"德国",href:"#germany"},
                    {id:"13",name:"泰国",href:"#thailand"},
                    {id:"14",name:"意大利",href:"#italy"},
                    {id:"15",name:"西班牙",href:"#spain"},
                    {id:"16",name:"其他国家",href:"#other"}
                ]},
                {id:"003",filter:[
                    {id:"17",name:"全部",href:"#all"},
                    {id:"18",name:"剧情",href:"#drama"},
                    {id:"19",name:"喜剧",href:"#comedy"},
                    {id:"20",name:"爱情",href:"#affectional"},
                    {id:"21",name:"动作",href:"#action"},
                    {id:"22",name:"恐怖",href:"#horror"},
                    {id:"23",name:"科幻",href:"#science"},
                    {id:"24",name:"犯罪",href:"#italy"},
                    {id:"25",name:"惊悚",href:"#crime"},
                    {id:"26",name:"悬疑",href:"#suspense"},
                    {id:"27",name:"奇幻",href:"#fantasy"},
                    {id:"28",name:"战争",href:"#war"},
                    {id:"29",name:"动画",href:"#cartoon"},
                    {id:"30",name:"传记",href:"#biography"},
                    {id:"31",name:"家庭",href:"#family"},
                    {id:"32",name:"歌舞",href:"#musical"},
                    {id:"33",name:"历史",href:"#history"},
                    {id:"34",name:"冒险",href:"#adventure"},
                    {id:"35",name:"纪实",href:"#documentray"},
                    {id:"36",name:"灾难",href:"#disaster"},
                    {id:"37",name:"漫画改",href:"#manga"},
                    {id:"38",name:"小说改",href:"#novel"}
                ]},
                {id:"004",filter:[
                    {id:"39",name:"全部",href:"#all"},
                    {id:"40",name:"2021",href:"#2021"},
                    {id:"41",name:"2020",href:"#2020"},
                    {id:"42",name:"2019",href:"#2019"},
                    {id:"43",name:"2018",href:"#2018"},
                    {id:"44",name:"2017",href:"#2017"},
                    {id:"45",name:"2016",href:"#2016"},
                    {id:"46",name:"2015-2010",href:"#2015-2010"},
                    {id:"47",name:"2009-2005",href:"#2009-2005"},
                    {id:"48",name:"2004-2000",href:"#2004-2000"},
                    {id:"50",name:"90年代",href:"#90s"},
                    {id:"51",name:"80年代",href:"#80s"},
                    {id:"52",name:"更早",href:"#earlier"},
                ]},
                {id:"005",filter:[
                    {id:"53",name:"全部",href:"#all"},
                    {id:"54",name:"免费",href:"#free"},
                    {id:"55",name:"付费",href:"#pay"},
                    {id:"56",name:"大会员",href:"#member"}
                ]},
            ],
            movies: [],
            // loading: false,
            // currentPage: 1,
            // pageSize: 10,
            // count: 0
        }
    }

    saveMovies = (movies)=>{
        const {data} = this.state
        this.setState({data:{...data,movies}})
    }

    // UNSAFE_componentWillMount(){
    //     this.getData();
    // }

    // getData = ()=>{
    //     this.setState({data.loading:true})
    //     axios.get('http://localhost:3000/movies').then(
    //         response =>{
    //             this.props.saveMovies(response.data);
    //         },
    //         error => {console.log('请求服务器失败',error);}
    //     )
    //     this.setState(prevState => {
    //         count:response.data.length,
    //         loading:false,
    //         movies:[...prevState.]
    //     })
    // }

    render() {
        const {data} = this.state
        return (
            <div>
                {
                    data.filters.map((filtersObj)=>{
                        return <Items filters={filtersObj.filter} saveMovies={this.saveMovies} key={filtersObj.id} {...filtersObj}/>
                    })
                }
                <Movies movies={data.movies}/>
            </div>            
        )
    }
}