import React, { Component } from 'react'

class Preview extends Component {
  render() {
    const entry = this.props.entry;
    const image = entry.getIn(['data', 'thumbnail']);
    const bg = this.props.getAsset(image);
    return (
      <div>
        <h1>
          {entry.getIn(['data', 'title'])}
        </h1>
        <img src={(bg) ? bg.toString() : ``}/>
        <div className="text" >
           {this.props.widgetFor('body')}
         </div>
      </div>
    )
  }
}

export default Preview
