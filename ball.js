document.getElementById("id_bussines_level").innerHTML = "Bussines version = 2018.03.23.0";

setInterval(deseneaza, 30);
var y = 0;
var directie = 1;

function deseneaza()

{
	
	var t = document.getElementById("id_transform");
	t.setAttribute("translation", "0 " + y + " 0");
	y += directie;
	if (y > 10)
		directie = -1;
	else
		if(y < 0)
			directie = 1;
}