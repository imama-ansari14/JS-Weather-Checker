let weather = prompt(
  "From which city in Pakistan are you? Enter the name and check the current weather \n karachi, lahore, islamabad, naran, muree, kashmir"
);

let karachi = "hot";
let lahore = "sunny";
let islamabad = "cloudy";
let naran = "windy";
let muree = "rainy";
let kashmir = "spring";

if (weather == "karachi") {
  document.write(`<div class="d-flex flex-column align-items-center" style= "text-decoration:underline 5px solid #834b1a; color: #DDB17C;">
        <h1 >Karachi</h1> <br>
         <h1>22° - 33°</h1>
         <video src="images/karachi.mp4" class="w-100"  autoplay loop muted></video>
     </div>`);
} else if (weather == "lahore") {
  document.write(`<div class="d-flex flex-column align-items-center" style="   overflow-x: hidden;text-decoration:underline 5px solid #5085b0; color: #9E8743;">
        <h1>Lahore</h1>
        <h1>17° - 30°</h1>
        <video src="images/lahore.mp4"  autoplay loop muted></video>
    </div>`);
} else if (weather == "islamabad") {
  document.write('<img src="images/cloudy.png" alt="cloudy" width="100%">');
} else if (weather == "naran") {
  document.write('<img src="images/windy.avif" alt="windy" width="100%">');
} else if (weather == "muree") {
  document.write('<img src="images/rainy.jpg" alt="rainy" width="100%">');
} else if (weather == "kashmir") {
  document.write('<img src="images/kashmir.jpg" alt="kashmir" width="100%">');
} else {
  document.write(`<h1 style="text-align: center; text-decoration:5px rgb(164, 36, 36) underline;">Cant Understand, try another city </h1>
 <img src="images/sorry.jpeg" alt="sorry" style="display: block; margin: 0 auto;">`);
}