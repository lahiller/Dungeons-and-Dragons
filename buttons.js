<!DOCTYPE html>
<html>
<body>

<h2>This is Where the Dice Will Roll</h2>


<p id="d20appear">Your d20 Roll will appear here.</p>

<button onclick="document.getElementById('d20appear').innerHTML = getRndInteger(1, 20)">Roll a d20</button>

<p id="d10appear">Your d10 Roll will appear here.</p>

<button onclick="document.getElementById('d10appear').innerHTML = getRndInteger(1, 10)">Roll a d10</button>

<p id="d8appear">Your d8 Roll will appear here.</p>

<button onclick="document.getElementById('d8appear').innerHTML = getRndInteger(1, 8)">Roll a d8</button>

<p id="d6appear">Your d6 Roll will appear here.</p>

<button onclick="document.getElementById('d6appear').innerHTML = getRndInteger(1, 6)">Roll a d6</button>

<p id="d4appear">Your d4 Roll will appear here.</p>

<button type="button" onclick="document.getElementById('d4appear').innerHTML = getRndInteger(1, 4)">Roll a d4</button>

<script>
function getRndInteger(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
</script>
</body>
</html>
