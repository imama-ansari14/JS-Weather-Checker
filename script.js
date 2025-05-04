let weather = prompt(
  "From which city in Pakistan are you? Enter the name and check the average weather \n karachi, lahore, islamabad, naran, muree, kashmir"
);

let karachi = "hot";
let lahore = "sunny";
let islamabad = "cloudy";
let naran = "windy";
let muree = "rainy";
let kashmir = "winter";

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
  document.write(`<div class="d-flex flex-column align-items-center" style="overflow-x: hidden;text-decoration:underline 5px solid #383f2a; color: #827377;">
        <h1>Islamabad</h1>
        <h1>14° - 28°</h1>
        <video src="images/islamabad.mp4" class="w-100"  autoplay loop muted></video>
    </div>`);
} else if (weather == "naran") {
  document.write(`<div class="d-flex flex-column align-items-center" style="   overflow-x: hidden;text-decoration:underline 5px solid #324523; color:#AC7E53;">
    <h1>Naran</h1>
    <h1>2° - 15°</h1>
    <video src="images/naran.mp4" class="w-100"  autoplay loop muted></video>
</div>`);
} else if (weather == "muree") {
  document.write(`<div class="d-flex flex-column align-items-center" style="   overflow-x: hidden;text-decoration:underline 5px solid #353F48; color:#7C8084;">
    <h1>Muree</h1>
    <h1>2.6° - 15.4°</h1>
    <video src="images/muree.mp4" class="w-100"  autoplay loop muted></video>
</div>`);
} else if (weather == "kashmir") {
  document.write(`<div class="d-flex flex-column align-items-center" style="   overflow-x: hidden;text-decoration:underline 5px solid #1D4F87; color:#395470;">
        <h1>Kashmir</h1>
        <h1>-1° - 25°</h1>
        <video src="images/kashmir.mp4" class="w-100"  autoplay loop muted></video>
    </div>`);
} else {
  document.write(`<div class="d-flex flex-column align-items-center">
    <h1 style=" text-decoration:5px #f0ab3c underline; color: #3F4354;">Please try the given cities.. </h1>
    <img src="images/oops.jpg" alt="sorry" style="display: block; margin: 0 auto;" class="w-100">
</div>`);
}