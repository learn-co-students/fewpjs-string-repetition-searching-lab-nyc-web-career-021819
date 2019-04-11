


function heyJude(verse){
  return (new Array(17).join(verse))
}


const nonoWords = /candycorn|brusselssprouts/;
const prohibitedLanguage = (str) => str.search(nonoWords);
