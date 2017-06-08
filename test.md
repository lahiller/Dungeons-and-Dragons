<!DOCTYPE html>
<html>
<body>

<h2>JavaScript Math</h2>

<p>roll a d20 (if you roll a 0 role again) </p>

<p id="demo"></p>

<script>
document.getElementById("demo").innerHTML =
Math.floor(Math.random() * 21);
</script>

</body>
</html>

