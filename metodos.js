// Métodos

// Arrail con camisetas de equipos y costo

var camisetas = [

	{equipo: 'Millonarios', costo: 350000}, 
	{equipo: 'Hertha BSC', costo: 380000}, 
	{equipo: 'St. Pauli', costo: 320000},
	{equipo: 'AC Milan', costo: 280000},
	{equipo: 'Ajax', costo: 310000},
	{equipo: 'Hansa Rostock', costo: 420000},

]

// 1. Filtrar por costo: menor o igual a 300.000

var camisetasFiltradas = camisetas.filter (function(camiseta){
	return camiseta.costo <= 320000
});

// 2. Traer los nombres de los equipos

var camisetasLista = camisetas.map (function(camiseta){
	return camiseta.equipo
});

// 3. Método de find: encuentra artículos específicos

var camisetasBusca = camisetas.find (function(camiseta){
	return camiseta.equipo === 'St. Pauli'
});

// 4. Traer el nombre de cada equipo con un console.log

camisetas.forEach (function(camiseta){
	console.log(camiseta.equipo)
});

// 5. Que nos diga si hay o no camisetas con valor menor a 

var camisetasBaratas = camisetas.some(function(camiseta){
	return camiseta.costo <= 350000;
});

// 6. Agregar elementos haciendo un Push

function nuevosEquipos (){
	camisetas.push (({equipo: 'Partisan', costo: 480000}))
	console.log(camisetas)
}

// 7. Eliminar elementos usando shift

var listaLimpia = camisetas.shift ()

	// Va a traer solo el primer elemento
console.log (listaLimpia)

	// Va a traer la lista sin el primer elemento
console.log (camisetas)

// 8. Eliminar elementos usando pop

var listaLimpiaUltimate = camisetas.pop ()

	// Va a traer solo el último elemento
console.log (listaLimpiaUltimate)

	// Va a traer la lista sin el primer elemento
console.log (camisetas)

