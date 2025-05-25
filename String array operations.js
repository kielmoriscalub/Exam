function reverseString(str) {
  return str.split("").reverse().join("");
}

function isPalindrome(str) {
  return str === reverseString(str);
}

let str1 = prompt("Enter the first string:");
let str2 = prompt("Enter the second string:");

console.log("Original string 1:", str1);
console.log("Reversed string 1:", reverseString(str1));
console.log("Is string 1 a palindrome?", isPalindrome(str1));

console.log("Original string 2:", str2);
console.log("Reversed string 2:", reverseString(str2));
console.log("Is string 2 a palindrome?", isPalindrome(str2));