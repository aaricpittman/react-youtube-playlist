import DomUtility from './DomUtility'

export default class YoutubeIframeApi {
  static initialize () {
    return new Promise(
      (resolve, reject) => {
        window.onYouTubeIframeAPIReady = () => {
          this.Player = window.YT.Player
          resolve()
        }
        DomUtility.createScriptTag('https://www.youtube.com/iframe_api')
      }
    )
  }
}
