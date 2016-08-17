// Portfolio stuff and thangs

var portList = document.getElementsByClassName("portItem"),
	currentPort = 1,
	currentPortItem = portList[currentPort - 1];
	maxPortItems = portList.length,
	portImageItem = document.getElementById("portItemImage");
	nextPortBtn = document.getElementsByClassName("next"),
	prevPortBtn = document.getElementsByClassName("prev");

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
