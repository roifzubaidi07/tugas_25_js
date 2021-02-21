let angka = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

console.log('Sebelumnya : ' + angka.join(','));
console.log('Ascending : ' + angka.sort().join(','));
console.log('Ascending : ' + angka.reverse().join(','));
console.log('Filter : ' + angka.filter((angka) => angka > 10));
