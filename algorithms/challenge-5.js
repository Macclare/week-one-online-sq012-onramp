function filterList(arr) {
 return arr.filter(function (item) {
    return typeof item === "number";
  });
 }

  module.exports =filterList

console.log(filterList([1, 2, "a", "b"]));
