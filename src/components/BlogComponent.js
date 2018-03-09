import React from "react";
import {Link} from 'react-router-dom';

const NothingToShot = () => {
  return (
    <section id="nothing-to-show" className="welcome">
      <div className="quote text-center">
        <h2>Nothing to show</h2>
        <span className="author">There is no post yet...</span>
      </div>
      <div className="overlay"></div>
    </section>
  )
}

const PostList = (props) => {
  const id = props.id
  return (
    <section id="blog" className="blog">
      <div className="section-header">
        <h2>Blog News</h2>
      </div>

      <div className="item">
        <div className="row">
          <div className="thumb col-md-4 col-sm-3 col-xs-12">
            <img src="http://placehold.it/180x180" alt="blog-post"/>
          </div>
          <div className="text col-md-8 col-sm-9 col-xs-12">
            <h2>First Blog Post Title</h2>
            <p>Lorem ipsum dolor sit amet, viris decore eu ius, his natum labores cu. Ius
              vidit nominavi no. At mei officiis forensibus quaerendum.
            </p>
            <Link to={`post/${id}`} className="btn btn-default">Read more</Link>
          </div>
        </div>
      </div>

      <div className="item">
        <div className="row">
          <div className="thumb col-md-4 col-sm-3 col-xs-12">
            <img src="http://placehold.it/180x180" alt="blog-post"/>
          </div>
          <div className="text col-md-8 col-sm-9 col-xs-12">
            <h2>Second Blog Post Title</h2>
            <p>Lorem ipsum dolor sit amet, cum partem melius nostrum te, cu pri quis dicant
              accusamus. Ius vidit nominavi no. At mei officiis forensibus quaerendum.</p>
            <Link to={`post/${id}`} className="btn btn-default">Read more</Link>
          </div>
        </div>
      </div>

      <div className="more-items">
        <a href="blog.html">
          <i className="fa fa-th-large" aria-hidden="true"></i>More Posts</a>
      </div>
    </section>
  )
}

export const BlogComponent = (props) => {
  return props.id
    ? <PostList id={props.id}/>
    : <NothingToShot/>
}