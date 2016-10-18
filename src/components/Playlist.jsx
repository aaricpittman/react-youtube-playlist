import React from 'react'

import VideoTile from './VideoTile'

class Playlist extends React.Component {
  constructor (props) {
    super(props)

    this._handleVideoTileClick = this._handleVideoTileClick.bind(this)
  }

  _handleVideoTileClick (videoId) {
    if (this.props.onVideoTileClick !== undefined) {
      this.props.onVideoTileClick(videoId)
    }
  }

  render () {
    return (
      <div className='yp-playlist-container'>
        {this.props.videos
          .map((video, index) => (
            <VideoTile key={video.id} onClick={this._handleVideoTileClick} {...video} />
        ))}
      </div>
    )
  }
}

Playlist.defaultProps = {
  videos: []
}

Playlist.propTypes = {
  videos: React.PropTypes.array,
  onVideoTileClick: React.PropTypes.func
}

export default Playlist
