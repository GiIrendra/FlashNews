import React, { Component } from 'react'
import Newsitems from './NewsItems.js'
import Spinner from './Spinner.js';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
  static defaultPros = {
    country: 'in',
    pagesize: 8,
    category: 'genral'
  }
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  }

  articles = []
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: true,
      page: 1,
      totalResults: 0,
    }
    document.title = this.props.category;
  }

  async componentDidMount() {
    this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2d15754a596440f3b8645d1d3df6b8df&page=${this.state.page}&pageSize=${this.props.pagesize}`;
    this.props.setProgress(10);
    this.setState({ loading: true })
    let data = await fetch(url);
    this.props.setProgress(50);
    let parsedData = await data.json();
    this.props.setProgress(70);
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false, author: parsedData.author, });
    this.props.setProgress(100);
    console.log(this.props.apiKey)
    console.log(this.props.pagesize)
    console.log("Helnhlo")
  }

  // handlePrev = async () => {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page - 1}&pageSize=${this.props.pagesize}`;
  //   this.setState({ loading: true })
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   this.setState({
  //     page: this.state.page - 1,
  //     articles: parsedData.articles,
  //     loading: false,
  //   });
  // }
  handleNext = async () => {
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize))) {
    //   console.log(this.state.page);
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pagesize}`;
    //   this.setState({ loading: true })
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   console.log(parsedData);
    //   this.setState({
    //     loading: false,
    //     page: this.state.page + 1,
    //     articles: parsedData.articles
    //   });
    // }
  }
  fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: this.state.articles.concat(parsedData.articles)
    })

    // }
  };
  render() {
    return (
      <div className='container my-3'>
        <h1 className='text-center' style={{ marginTop: '90px',color:"white" }}>FlashNews - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="row container">
            {/* {!this.state.loading && this.state.articles.map((ele) => { */}
            {this.state.articles.map((ele) => {
              return <div className="col-md-4" key={ele.url}>
                <Newsitems title={ele.title ? ele.title.slice(0, 45) : ""} author={ele.author ? ele.author : "Unknown"} source={ele.source.name} date={ele.publishedAt} description={ele.description ? ele.description.slice(0, 88) : ""} imageurl={ele.urlToImage ? ele.urlToImage : "https://c.ndtvimg.com/2022-12/j4perbig_deepika_625x300_02_December_22.jpg"} newsurl={ele.url} />
              </div>
            })}
          </div>
        </InfiniteScroll>
        {/* This is for next and previous button which have 2 methods above those are commented */}
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page === 1} type="button" className="btn btn-dark " onClick={this.handlePrev}>&#8592; Previous</button>
          <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-dark " onClick={this.handleNext}>Next &#8594;</button>
        </div> */}
      </div>
    )
  }
}