module.exports = {
  login: (req, res) => {
    res.redirect(
      "https://accounts.spotify.com/authorize" +
        "?response_type=code" +
        "&client_id=" +
        process.ENV.SPOTIFY_CLIENT_ID +
        "&redirect_uri=" +
        encodeURIComponent(redirect_uri)
    );
  }
};
