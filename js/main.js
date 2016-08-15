//Menu vars
var mainMenu = document.getElementById("main_nav"),
	responsiveMenuBtn = document.getElementById("responsiveMenuBtn");

// Event Listener for the menu
if(window.attachEvent) {
    window.attachEvent('onresize', function(event1) {
        updateMenu(event1);
    });
}
else if(window.addEventListener) {
    window.addEventListener('resize', function(event1) {
        updateMenu(event1);
    }, true);
}
else {
    alert("Please update your web browser to the current standards.");
}

function updateMenu(eve){	
	var wWidth = window.innerWidth;
	
	if(wWidth < 666){
		mainMenu.className = "responsiveNavStyles";
	}else{
		mainMenu.className = "";
	}
}

updateMenu();

// Event Listener for the menu btn
if(window.attachEvent) {
    responsiveMenuBtn.attachEvent('click', function(event1) {
        
    });
}
else if(window.addEventListener) {
    responsiveMenuBtn.addEventListener('click', function(event1) {
        if(mainMenu.classList.contains("shown")){
        	mainMenu.className = "responsiveNavStyles notshown";
        }
        else{
        	mainMenu.className = "responsiveNavStyles shown";
        }
    }, true);
}
else {
    alert("Please update your web browser to the current standards.");
}
// Portfolio stuff and thangs

var portList = document.getElementsByClassName("portItem"),
	currentPort = 1,
	currentPortItem = portList[currentPort - 1];
	maxPortItems = portList.length,
	portImageItem = document.getElementById("portItemImage");
	nextPortBtn = document.getElementsByClassName("next"),
	prevPortBtn = document.getElementsByClassName("prev");

console.log(nextPortBtn);

function nextPortItem(){
	currentPort++;
	if(currentPort > maxPortItems)
		currentPort = 1;
	animatePortText();
	animatePortImage();
}

function prevPortItem(){
	currentPort--;
	if(currentPort < 1)
		currentPort = maxPortItems;
	animatePortText();
	animatePortImage();
}

function animatePortText(){
	currentPortItem.className = "portItem slideOut";
	currentPortItem = portList[currentPort - 1];
	currentPortItem.className = "portItem slideIn";
}

function animatePortImage(){
	portImageItem.className = "slideOutImg";
	window.setTimeout(function(){
		portImageItem.src = "img/port"+currentPort+".png";
		portImageItem.className = "slideInImg";
	},300);
}


var aboutSection = document.getElementById("about"),
	portSection = document.getElementById("portfolio"),
	contactSection = document.getElementById("contact");

function posTop() {
    return typeof window.pageYOffset != 'undefined' ? window.pageYOffset: document.documentElement.scrollTop? document.documentElement.scrollTop: document.body.scrollTop? document.body.scrollTop:0;
}

// Event Listener for the fades
if(window.attachEvent) {
    window.attachEvent('scroll', function(event1) {
        fadeInOutSection(event1);
    });
}
else if(window.addEventListener) {
    window.addEventListener('scroll', function(event1) {
        fadeInOutSection(event1);
    }, false);
}
else {
    alert("Please update your web browser to the current standards.");
}

function fadeInOutSection(evnt){

	if(posTop() > aboutSection.offsetTop / 3)
		aboutSection.className = "fadeIn";
	else
		aboutSection.className = "fadeOut";

	if(posTop() > portSection.offsetTop / 2)
		portSection.className = "fadeIn";
	else
		portSection.className = "";

	//alert(posTop(),posTop());
	//console.log(evnt.srcElement.activeElement.scrollTop);

}