function bisextile(annee) {
  return (annee % 4 == 0 && annee % 100 != 0) || annee % 400 == 0;
}

console.log('Année bisextile pour ', 2023, ':', bisextile(2023));
console.log('Année bisextile pour ', 2024, ':', bisextile(2024));
console.log('Année bisextile pour ', 2025, ':', bisextile(2025));
