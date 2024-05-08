console.log("test");

// 1. Square Star Pattern
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *

// 11  21  31  41  51  61
// 12  22  32  42  52  62
// 13  23  33  43  53  63
// 14  24  34  44  54  64

const SquareStarPattern = () => {
  let str = "";
  for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 6; j++) {
      str = str + "* ";
    }
    str = str + "<br>";
  }
  document.write(str);
};
SquareStarPattern();

//   i    j
//   1    1      *   *
//   1    2      *
//   1    3      *
//   1    4      *
//   1    5      *
//   1    6      *

//   2    1
//   2    2
document.write("str");
document.write("str");
document.write("str");
document.write("str");
document.write("str");
document.write("str");
document.write("str");
document.write("str");
document.write("<br>");
SquareStarPattern();
document.write("<br>");

SquareStarPattern();
document.write("<br>");

SquareStarPattern();
document.write("<br>");

SquareStarPattern();
document.write("<br>");

SquareStarPattern();
document.write("<br>");

SquareStarPattern();
