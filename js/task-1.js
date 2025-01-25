function isEnoughCapacity(products, containerSize) {
  const totalProducts = Object.values(products).reduce((acc, quantity) => acc + quantity, 0);
  return totalProducts <= containerSize;
}

// Test Cases
console.log(isEnoughCapacity({ elmalar: 2, üzümler: 3, havuçlar: 1 }, 8)); // doğru
console.log(isEnoughCapacity({ elmalar: 4, üzümler: 6, limon: 16 }, 12)); // YANLIŞ
console.log(isEnoughCapacity({ elmalar: 1, limon: 5, domatesler: 3 }, 14)); // doğru
console.log(isEnoughCapacity({ elmalar: 18, patatesler: 5, portakallar: 2 }, 7)); // YANLIŞ

  