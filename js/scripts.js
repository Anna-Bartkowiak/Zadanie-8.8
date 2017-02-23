var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.',
	nowaZmienna = 'Zielone słonie',
	nowaZmiennaUpperCased = nowaZmienna.toUpperCase();

console.log(nowaZmiennaUpperCased);

var papugiCharsAfter = text.replace('Papugi', 'Animal');

console.log(papugiCharsAfter);

console.log(text.length/2);

var polowaText = text.substr(0, 44);

console.log(polowaText);