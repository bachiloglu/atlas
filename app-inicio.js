var datos = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]; //bdd


var x = d3.scale.linear()
			.domain([0, d3.max(datos)])
			.range([0, 500])

function graficar(){
	d3.select(".barras") //utilizar signo . que identifica clases
		.selectAll("div")
		.data(datos)
		.enter().append('div');
		/*entra en clase barras;
		agrega datos;
		agrega div;*/
		.style("width", function(d){
			return x(d) + "px"
		})
}