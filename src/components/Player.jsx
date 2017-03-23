import React from 'react'
import YoutubeIframeApi from '../lib/YoutubeIframeApi'

class Player extends React.Component {
  _initializePlayer () {
    const {options} = this.props

    this.player = new YoutubeIframeApi.Player('player', {
      height: options.height.toString(),
      width: options.width.toString(),
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
  video: React.PropTypes.object.isRequired,
  options: React.PropTypes.shape({
    height: React.PropTypes.number,
    width: React.PropTypes.number,
    showControls: React.PropTypes.bool
  })
}

Player.defaultProps = {
  options: {
    height: 270,
    width: 480,
    showControls: true
  }
}

export default Player
