function genCharArray(charA, charZ) {
    var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}
alphabet = genCharArray('a', 'z')

function Krypt(myString,lvl=5){
	if (lvl < 0) return "Unavailable level !"
	actualHash = ""
	for (i in myString){
		for (j=0;j<lvl;j++){
			randomNumber = Math.round(Math.random() * (alphabet.length-1))
			randomLetter = alphabet[randomNumber]
			actualHash += randomLetter
		}
		actualHash += myString[i]
	}
	actualHash += "§"+lvl
	return actualHash
}

function unKrypt(hash){
	key = parseInt(hash.split("§")[1])
	actualString = ""
	i=key
	while (i<hash.length){
		//if (hash.charAt(i)!=key.toString() && key!=1)
		actualString += hash.charAt(i)
		i += key+1
	}
	return actualString
}

module.exports = {unKrypt,Krypt}

//console.log(unKrypt("mmcioKtblusaqcnkdrgczdmistzhumkvujb xvcgcctdtoi'hynonetdiicsgnytktocpef ohgmolyejlpepxxot qxioebfkqeug§5"))