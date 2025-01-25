function calcAverageCalories(days) {
  if (days.length === 0) return 0;

  const totalCalories = days.reduce((acc, day) => acc + day.kalori, 0);
  return totalCalories / days.length;
}

// Test Cases
console.log(calcAverageCalories([
  { gün: "pazartesi", kalori: 3010 },
  { gün: "salı", kalori: 3200 },
  { gün: "çarşamba", kalori: 3120 },
  { gün: "perşembe", kalori: 2900 },
  { gün: "cuma", kalori: 3450 },
  { gün: "cumartesi", kalori: 3280 },
  { gün: "pazar", kalori: 3300 }
])); // 3180

console.log(calcAverageCalories([
  { gün: "pazartesi", kalori: 2040 },
  { gün: "salı", kalori: 2270 },
  { gün: "çarşamba", kalori: 2420 },
  { gün: "perşembe", kalori: 1900 },
  { gün: "cuma", kalori: 2370 },
  { gün: "cumartesi", kalori: 2280 },
  { gün: "pazar", kalori: 2610 }
])); // 2270

console.log(calcAverageCalories([])); // 0
