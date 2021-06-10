let oya = document.getElementById('oya');
let yoso = document.createElement('p');
yoso.innerText = 'こんにちは！';
oya.appendChild(yoso);
let onamae = keigo('廣瀬');
// 関数に渡す仮引数を丸カッコに指定する
function keigo(u_name) {
	let k_name = u_name + 'さん';
	return k_name;
}

function sisya5nyu(kazu = 0) {
	kotae = parseInt(kazu + 0.5);
	return kotae;
}
let kekka = sisya5nyu(17.4);
console.log(kekka);
console.log(kotae);
// ループ処理　for文の構文
/*
for(let i=0; i<12; i++) {
	alert(i + '回');
}
*/
/*
for(let i=0; i<6; i++) {
	console.log((i+1) + '回目');
}
*/
// 1~10までを合計する
/*
let ans = 0;
for(let i=1; i<11; i++) {
	ans += i;
	// ans = ans + i;
}
console.log(ans);
*/
let lang = ['HTML', 'CSS', 'JavaScript', 'JAVA', 'PHP', 'SQL'];
console.log(lang[0]);
//箇条書きをループ処理で書き出す
let oya2 = document.getElementById('kajo');
for(let i=0; i<6; i++) {
	let li = document.createElement('li');
	li.innerText = lang[i];
	oya2.appendChild(li);
}
function getEto(seireki) {
	let eto = ['ねずみ','うし','とら','うさぎ','たつ','へび','うま','ひつじ','さる','とり','いぬ','いのしし'];
	let i = (seireki - 1900) % 12;
	return eto[i];
}
let etoStr = getEto(2021);
alert(etoStr);