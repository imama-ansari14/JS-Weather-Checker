let weather =prompt("From which city in Pakistan are you? Enter the name and check the current weather")

let karachi="hot"
let lahore="sunny"
let islamabad="cloudy"
let naran="windy"
let muree="rainy"
let kashmir="spring"

if(weather== 'karachi'){
    document.write('<img src="images/summer.webp" alt="summer" height="800px" style="display: block; margin: 0 auto;> ')
} else if (weather=='lahore'){
document.write('<img src="images/sunny.webp" alt="sunny" width="100%">')
}else if (weather=='islamabad'){
    document.write('<img src="images/cloudy.png" alt="cloudy" width="100%">')
}else if (weather=='naran'){
        document.write('<img src="images/windy.avif" alt="windy" width="100%">')
}else if (weather=='muree'){
    document.write('<img src="images/rainy.jpg" alt="rainy" width="100%">')
}else if (weather=='kashmir'){
        document.write('<img src="images/kashmir.jpg" alt="kashmir" width="100%">')
}else {
document.write(`<h1 style="text-align: center; text-decoration:5px rgb(164, 36, 36) underline;">Cant Understand, try another city </h1>
 <img src="images/sorry.jpeg" alt="sorry" style="display: block; margin: 0 auto;">`)
}