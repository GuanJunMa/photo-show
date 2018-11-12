require('normalize.css/normalize.css')
require('styles/App.css')

import React from 'react'

let yeomanImage = require('../images/yeoman.png')

let imageDatas = require('../data/imageDate.json')

// 获取图片相关的数据
imageDatas = (function genImageURL(imageDataArray) {
  for (let i = 0; i < imageDataArray.length; i++) {
    let singleImageData = imageDataArray[i]

    singleImageData.imageURL = require(`../images/${singleImageData.fileName}`)

    imageDataArray[i] = singleImageData
  }
  return imageDataArray
})(imageDatas)

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className="img-sec"></section>
        <nav className="controller-nav"></nav>
      </section>
    )
  }
}

AppComponent.defaultProps = {}

export default AppComponent
