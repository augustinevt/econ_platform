import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({id, selectBlog}) => {
  return <Link
    key={id}
    onClick={() => selectBlog(id)}
    to={`/econ_blog/${id}`}>
    Post {id}
  </Link>
}

const BlogList = ({blogData, selectBlog}) => {
  return (
    <div>
      {
        Object.keys(blogData).map((blogId) => <ListItem selectBlog={selectBlog} key={blogId} id={blogId} />)
      }
    </div>
  )
}

export default BlogList;
