function addElement() {
	var value = document.getElementById("textInput").value;
	if(value == "") {
		return;
	}
	var wrapper = document.createElement("div");
	wrapper.classList.add("row");
	document.getElementById("conversation").appendChild(wrapper);
	var node = document.createElement("li");
	node.classList.add("media");
	node.classList.add("pull-right");
	node.innerHTML = "<div class='media-body'><p class='youCont'>"+value+"</p></div><div class='media-right'><img src='images/nicegirl3.jpg' class='media-object img-circle profile-pic' id='you'></img></div>";
	document.getElementById("conversation").appendChild(node);
}