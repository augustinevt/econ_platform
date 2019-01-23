import React, {Component} from 'react';

import { Drawer, Button } from 'antd';

import makingStencil from '../images/makingStencil.jpg';
import finishedStencil from '../images/finishedStencil.jpg';
import prePaintStencil from '../images/prePainting.jpg';
import painting from '../images/painting.jpg';
import postPaintStencil from '../images/postPaintStencil.jpg';
// import gordian from '../images/gordian.png';
import myVideo from '../images/dabbingPainting.mp4';

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
          <img style={{width: '500px'}} src={makingStencil} alt="" />
          <img style={{width: '500px'}} src={finishedStencil} alt="" />
          <img style={{width: '500px'}} src={prePaintStencil} alt="" />
          <video style={{width: '500px'}} autoPlay src={myVideo} type="video/mp4" />;
          <img style={{width: '500px'}} src={painting} alt="" />
          <img style={{width: '500px'}} src={postPaintStencil} alt="" />

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
            <img style={{width: '100px'}} src={`${process.env.PUBLIC_URL}/${section.image}.jpg`} alt="" />
            {section.text}
          </div>)
        }
      </div>
    )
  }

  openDrawer = () => this.setState({drawerOpen: true});
  closeDrawer = () => this.setState({drawerOpen: false});
};

export default BlogContainer;



// <div className="blogContainer">
//   <Button onClick={this.props.back}> Back </Button>
//   <Button onClick={this.openDrawer}>open drawer</Button>
//   <Drawer
//     width={700}
//     visible={this.state.drawerOpen}
//     onClose={this.closeDrawer}
//   >
//     <img style={{width: '500px'}} src={makingStencil} alt="" />
//     <img style={{width: '500px'}} src={finishedStencil} alt="" />
//     <img style={{width: '500px'}} src={prePaintStencil} alt="" />
//     <video style={{width: '500px'}} autoPlay src={myVideo} type="video/mp4" />;
//     <img style={{width: '500px'}} src={painting} alt="" />
//     <img style={{width: '500px'}} src={postPaintStencil} alt="" />
//
//   </Drawer>
//
//   <div className="blogBodyWrapper">
//     {blogBody}
//   </div>
// </div>
