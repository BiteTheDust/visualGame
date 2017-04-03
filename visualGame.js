/*
* JQuery wraps the two functions built in this JS file
*/
//$( document ).ready( load() );
$( document ).ready( updateGrid(button) );

// funtion that runs on page load and adds '*' to the random cell of the grid
function load() {
var table = document.getElementById('grid'); // get reference to the grid
//var status = document.getElementById('status');
var randomRow = Math.floor(Math.random() * 10) % 8; // generate random no. b/w 0 and 8
var randomCol = Math.floor(Math.random() * 10) % 8; // generate random no. b/w 0 and 8
/*
Construct grid values
*/
table.rows[4].cells[1].innerText = "C1"; 
table.rows[5].cells[1].innerText = "C2";
table.rows[1].cells[4].innerText = "C3";
table.rows[3].cells[4].innerText = "W";
table.rows[6].cells[4].innerText = "C4"; 
table.rows[1].cells[6].innerText = "C5";
table.rows[4].cells[6].innerText = "C6";
table.rows[3].cells[3].innerText = "W";
table.rows[3].cells[5].innerText = "W";
table.rows[1].cells[1].innerText = "P1";
table.rows[5].cells[5].innerText = "P2";
table.rows[6].cells[6].innerText = "G"; 
table.rows[randomRow].cells[randomCol].innerText = "*"; // add '*' to the cell
table.rows[randomRow].cells[randomCol].style.backgroundColor = "#ADFF2F"; // update new cell
// Save the position of randomly genrated values
document.getElementById('rowValue').value = randomRow;
document.getElementById('colValue').value = randomCol;
// this is how the status is accessed 
//status.innerText = 'hello';
var help = document.getElementById("help");
	help.onclick = function()
		{
			alert("* - Adventurer\nGreen space - Visited\nBlack Space - Not visited\n");
		}
		
};

// function to update the '*' position based on the button clicks
function updateGrid(button) {
	
	//var inv = document.getElementById("inv");
	var playerHealth = document.getElementById("hp");
	var count = 0;
	/*
	inv.onclick = function()
	{
		alert("Inventory: " + count + " prizes");
	}
	*/
	playerHealth.onclick = function()
	{
		alert(playerHP + " HP");
	}
				/*
	-----------------------------------------------------------Begin challenges---------------------------------------------------
	------------------------------------------------------------------------------------------------------------------------------
	*/
	/*
	Challenge 1
	*/
	var C1 = { //challenge 1
		monster: "Kira",
		monsterItem: "Hand",
		runChallenge : function() {
			var monsterHP = 15;
			var answer = prompt("Kira would like to fight! (Type) Run or Fight?");
		if (answer == "Fight") {
			while (monsterHP > 0) {
			var i = Math.random()*10;
			var playerAtt = Math.ceil(i);
			var j = Math.random()*10;
			var enemyAtt = Math.ceil(j);
			alert("You attack Kira for " + playerAtt + " damage!");
			monsterHP = monsterHP - playerAtt;
			alert("Kira attacks you for " + enemyAtt + " damage!");
			playerHP = playerHP - enemyAtt;
			alert("You have " + playerHP+ " left!");
							}
		alert("You defeated Kira! Obtained " + this.monsterItem + "!");
		inventory.push(this.monsterItem);
		count += 1;
		except.innerText = 'Braved the challenege and acquired a prize. Keep going!';
		} else{
		alert("You decided to run.");
		}
		return 0;
		}
		}
			/*
	Challenge 2
	*/
		
	var C2 = {
		monster: "RAWR XD",
		monsterItem: "Switch blade",
		runChallenge : function() {
			var monsterHP = 12;
			var answer = prompt("RAWR XD would like to fight! (Type) Run or Fight?");
		if (answer == "Fight") {
			while (monsterHP > 0) {
			var i = Math.random()*10;
			var playerAtt = Math.ceil(i);
			var j = Math.random()*10;
			var enemyAtt = Math.ceil(j);
			alert("You attack RAWR XD for " + playerAtt + " damage!");
			monsterHP = monsterHP - playerAtt;
			alert("RAWR XD attacks you for " + enemyAtt + " damage!");
			playerHP = playerHP - enemyAtt;
			alert("You have " + playerHP + " left!");
							}
		alert("You defeated RAWR XD! Obtained " + this.monsterItem + "!");
		inventory.push(this.monsterItem);
		count += 1;
		except.innerText = 'Braved the challenege and acquired a prize. Keep going!';
		} else {
		alert("You decided to run.");
		}
		return 0;
		}
		}
		/*
	Challenge 3
	*/
	var C3 = {
		monster: "Brother",
		monsterItem: "Oats",
		runChallenge : function() {
			var monsterHP = 7;
			var answer = prompt("Your brother will not share oats. (Type) Run or Fight?");
		if (answer == "Fight") {
			while (monsterHP > 0) {
			var i = Math.random()*10;
			var playerAtt = Math.ceil(i);
			var j = Math.random()*10;
			var enemyAtt = Math.ceil(j);
			alert("You attack your brother for " + playerAtt + " damage!");
			monsterHP = monsterHP - playerAtt;
			alert("Your brother attacks you for " + enemyAtt + " damage!");
			playerHP = playerHP - enemyAtt;
			alert("You have " + playerHP + " left!");
							}
		alert("You defeated your brother! Obtained " + this.monsterItem + "!");
		inventory.push(this.monsterItem);
		except.innerText = 'Braved the challenege and acquired a prize. Keep going!';
		} else {
		alert("You decided to run.");
		}
		return 0;
		}
		}
		/*
	Challenge 4
	*/
	var C4 = {
		monster: "New York Man",
		monsterItem: "Timbs",
		runChallenge : function() {
			var monsterHP = 15;
			var answer = prompt("NY Man would like to fight! (Type) Run or Fight?");
		if (answer == "Fight") {
			while (monsterHP > 0) {
			var i = Math.random()*10;
			var playerAtt = Math.ceil(i);
			var j = Math.random()*10;
			var enemyAtt = Math.ceil(j);
			alert("You attack NY Man for " + playerAtt + " damage!");
			monsterHP = monsterHP - playerAtt;
			alert("NY Man throws a pair of timbs at you and deals " + enemyAtt + " damage!");
			playerHP = playerHP - enemyAtt;
			alert("You have " + playerHP + " HP left!");
							}
		alert("You defeated NY Man! Obtained " + this.monsterItem + "!");
		inventory.push(this.monsterItem);
		except.innerText = 'Braved the challenege and acquired a prize. Keep going!';
		} else {
		alert("You decided to run.");
		}
		return 0;
		}
		}
				/*
	Challenge 5
	*/
	var C5 = {
		monster: "Killer Queen",
		monsterItem: "Bomb",
		runChallenge : function() {
			var monsterHP = 15;
			var answer = prompt("Killer Queen approaches! (Type) Run or Fight?");
		if (answer == "Fight") {
			while (monsterHP > 0) {
			var i = Math.random()*10;
			var playerAtt = Math.ceil(i);
			var j = Math.random()*10;
			var enemyAtt = Math.ceil(j);
			alert("You attack Killer Queen for " + playerAtt + " damage!");
			monsterHP = monsterHP - playerAtt;
			alert("Killer Queen uses bite za dusto and deals " + enemyAtt + " damage!");
			playerHP = playerHP - enemyAtt;
			alert("You have " + playerHP + " HP left!");
							}
		alert("You defeated Killer Queen! Obtained " + this.monsterItem + "!");
		inventory.push(this.monsterItem);
		except.innerText = 'Braved the challenege and acquired a prize. Keep going!';
		} else {
		alert("You decided to run.");
		}
		return 0;
		}
		}
				/*
	Challenge 6
	*/
	var C6 = {
		monster: "The Hunter",
		monsterItem: "Tiny Alien",
		runChallenge : function() {
			var monsterHP = 15;
			var answer = prompt("The Hunter would like to fight! (Type) Run or Fight?");
		if (answer == "Fight") {
			while (monsterHP > 0) {
			var i = Math.random()*10;
			var playerAtt = Math.ceil(i);
			var j = Math.random()*10;
			var enemyAtt = Math.ceil(j);
			alert("You attack The Hunter for " + playerAtt + " damage!");
			monsterHP = monsterHP - playerAtt;
			alert("The Hunter swings at you and deals " + enemyAtt + " damage!");
			playerHP = playerHP - enemyAtt;
			alert("You have " + playerHP + " HP left!");
							}
		alert("You defeated The Hunter! Obtained " + this.monsterItem + "!");
		inventory.push(this.monsterItem);
		except.innerText = 'Braved the challenege and acquired a prize. Keep going!';
		} else {
		alert("You decided to run.");
		}
		return 0;
		}
		}
var playerHP = 100;
var status = document.getElementById('status');
var except = document.getElementById('exception');
var inventoryButton = document.getElementById('inv');
var table = document.getElementById('grid');
var inventory = [];
var currentRow = document.getElementById('rowValue');
var currentCol = document.getElementById('colValue');
var currentRowVal = parseInt(currentRow.value);
var currentColVal = parseInt(currentCol.value);
if (button == 'UP') {
	except.innerText = ''; //clear the exception if user doesn't hit an action
if (currentRowVal == 0) { alert("'You're a big guy...' you hear in the distance. 'For you.' you whisper, softly."); return; }
// move the star, otherwise
table.rows[currentRowVal].cells[currentColVal].innerText = ""; // clear current cell
currentRow.value = --currentRowVal;
	if (table.rows[currentRowVal].cells[currentColVal].innerText == "P1") // update new cell)
	{
		inventory.push("Butters Creamy Goo");
		alert("You have obtained Butters' Creamy Goo!");
		except.innerText = 'Acquired a prize. Keep going!';
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "P2")
	{
		inventory.push("Golden Arrow");
		alert("You have obtained the Golden Arrow!");
		except.innerText = 'Acquired a prize. Keep going!';
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "W")
	{
		alert("You hit a wall, you have choice but to turn back!");
		except.innerText = 'Since you hit a wall, you remain in the same space.';
		currentRow.value = ++currentRowVal; //modified based on the button click direction.. currentColVal or cuurentRowVal
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "C1")
	{
		C1.runChallenge(playerHP, inventory);
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "C2")
	{
		C2.runChallenge(playerHP, inventory);
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "C3")
	{
		C3.runChallenge(playerHP, inventory);
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "C4")
	{
		C4.runChallenge(playerHP, inventory);
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "C5")
	{
		C5.runChallenge(playerHP, inventory);
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "C6")
	{
		C6.runChallenge(playerHP, inventory);
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "G")
	{
		var userAns = confirm("You reached the goal. Congratulations! Try again? (OK) Stop? (Cancel)");
			if ( !userAns )
			{
				document.write("Thank you for playing!");
			}
			else
			{
				window.location.reload();
			}
	}
table.rows[currentRowVal].cells[currentColVal].innerText = "*"; // update new cell
table.rows[currentRowVal].cells[currentColVal].style.backgroundColor = "#ADFF2F"; // update new cell
status.innerText = 'You have moved up.';
} else if (button == 'LEFT') {
if (currentColVal == 0) { alert("You forgot to ask your brother for his oats, you turn back quickly."); return; }
// move the star, otherwise
table.rows[currentRowVal].cells[currentColVal].innerText = ""; // clear current cell
currentCol.value = --currentColVal;

	if (table.rows[currentRowVal].cells[currentColVal].innerText == "P1") // update new cell)
	{
		inventory.push("Butters Creamy Goo");
		alert("You have obtained Butters' Creamy Goo!");
		except.innerText = 'Acquired a prize. Keep going!';
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "P2")
	{
		inventory.push("Golden Arrow");
		alert("You have obtained the Golden Arrow!");
		except.innerText = 'Acquired a prize. Keep going!';
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "W")
	{
		alert("You hit a wall, you have choice but to turn back!");
		except.innerText = 'Since you hit a wall, you remain in the same space.';
		currentCol.value = ++currentColVal; //modified based on the button click direction.. currentColVal or cuurentRowVal
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "C1")
	{
		C1.runChallenge(playerHP, inventory);
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "C2")
	{
		C2.runChallenge(playerHP, inventory);
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "C3")
	{
		C3.runChallenge(playerHP, inventory);
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "C4")
	{
		C4.runChallenge(playerHP, inventory);
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "C5")
	{
		C5.runChallenge(playerHP, inventory);
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "C6")
	{
		C6.runChallenge(playerHP, inventory);
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "G")
	{
		var userAns = confirm("You reached the goal. Congratulations! Try again? (OK) Stop? (Cancel)");
			if ( !userAns )
			{
				document.write("Thank you for playing!");
			}
			else
			{
				window.location.reload();
			}
	}

table.rows[currentRowVal].cells[currentColVal].innerText = "*"; // update new cell
table.rows[currentRowVal].cells[currentColVal].style.backgroundColor = "#ADFF2F"; // update new cell
status.innerText = 'You have moved left.';
} else if (button == 'RIGHT') {
if (currentColVal == 7) { alert("Oops! Can't go any further!"); return; }
// move the star, otherwise
table.rows[currentRowVal].cells[currentColVal].innerText = ""; // clear current cell
currentCol.value = ++currentColVal;

	if (table.rows[currentRowVal].cells[currentColVal].innerText == "P1") // update new cell)
	{
		inventory.push("Butters Creamy Goo");
		alert("You have obtained Butters' Creamy Goo!");
		except.innerText = 'Acquired a prize. Keep going!';
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "P2")
	{
		inventory.push("Golden Arrow");
		alert("You have obtained the Golden Arrow!");
		except.innerText = 'Acquired a prize. Keep going!';
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "W")
	{
		alert("You hit a wall, you have choice but to turn back!");
		except.innerText = 'Since you hit a wall, you remain in the same space.';
		currentCol.value = --currentColVal; //modified based on the button click direction.. currentColVal or cuurentRowVal
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "C1")
	{
		C1.runChallenge(playerHP, inventory);
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "C2")
	{
		C2.runChallenge(playerHP, inventory);
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "C3")
	{
		C3.runChallenge(playerHP, inventory);
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "C4")
	{
		C4.runChallenge(playerHP, inventory);
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "C5")
	{
		C5.runChallenge(playerHP, inventory);
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "C6")
	{
		C6.runChallenge(playerHP, inventory);
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "G")
	{
		var userAns = confirm("You reached the goal. Congratulations! Try again? (OK) Stop? (Cancel)");
			if ( !userAns )
			{
				document.write("Thank you for playing!");
			}
			else
			{
				window.location.reload();
			}
	}

table.rows[currentRowVal].cells[currentColVal].innerText = "*"; // update new cell
table.rows[currentRowVal].cells[currentColVal].style.backgroundColor = "#ADFF2F"; // update new cell
status.innerText = 'You have moved right.';
} else if (button == 'DOWN') {
if (currentRowVal == 7) { alert("Oops! Can't go any further!"); return; }
// move the star, otherwise
table.rows[currentRowVal].cells[currentColVal].innerText = ""; // clear current cell
currentRow.value = ++currentRowVal;

	if (table.rows[currentRowVal].cells[currentColVal].innerText == "P1") // update new cell)
	{
		inventory.push("Butters Creamy Goo");
		alert("You have obtained Butters' Creamy Goo!");
		except.innerText = 'Acquired a prize. Keep going!';
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "P2")
	{
		inventory.push("Golden Arrow");
		alert("You have obtained the Golden Arrow!");
		except.innerText = 'Acquired a prize. Keep going!';
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "W")
	{
		alert("You hit a wall, you have choice but to turn back!");
		except.innerText = 'Since you hit a wall, you remain in the same space.';
		currentRow.value = --currentRowVal; //modified based on the button click direction.. currentColVal or cuurentRowVal
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "C1")
	{
		C1.runChallenge(playerHP, inventory);
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "C2")
	{
		C2.runChallenge(playerHP, inventory);
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "C3")
	{
		C3.runChallenge(playerHP, inventory);
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "C4")
	{
		C4.runChallenge(playerHP, inventory);
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "C5")
	{
		C5.runChallenge(playerHP, inventory);
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "C6")
	{
		C6.runChallenge(playerHP, inventory);
	} else if (table.rows[currentRowVal].cells[currentColVal].innerText == "G")
	{
		var userAns = confirm("You reached the goal. Congratulations! Try again? (OK) Stop? (Cancel)");
			if ( !userAns )
			{
				document.write("Thank you for playing!");
			}
			else
			{
				window.location.reload();
			}
	}

table.rows[currentRowVal].cells[currentColVal].innerText = "*"; // update new cell
table.rows[currentRowVal].cells[currentColVal].style.backgroundColor = "#ADFF2F"; // update new cell
status.innerText = 'You have moved down.';
}
}

function plus(counter)
{
	return ++counter;
}