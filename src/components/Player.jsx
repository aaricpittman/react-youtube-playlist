import React from 'react'
import YoutubeIframeApi from '../lib/YoutubeIframeApi'

class Player extends React.Component {
  _initializePlayer () {
    this.player = new YoutubeIframeApi.Player('player', {
      height: '270',
      width: '480',
      playerVars: {
        modestbranding: 0,
        showinfo: 0,
        controls: 1
      },
      events: {
        'onReady': () => { }
      }
    })
  }

  _cueVideo (videoId) {
    this.player.cueVideoById({
      videoId: videoId
    })
  }

  componentDidMount () {
    YoutubeIframeApi.initialize().then(() => { this._initializePlayer() })
  }

  componentWillUpdate (nextProps, nextState) {
    this._cueVideo(nextProps.video.id)
  }

  render () {
    return (
      <div className='yp-player-container'>
        <div id='player' />
        <span className='yp-player-title'>{this.props.video.title}</span>
      </div>
    )
  }
}

Player.propTypes = {
  video: React.PropTypes.object
}

export default Player
