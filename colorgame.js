var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();



function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupSquares() {
	for(var i = 0; i < squares.length; i++){
		// pridanie click eventu do jednotlivých štvorcov
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;

			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(pickedColor);
				h1.style.backgroundColor = pickedColor;
				resetButton.textContent = "Play Again?";
			} else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}

		});
	}
}

function setupModeButtons() {
	for(var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		//if(this.textContent === "Easy"){
		//	numSquares = 3;
		//} else {
		//	numSquares = 6;
		//}
		reset();
		})
	
	}
}

function reset(){
	colors = generateRandomColors(numSquares);
	//vybrať jednu farbu z array
	pickedColor = pickColor();
	//zmeniť farbu v názve
	colorDisplay.textContent = pickedColor;
	//zmeniť farby štvorcov
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	//zmeniť farbu pozadia naspäť na defaultnu modru
	h1.style.backgroundColor = "steelblue";
	//zmeniť button naspäť na "new colors"
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = ""
}

//easyBtn.addEventListener("click", function(){
//	easyBtn.classList.add("selected");
//	hardBtn.classList.remove("selected");
//	numSquares = 3;
//	colors = generateRandomColors(numSquares);
//	pickedColor = pickColor();
//	colorDisplay.textContent = pickedColor;
//	for(var i = 0; i < squares.length; i++){
//		if(colors[i]){
//			squares[i].style.backgroundColor = colors[i];
//		} else{
//			squares[i].style.display = "none";
//		}
//	}
//});
//
//hardBtn.addEventListener("click", function(){
//	easyBtn.classList.remove("selected");
//	hardBtn.classList.add("selected");
//	numSquares = 6;
//	colors = generateRandomColors(numSquares);
//	pickedColor = pickColor();
//	colorDisplay.textContent = pickedColor;
//	for (var i = 0; i < squares.length; i++){
//		squares[i].style.display = "block";
//		squares[i].style.backgroundColor = colors[i];
//	}
//	
//});

resetButton.addEventListener("click", function(){
	////generovať novú array s farbami
	//colors = generateRandomColors(numSquares);
	////vybrať jednu farbu z array
	//pickedColor = pickColor();
	////zmeniť farbu v názve
	//colorDisplay.textContent = pickedColor;
	////zmeniť farby štvorcov
	//for(var i = 0; i < squares.length; i++) {
	//	squares[i].style.backgroundColor = colors[i];
	//}
	////zmeniť farbu pozadia naspäť na defaultnu modru
	//h1.style.backgroundColor = "steelblue";
	////zmeniť button naspäť na "new colors"
	//resetButton.textContent = "New Colors";
	//messageDisplay.textContent = ""
	reset();
});

function changeColors(color){
	//loop cez všetky štvorce
	for(var i = 0; i < squares.length; i++){
		//spraviť všetky 
		squares[i].style.backgroundColor = color;
	}

}

//funkcia na náhodné vyberanie farby
function pickColor(){
	var randomNumber = Math.floor(Math.random() * colors.length);
	return colors[randomNumber];
}

function generateRandomColors(num){
	//vytvoriť array
	var arr = [];
	//opakovať "num" krát
	for(var i = 0; i < num; i++)
		//vytvoriť náhodnú farbu a "push" do array
		arr.push(randomColor()); 
	//return array
	return arr;
}

function randomColor(){
	//vybrať "red" 0-255
	var r = Math.floor(Math.random() * 256);
	//vybrať "green" 0-255
	var g = Math.floor(Math.random() * 256);
	//vybrať "blue" 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"; 
}