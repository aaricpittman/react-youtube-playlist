export default class DomUtility {
  static createScriptTag (src) {
    return new Promise(
      (resolve, reject) => {
        var head = document.getElementsByTagName('head')[0]
        var tag = document.createElement('script')
        tag.src = src
        tag.addEventListener('load', (e) => { resolve() }, false)
        head.appendChild(tag)
      }
    )
  }
}
