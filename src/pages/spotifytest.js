import React, { Component, useEffect } from 'react'
import '../assets/scss/main.scss'
import {Link} from 'gatsby'

function spotifyTest() {
    useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;
    document.body.appendChild(script);
    window.onSpotifyWebPlaybackSDKReady = () => {
      const token = 'BQDsTM9xJRMTZSSJDslfb34HBahyhqKzsz1EIwhC1n3v3wxt0hkk4eC8r7k5VnxGm83lvAVYCf8Y1cNsOF-dwpz2zO1c7TUW7IHWK5umXLpItG2L0v-BrDBldHz4Xl-B_w5hnL-IlXxsJwG89xN-0YP5C56csiF_EG4';
      const player = new Spotify.Player({
        name: 'Web Playback SDK Quick Start Player',
        getOAuthToken: cb => { cb(token); }
      });

      // Error handling
      player.addListener('initialization_error', ({ message }) => { console.error(message); });
      player.addListener('authentication_error', ({ message }) => { console.error(message); });
      player.addListener('account_error', ({ message }) => { console.error(message); });
      player.addListener('playback_error', ({ message }) => { console.error(message); });

      // Playback status updates
      player.addListener('player_state_changed', state => { console.log(state); });

      // Ready
      player.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
      });

      // Not Ready
      player.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      // Connect to the player!
      player.connect();
    }
});
    return (
<html>
<head>
  <title>Spotify Web Playback SDK Quick Start Tutorial</title>
</head>
<body>
  <h1>Spotify Web Playback SDK Quick Start Tutorial</h1>
  <h2>Open your console log: <code>View > Developer > JavaScript Console</code></h2>
</body>
</html>
    )
}
export default spotifyTest
