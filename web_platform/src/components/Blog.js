import React, {Component} from 'react';

import { Drawer, Button } from 'antd';

class BlogContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: false,
    };
  }

  render() {
    const {blog} = this.props;
    const blogBody = this.getBlogBody(blog);
    return (
      <div className="blogContainer">
        <Button onClick={this.props.back}> Back </Button>
        <Button onClick={this.openDrawer}>open drawer</Button>
        <Drawer
          width={700}
          visible={this.state.drawerOpen}
          onClose={this.closeDrawer}
        >
          drawer!
        </Drawer>

        <div className="blogBodyWrapper">
          {blogBody}
        </div>
      </div>
    )
  }

  getBlogBody = (blogData) => {
    return (
      <div className="blogBody">
        <h1>{blogData.title}</h1>
        {
          blogData.sections.map((section)=> <div className="blogSection">
            {section.body}
          </div>)
        }
      </div>
    )
  }

  openDrawer = () => this.setState({drawerOpen: true});
  closeDrawer = () => this.setState({drawerOpen: false});
};

export default BlogContainer;
