const sqlite = require('better-sqlite3');

const conn = sqlite('database.db');

const { nanoid } = require('nanoid');
const jwt = require('jsonwebtoken');

function all(query, params = {}) {
  const stmt = conn.prepare(query);
  return stmt.all(params);
}
function run(query, params = {}) {
  // prepare statement
  const stmt = conn.prepare(query);
  return stmt.run(params);
}

module.exports = {
  // A quick get all users for testing purposes
  getAllUsers() {
    let users = all(`SELECT userName, password FROM users`);
    return users;
  },

  // Get all playlist
  getAllPlaylists() {
    let playlists = all(`SELECT userName,playlistName
      FROM playlists, users, playlist_track_user
      WHERE playlists.id = playlist_track_user.playlistId
      AND users.id = playlist_track_user.userId
      ORDER BY userName`);
    return playlists;
  },
  createAccount(account) {
    const query = `INSERT INTO users(userName, password) VALUES(:userName,:password)`;
    return run(query, account);
  },
};
