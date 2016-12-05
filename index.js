const fs = require('fs')
const home = require('os').homedir()
const username = require('username').sync()
const chromeDictionary = `Library/Application Support/Google/Chrome/${home}/Custom Dictionary.txt"`
const localDictionary  = `Users/${username}/Library/Spelling/LocalDirectory`

[chromeDictionary, localDictionary].forEach(dictionary => fs.truncate(dictionary, 0))
