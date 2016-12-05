const fs = require('fs')
const home = require('os').homedir()
const username = require('username').sync()
const chromeDictionary = `Library/Application Support/Google/Chrome/${home}/Custom Dictionary.txt`
const localDictionary  = `Users/${username}/Library/Spelling/LocalDirectory`
const dictionaries = [chromeDictionary, localDictionary]

dictionaries.forEach(dictionary => fs.truncate(dictionary, 0, console.log))
