require('normalize.css/normalize.css')
require('styles/App.scss')

import React from 'react'

let imageDatas = require('../data/imageDate.json')

// 获取图片相关的数据
imageDatas = (function genImageURL(imageDataArray) {
  for (let i = 0; i < imageDataArray.length; i++) {
    let singleImageData = imageDataArray[i]
    singleImageData.imageURL = `../images/${singleImageData.filename}`
    imageDataArray[i] = singleImageData
  }
  return imageDataArray
})(imageDatas)

// 图片组件
var ImgFigure = React.createClass({
  render: function() {
    return (
      <figure className="img-figure">
        <img className="figure-img" src={this.props.data.imageURL} />
        <figurecaption>
          <h2 className="img-title">{this.props.data.title}</h2>
        </figurecaption>
      </figure>
    )
  }
})


class AppComponent extends React.Component {
  render() {

    var controllerUnits = []
    var imgFigures = []
    imageDatas.forEach(function(value) {
      imgFigures.push(<ImgFigure data={value} />)
    })
    return (
      <section className="stage">
        <section className="img-sec">
          {imgFigures}
        </section>
        <nav className="controller-nav">
          {controllerUnits}
        </nav>
      </section>
    )
  }
}

AppComponent.defaultProps = {}

export default AppComponent
