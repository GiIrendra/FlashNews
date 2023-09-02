import React, { Component } from 'react'

export class Newsitems extends Component {
  render() {
    let { title, description, imageurl, newsurl, author, date,source } = this.props;
    return (
      <div className='my-4 mx-3'>
        <div className="card " >
          <img src={imageurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...  
            <span style={{left:'90%',zIndex:1}} className="position-absolute top-0 roght-200  translate-middle badge rounded-pill bg-danger">{source}</span>
            
            <span className="badge bg-success">Success</span></h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-mouted'>By {author} on {new Date(date).toGMTString()} 3 min ago</small></p>
            <a href={newsurl} className="btn btn-sm btn-primary">Read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitems
