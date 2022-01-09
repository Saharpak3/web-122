var time = prompt('Hello! Tell me the time to tell you what to do:');
var $output = document.getElementById('timesheet');



if(time == 6) {
html = "<span>Wake up & eating breakfast!</span>";
} else if(time == 7) {
html = "<span>doing exercise!</span>";
} else if(time == 8) {
html ="<span>Study your lessons!</span>";
} else if(time == 9) {
html ="<span>Go to school!</span>";
} else if(time == 10) {
html ="<span>you have exam!</span>";
} else if(time == 11) {
html ="<span>Drink a coffe!</span>";
} else if(time == 12) {
html ="<span>Lunch time!</span>";
} else if(time == 13) {
html ="<span>Go to class!</span>";
} else if(time == 14) {
html ="<span>Go to home!</span>";
} else if(time == 15) {
html ="<span>Do your homework!</span>";
} else if(time == 16) {
html ="<span>Rest now!</span>";
} else if(time == 17) {
html ="<span>Take a shower!</span>";
} else if(time == 18) {
html ="<span>Go to the Gym!</span>";
} else if(time == 19) {
html ="<span>Dinner time!</span>";
} else if(time == 20) {
html ="<span>Watch TV</span>";
} else if(time = 21) {
html ="<span>Do your favorite works!</span>";
} else if(time >= 22) {
html ="<span>Go to sleep!</span>";
} else if(time >= 23) {
html ="<span>You should be sleeping now!</span>";
} else if(time >= 23) {
html ="<span>You should be asleep now!</span>";
}


$output.innerHTML = html;
