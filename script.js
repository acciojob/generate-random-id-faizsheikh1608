function makeid(l) {
  // write your code here
	  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

	let str = "";
	for(let i = 0 ; i < l;i++){
		const charIndex = Math.floor(Math.random() * characters.length);
		str += characters[charIndex];
	}
	return str;
}

// Do not change the code below.
const l = prompts("Enter a number.");
alert(makeid(l));
