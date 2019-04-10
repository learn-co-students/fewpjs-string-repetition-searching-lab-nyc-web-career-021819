// Code your solution here

// 1) function heyJude repeats verse 16x
// 2) function 'prohibitedLanguage' bans 'candycorn' and 
// 'brusselssprouts'

const myRegEx = /candycorn|brusselssprouts/

function heyJude() {
    return "Na na na na na na na, na na na na, hey Jude.".repeat(16)
}

function prohibitedLanguage(string) {
    return string.search(myRegEx)
}