<!DOCTYPE html>
<html>
<head>
  <title>Music Management System</title>
  <link rel="stylesheet" href="admin.css">
  <script src="admin.js"></script>
</head>
<body>
  <div class="sidebar">
    <a class="active" href="#">Dashboard</a>
    <a href="#">Users</a>
    <a href="#">Songs</a>
    <a href="#">Albums</a>
    <a href="#">Genres</a>
  </div>

  <div class="content">
    <h1>Add a Song</h1>
    <form method="POST">
      <label for="title">Title:</label><br>
      <input type="text" id="title" name="title" required><br>

      <label for="artist">Artist:</label><br>
      <input type="text" id="artist" name="artist" required><br>

      <label for="album">Album:</label><br>
      <input type="text" id="album" name="album" required><br>

      <label for="year">Year:</label><br>
      <input type="text" id="year" name="year" required><br>

      <label for="genre">Genre:</label><br>
      <input type="text" id="genre" name="genre" required><br>

      <label for="happiness">Happiness:</label><br>
      <input type="text" id="happiness" name="happiness" required><br>

      <label for="key">Key:</label><br>
      <input type="text" id="key" name="key" required><br>

      <label for="instrumental">Instrumental:</label><br>
      <input type="text" id="instrumental" name="instrumental" required><br>

      <label for="vocals">Vocals:</label><br>
      <input type="text" id="vocals" name="vocals" required><br>

      <input type="submit" name="submit" value="Add Song">
    </form>
  </div>
</body>
</html>
