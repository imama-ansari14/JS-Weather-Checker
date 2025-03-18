let weather =prompt("From which city in Pakistan are you? Enter the name and check the current weather")

let karachi="hot"
let lahore="sunny"
let islamabad="cloudy"
let naran="windy"
let muree="rainy"

if(weather== 'karachi'){
    document.write('<img src="images/summer.webp" alt="summer"height="800px"> ')
} else if (weather=='lahore'){
document.write('<img src="images/sunny.webp" alt="sunny" width="100%">')
}else if (weather=='islamabad'){
    document.write('<img src="images/cloudy.png" alt="cloudy" width="100%">')
}else if (weather=='naran'){
        document.write('<img src="images/windy.avif" alt="windy" width="100%">')
}else if (weather=='muree'){
    document.write('<img src="images/rainy.jpg" alt="rainy" width="100%">')
    }
else {

}