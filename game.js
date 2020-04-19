arr= [];

function guess(param){
	for(n=1; n<=param; n++){
		if(n%2===0 && n%3===0 && n%5===0){
			arr.push("yu-gi-oh");

		}
		else if(n%2===0 && n%3===0){
			arr.push("yu-gi");
		}
		else if (n%3===0 && n%5===0) {
			arr.push("gi-oh");
		}
		else if (n%2===0 && n%5===0) {
			arr.push("yu-oh");
		}
		else if(n%2==0){
			arr.push("yu");
		}else if(n%3==0){
			arr.push("gi");

		}else if(n%5==0){
			arr.push("oh");
		}else{
			arr.push(n);
		}
	}
	// console.log(guess);
	return arr;
}
console.log(guess(100));
coonsole.log(guess(30))