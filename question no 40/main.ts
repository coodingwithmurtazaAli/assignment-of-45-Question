//Creat a function
function make_album(Artist_name :string,album_title ,track?:number){
let album: {
    Artist: string
    Title:string;
    track? :number}  = {
     Artist:Artist_name,
     Title:album_title,
       
    } 
    if(track!== undefined){
        album.track=track
    }

return album

}
 let album1 =make_album("murtaza","album title:1")

console.log(album1);

let album2= make_album("usman","album title:2")
console.log(album2);

let album3= make_album("asad","album title:3", 20 )
console.log(album3);















