var even = false;
var row = 1;
while (row <= 8) {
  if (even) {
    console.log("# # # # ");
    even = false;
  } else {
    console.log(" # # # #");
    even = true;
  }
  row++;
}
