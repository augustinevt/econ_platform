import React, {Component} from 'react';
// import { Switch, Route } from "react-router-dom";
import Blog from '../components/Blog';
import BlogList from '../components/BlogList';


import blogMock from '../tmp_blog_files/test';

class BlogContainer extends Component {
  constructor(props)  {
    super(props);

    this.state = {
      selected: props.match.params.id || null,
    }
  }

  render() {
    return (
      <div className="blogContainer">
        {
          !this.state.selected ?
            <BlogList blogData={blogMock} selectBlog={(id) => this.setState({selected: id})} /> :
            <Blog back={() => this.setState({selected: null})} blog={blogMock[this.state.selected]} />
        }
      </div>
    )
  }
};

export default BlogContainer;
