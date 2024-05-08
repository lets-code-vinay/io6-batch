const FindEvenOddNumberTable = () => {
  for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
      console.log("even number", i);
      for (let j = 1; j <= 10; j++) {
        console.log(`even number table ${i} X ${j}`, i * j);
      }
    } else {
      console.log("odd number", i);
      for (let j = 1; j <= 10; j++) {
        console.log(`odd number table ${i} X ${j}`, i * j);
      }
    }
  }
};
FindEvenOddNumberTable();
