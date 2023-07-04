function switchoff(){
    document.getElementById("bulb").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("cat").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("off").style.backgroundColor="white";
    document.getElementById("on").style.backgroundColor="green";
    document.getElementById("texts").innerHTML="Switched Off";
}
function switchon(){
    document.getElementById("bulb").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("cat").src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("off").style.backgroundColor="red";
    document.getElementById("on").style.backgroundColor="white";
    document.getElementById("texts").innerHTML="Switched On";
}