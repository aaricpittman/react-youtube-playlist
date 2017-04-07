import React from 'react'
import ReactDOM from 'react-dom'

import YoutubePlaylist from '../'

const youtubeApiKey = 'AIzaSyAqQU_df_xHX8TlL-i1Q1nMUDU4lEsCivI'
const playlistId = 'UUcUxwTxfFrompp6JFqD3mbQ'

ReactDOM.render(<YoutubePlaylist youtubeApiKey={youtubeApiKey} playlistId={playlistId} />, document.getElementById('playlist-container'))