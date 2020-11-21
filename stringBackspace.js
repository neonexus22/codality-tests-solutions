// Given two string S and T, return if both are equal when they are typed into empty text editor
// # is backspace key is pressed

function stringBackspace(S, T) {
  let first = [];
  let second = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "#") {
      first.pop();
    } else {
      first.push(S[i]);
    }
  }
  for (let i = 0; i < T.length; i++) {
    if (T[i] === "#") {
      second.pop();
    } else {
      second.push(T[i]);
    }
  }
  return first.join("") === second.join("");
}

console.log(stringBackspace("ab#c", "ad#c"));
console.log(stringBackspace("ab##", "c#d#"));
console.log(stringBackspace("a##c", "#a#c"));
