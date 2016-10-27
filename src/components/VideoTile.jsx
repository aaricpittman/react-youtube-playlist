import React from 'react'

class VideoTile extends React.Component {
  constructor (props) {
    super(props)

    this._handleOnClick = this._handleOnClick.bind(this)
  }

  _handleOnClick (event) {
    if (this.props.onClick !== undefined) {
      this.props.onClick(this.props.id)
    }
  }

  render () {
    return (
      <div className='video-tile' onClick={this._handleOnClick}>
        <img className='video-thumbnail' src={this.props.thumbnailUrl} />
        <span className='video-title'>{this.props.title}</span>
      </div>
    )
  }
}

VideoTile.propTypes = {
  id: React.PropTypes.string,
  title: React.PropTypes.string,
  thumbnailUrl: React.PropTypes.string,
  onClick: React.PropTypes.func
}

export default VideoTile
