$(document).ready(function () {
    // Load songs on page load
    loadSongs();

    // Handle form submission for adding a new song
    $("#add-song-form").submit(function (event) {
        event.preventDefault();
        var title = $("#title").val();
        var artist = $("#artist").val();
        var album = $("#album").val();
        var genre = $("#genre").val();
        var happiness = $("#happiness").val();
        var key = $("#key").val();
        var instrumental = $("#instrumental").val();
        var vocals = $("#vocals").val();

        // Validate form input
        if (!title || !artist || !genre || !happiness || !key) {
            $(".error").text("Please fill in all required fields.");
            return;
        }

        // Send AJAX request to add song to database
        $.ajax({
            type: "POST",
            url: "add-song.php",
            data: {
                title: title,
                artist: artist,
                album: album,
                genre: genre,
                happiness: happiness,
                key: key,
                instrumental: instrumental,
                vocals: vocals,
            },
            success: function () {
                // Clear form fields and reload songs
                $("#add-song-form")[0].reset();
                $(".error").text("");
                loadSongs();
            },
            error: function () {
                $(".error").text("An error occurred. Please try again later.");
            },
        });
    });

    // Handle deletion of a song
    $(document).on("click", ".delete-song", function(){
        var song_id = $(this).attr("data-id");
        var confirmation = confirm("Are you sure you want to delete this song?");
        if (confirmation) {
            $.ajax({
                url: "delete_song.php",
                type: "POST",
                data: { id: song_id },
                success: function(data) {
                    $("#song_" + song_id).fadeOut(500, function(){
                        $(this).remove();
                    });
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log(textStatus, errorThrown);
                }
            });
        }
    });
});
