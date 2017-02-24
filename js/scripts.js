var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.',
	animal = 'Zielone słonie',
	animalUpperCased = animal.toUpperCase();

console.log(animalUpperCased);

var papugiCharsAfter = text.replace('Papugi', animal);

console.log(papugiCharsAfter);

console.log(papugiCharsAfter.length/2);

var polowaText = papugiCharsAfter.substr(0, papugiCharsAfter.length/2);

console.log(polowaText);