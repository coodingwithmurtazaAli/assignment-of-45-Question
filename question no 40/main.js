//Creat a function
function make_album(Artist_name, album_title, track) {
    var album = {
        Artist: Artist_name,
        Title: album_title,
    };
    if (track !== undefined) {
        album.track = track;
    }
    return album;
}
var album1 = make_album("murtaza", "album title:1");
console.log(album1);
var album2 = make_album("usman", "album title:2");
console.log(album2);
var album3 = make_album("asad", "album title:3");
console.log(album3);
