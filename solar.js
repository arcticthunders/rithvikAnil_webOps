function pause(planet) 
{
         document.getElementById(planet).style.animationPlayState="paused";
         var plan=planet.replace("-orbit","");
         document.getElementById(plan).style.animationPlayState="paused";
}

function play(planet) 
{
         document.getElementById(planet).style.animationPlayState="running";
         var plan=planet.replace("-orbit","");
         document.getElementById(plan).style.animationPlayState="running";
}
function reset(){
	window.location.reload();
}