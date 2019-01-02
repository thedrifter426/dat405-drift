
 //let playlistArray = ["1","2","3","4","5","6","70","8","9","10","11","12","13",
//                 "14","15","16","17","18","19","20","21","22","23","24","25"];
/*let vidsArray = ["Mandy - Offcial Trailer","Annihilation (2018) - Official Trailer - Paramount Pictures","Love After Love - Official Trailer | HD | IFC Films","The Rider | Official Trailer HD (2017)",
                "You Were Never Really Here - Official Trailer | Amazon Studios","First Reformed | Offical Trailer HD | A24","Zama - Offical US Trailer HD","24 Frames | Trailer | New Release",
                 "A Private War #1 (2018) | Movieclips Trailers","Eight Grade Trailer #1 (2018) Movieclips Indie","Thunder Road ( Offical Trailer 2018)",
                 "Shoplifters English Final Trailer","The Ballad Of Buster Scruggs | Offical Trailer [HD] | Nextflix","Film Worker - Offical Trailer","Paddington 2 - Offical Film Trailer (International)",
                 "The Endless Trailer #2 (2018) | Movieclips Indie","A PRAYER BEFORE DAWN Offical Trailer (2018)","Leave No Trace | Official Trailer","Burning (2018) Offical US Trailer | Steve Yeun Movieclips",
                 "Bisbee'17 - Official Trailer","I Am Not a Witch Trailer #1 (2018) Movieclips Indie","THE SISTERS BROTHERS Official Trailer (2018) Jake Gyllenhaal, Joaquin Phoenix Movie HD",
                 "Mission Impossible - Fallout (2018) - Official Trailer - Paramount Pictures","THE FAVOURITE | Official Trailer | FOX Searchlight","Blackklansman Trailer #1 (2018) | MOvieclips Trailers"]

let apiKey = "AIzaSyBTJk8fkdQWjgTX3Sm2ZZOa3XrDnjOelJ8";
let playlistID = "PL59kBvngMdr1y_bTsizi6b5dDhz9eJ0kB";
let playlist = [];
let url =
//JSON returned link below
//https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PL59kBvngMdr1y_bTsizi6b5dDhz9eJ0kB&key=AIzaSyBTJk8fkdQWjgTX3Sm2ZZOa3XrDnjOelJ8
function preload() {

  //  for (let i=0; < videoArray.length; i++)

    //  let playlistId ="PL59kBvngMdr1y_bTsizi6b5dDhz9eJ0kB"
    for (let i=0; i<25; i++){
    //  let url = "https://www.googleapis.com/youtube//playlistItems?"+vidsArray[i]+apiKey;UCkv4ojGqC7PkWS9SJtkyXUg
      let url = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PL59kBvngMdr1y_bTsizi6b5dDhz9eJ0kB&key=" + apiKey;
      playlist[i] = loadJSON(url);
          // playlist[i] = "savedata";
  }
}*/
/*function setup(){
  createCanvas(600, 600);
  textSize(18);

console.log(playlist[1]);
  mapPreviewPics();

  noLoop();
}

/*function mapPreviewPics(){
    // let prev = document.getElementById('previewImages');
    for(let i=0; i<playlist[0].items.length; i++){
      createP(playlist[0].items[i].snippet.title);
// img = loadImage(playlist[0].items[i].snippet.thumbnails)
      // let li= document.createElement('li');
      // li.innerHTML = playlist.items[i].snippet.title;
      // prev.after(li);
    }

}*/

let img = [];
let names = ["1.Mandy 6.6/100", "2.Annihilation 6.9/100", "3.Love after love 5.5/100", "4.The rider 7.5/100", "5. You were never really here 6.8/100",
             "6. First reformed 7.1/100", "7. Zama 6.7/100", "8. 24 Frames 7.1/100", "9. A private war 6.9/100", "10. Eight grade 7.5/100", "11. Thunder road 7.2/100",
           "12. Shoplifters 8.1/100", "13. The ballad of buster scruggs 7.4/100", "14. Film worker 7.5/100", "15. Paddington 7.9/100", "16. The endless 6.5/100",
           "17. A prayer before dawn 6.9/100", "18. Leave no trace 7.2/100", "19. Burning 7.7/100", "20. Bisbee'17,  6.9/100", "21. I am not a witch 6.9/100", "22. The sisters brothers 7.1/100",
           "23. Mission Impossible-Fallout 7.9/100", "24. The favourite 8.2/100", "25. The mule 7.2/100"];

let randomValue = 0;

function setup() {
  createCanvas(300, 400);

  imageMode(CENTER);
  textAlign(CENTER);
  textSize(20);

  img[0] = loadImage("images/Mandy.jpg");
  img[1] = loadImage("images/Annihilation.jpg");
  img[2] = loadImage("images/Love After love.jpg");
  img[3] = loadImage("images/The rider.jpg");
  img[4] = loadImage("images/You Were Never Really Here.jpg");
  img[5] = loadImage("images/First Reformed.jpg");
  img[6] = loadImage("images/Zama.jpg");
  img[7] = loadImage("images/24 Frames.jpg");
  img[8] = loadImage("images/A Private War.jpg");
  img[9] = loadImage("images/Eight Grade.jpg");
  img[10] = loadImage("images/Thunder Road.jpg");
  img[11] = loadImage("images/Shoplifters.jpg");
  img[12] = loadImage("images/The Ballad Of Buster Scruggs.jpg");
  img[13] = loadImage("images/FilmWorker.jpg");
  img[14] = loadImage("images/Paddington.jpg");
  img[15] = loadImage("images/The Endless.jpg");
  img[16] = loadImage("images/A Prayer Before Dawn.jpg");
  img[17] = loadImage("images/Leave No Trace.jpg");
  img[18] = loadImage("images/Burning.jpg");
  img[19] = loadImage("images/Bisbee'17.jpg");
  img[20] = loadImage("images/I am Not A Witch.jpg");
  img[21] = loadImage("images/The Sisters Brothers.jpg");
  img[22] = loadImage("images/Mission Impossible-Fallout.jpg");
  img[23] = loadImage("images/The Favourite.jpg");
  img[24] = loadImage("images/The mule.jpg");
}

function draw() {
  background(80);
  image(img[randomValue], width/2, height/2);
  fill(200);
  text(names[randomValue], width/2, height-15)
}

function mouseReleased() {
  randomValue = Math.round(random(img.length-1));
}




////////////////////////////////////////////////////////////////////
   $(document).ready(function () {                                                  // tell jquery I'm about to use it

    let key = 'AIzaSyBTJk8fkdQWjgTX3Sm2ZZOa3XrDnjOelJ8';                         // my youtube apiKey
    let playlistId = 'PL59kBvngMdr1y_bTsizi6b5dDhz9eJ0kB';                       // my playlistID (from the playlist i created in youtube)
    let URL = 'https://www.googleapis.com/youtube/v3/playlistItems';             //my http request



    let options = {                                                             // all the stuff on the left are the parametres youtube expecified
        key: key,                                                               // and the API is expecting to receive
        part: 'snippet',
        playlistId: playlistId,
        maxResults: 25
    }

    loadVids();

    function loadVids() {                                                       // load videos on page load
        $.getJSON(URL, options, function (data) {                               // tell jquery to use the build in function getJSON
            let id = data.items[0].snippet.resourceId.videoId;
            mainVid(id);
            resultsLoop(data);
        });
    }

    function mainVid(id) {
        $('#video').html(`
        <iframe width="720" height="275"
        src="https://www.youtube.com/embed/${id}"
        frameborder="0" allow="accelerometer; autoplay;
        encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				`);
    }


    function resultsLoop(data) {                                                // loop through the results and display them on the dom.

        $.each(data.items, function (i, item) {

            let thumb = item.snippet.thumbnails.medium.url;
            let title = item.snippet.title;
            let desc = item.snippet.description.substring(0, 100);
            let vid = item.snippet.resourceId.videoId;


            $('main').append(`
							<article class="item" data-key="${vid}">

								<img src="${thumb}" alt="" class="thumb">
								<div class="details">
									<h4>${title}</h4>
									<p>${desc}</p>
								</div>

							</article>
						`);
        });
    }


    $('main').on('click', 'article', function () {                              // CLICK EVENT
        let id = $(this).attr('data-key');
        mainVid(id);
    });


});
