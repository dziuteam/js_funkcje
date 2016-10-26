//punkty 1,2,3 i 5,6,7
function getTriangleArea(a,h) {
	if ((a<=0) || (h<=0)) {
		alert('liczby a i h musza byc wieksze od 0')
		console.log('liczby a i h musza byc wieksze 0')
		return "Nieprawidłowe dane'";

	} else {
		var wynik = a*h/2;
		return wynik;
	}
}
	var podstawa = prompt('Podaj podstawę a:');
	var wysokosc = prompt('Podaj wysokość h:');
	var pole = getTriangleArea(podstawa,wysokosc);
	alert('Pole trójkąta o podstawie a: ' + podstawa + ' i wysokości h: ' + wysokosc + ' wynosi: ' + pole);
	console.log('Pole trójkąta o podstawie a: ' + podstawa + ' i wysokości h: ' + wysokosc + ' wynosi: ' + pole);
//punkt 4
var triangle1Area = getTriangleArea(6, 3);
var triangle2Area = getTriangleArea(7, 12);
var triangle3Area = getTriangleArea(2, 4);
console.log('1: ' + triangle1Area + ' 2: ' + triangle2Area + ' 3: ' + triangle3Area);

//punkt 8
	console.log( getTriangleArea(10,6) );

//punkt 9 

var jednanowazmienna = getTriangleArea(12,17);
var druganowazmienna = getTriangleArea(32,23);
var trzecianowazmienna = getTriangleArea(212,342);
console.log('1 nowa zmienna: ' + jednanowazmienna + ' 2 nowa zmienna: ' + druganowazmienna + ' 3 nowa zmienna: ' + trzecianowazmienna);	
