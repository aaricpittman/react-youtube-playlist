import React from 'react'
import ReactDOM from 'react-dom'

import Player from './Player'
import Playlist from './Playlist'

import YoutubeApi from '../lib/YoutubeApi'

class YoutubePlaylist extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      video: {},
      videos: []
    }

    this._handleOnVideoTileClick = this._handleOnVideoTileClick.bind(this)
  }

  _handleOnVideoTileClick (videoId) {
    this.setState({
      video: this.state.videos.find((video) => (video.id === videoId))
    })
  }

  componentDidMount () {
    YoutubeApi.initialize(this.props.youtubeApiKey)
      .then(() => YoutubeApi.fetchVideos(this.props.playlistId))
      .then((data) => {
        const videos = data.map((videoData) => {
          return {
            id: videoData.contentDetails.videoId,
            title: videoData.snippet.title,
            description: videoData.snippet.description,
            thumbnailUrl: videoData.snippet.thumbnails.default.url
          }
        })

        this.setState({
          video: videos[0],
          videos: videos
        })
      })
  }

  render () {
    return (
      <div className='yp-container'>
        <div className='yp-player-container'>
          <Player video={this.state.video} />
        </div>
        <Playlist videos={this.state.videos} onVideoTileClick={this._handleOnVideoTileClick} />
      </div>
    )
  }
}

YoutubePlaylist.propTypes = {
  youtubeApiKey: React.PropTypes.string.isRequired,
  playlistId: React.PropTypes.string.isRequired
}

export default YoutubePlaylist
