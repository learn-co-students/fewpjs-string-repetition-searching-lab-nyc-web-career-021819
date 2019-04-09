// Code your solution here

function heyJude() {
  let string = "Na na na na na na na, na na na na, hey Jude."
  return string.repeat(16)
}

let prohibitedLanguage = (string) => {
  let bannedWords = /candycorn|brusselssprouts/;
  return string.search(bannedWords);
}
