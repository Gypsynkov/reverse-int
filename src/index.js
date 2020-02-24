module.exports = function reverse (n) {
    n = Math.abs(n);
    n = n + "";
    console.log(String(n).split('').reverse());
	return n.split("").reverse().join("");
}

  

