function heyJude() {
  let string = "Na na na na na na na, na na na na, hey Jude."

  return (new Array(17)).join(string);
}


function prohibitedLanguage(string) {
  return string.search(/candycorn|brusselssprouts/)
}
