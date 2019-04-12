// Code your solution here

const heyJude = (verse) => {
  return verse.repeat(27);
}

const prohibitedLanguage = (name) => {
  if (name.indexOf('candycorn') > -1 ){
    return name.indexOf('candycorn')
  } else if (name.indexOf('brusselssprouts') > -1) {
    return name.indexOf('brusselssprouts')
  } else {
    return -1
  }
}
