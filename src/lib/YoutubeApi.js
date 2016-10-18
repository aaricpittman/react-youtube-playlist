import DomUtility from './DomUtility'

export default class YoutubeApi {
  static _googleApiClientLoaded (resolve) {
    this._gapi.client.setApiKey(this._apiKey)
    this._gapi.client.load('youtube', 'v3', () => {
      resolve()
    })
  }

  static _loadClientApi () {
    this._gapi = window.gapi

    return new Promise(
      (resolve, reject) => {
        this._gapi.load('client', () => {
          this._googleApiClientLoaded(resolve)
        })
      }
    )
  }

  static fetchVideos (playlistId) {
    var request = this._gapi.client.youtube.playlistItems.list({
      part: 'snippet,contentDetails,status',
      playlistId: playlistId
    })

    return new Promise(
      (resolve, reject) => {
        request.execute((response) => {
          resolve(response.result.items)
        })
      }
    )
  }

  static initialize (apiKey) {
    this._apiKey = apiKey

    return new Promise(
      (resolve, reject) => {
        DomUtility.createScriptTag('https://apis.google.com/js/api.js')
          .then(() => this._loadClientApi())
          .then(() => { resolve() })
      }
    )
  }
}
