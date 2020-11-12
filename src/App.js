import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      displayShimmer: true,
      isLoading: true,
      imageURL: 'https://cdn.trell.co/h=1000,w=1000,fit=scale_down/format=webp/user-images/images/orig/pvKy02IQfNFYxLOOHP2HIK3k88JlB4Ou.jpg',
    }
  }

  componentDidMount = () => {
    this.checkBrowserSupport();
  }

  checkBrowserSupport = () => {
    const { imageURL } = this.state;
    const image = new Image();
    image.onload = () => {
      this.setState({ isLoading: false });
    }
    image.onerror = () => {
      this.setState({
        isLoading: false,
        imageURL: 'https://cdn.trell.co/h=1000,w=1000,fit=scale_down/format=jpg/user-images/images/orig/pvKy02IQfNFYxLOOHP2HIK3k88JlB4Ou.jpg',
      })
    };
    image.src = imageURL;
  }

  onImageLoad = () => {
    setTimeout(() => this.setState({ displayShimmer: false }), 2000);
  }

  onImageLoadError = () => {
    window.alert('Image could not be loaded')
  }

  render() {
    const { displayShimmer, isLoading, imageURL } = this.state;

    return (
      <div className="content">

        {(displayShimmer || isLoading) && <div className="shimmer"></div>}

        {!isLoading && <div style={{ display: displayShimmer ? 'none' : 'block' }}>
          <img
            src={imageURL}
            onLoad={this.onImageLoad}
            onError={this.onImageLoadError}
            alt={''}
            height="100%"
            width="100%"
          />
        </div>}

      </div>
    );
  }
}

export default App;
