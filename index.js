function heyJude(verse){
  return  verse.repeat(16);
}

function prohibitedLanguage(username){
    let bannedWords = /candycorn|brusselssprouts/
   return username.search(bannedWords);
}