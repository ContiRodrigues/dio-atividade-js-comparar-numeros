function comparaNumeros(num1, num2) {

	const primeiraFrase = criaPrimeiraFrase(num1, num2);
	const segundaFrase = criaSegundaFrase(num1, num2);
	
	return `${primeiraFrase} ${segundaFrase}`;
}

function criaPrimeiraFrase(num1, num2) {
	let primeiraFrase = `Os números ${num1} e ${num2}`;
	let simNao = 'não';

	if (num1 === num2) {
		simNao = '';
	}

	return `${primeiraFrase} ${simNao} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
	var soma = num1 + num2;
	let comparaDez;
	let comparaVinte;
	
	if (soma < 10) {
		comparaDez = 'menor do que';
	} 
	if (soma === 10) {
		comparaDez = 'igual a';
	} 
	if (soma > 10) {
		comparaDez = 'maior do que';
	}

	if (soma < 20) {
		comparaVinte = 'menor do que';
	}
	if (soma === 20) {
		comparaVinte = 'igual a';
	} 
	if (soma > 20) {
		comparaVinte = 'maior do que';
	}

	return `Sua soma é ${soma}, que é ${comparaDez} 10 e ${comparaVinte} 20.`;
	
}

console.log(comparaNumeros(10, 10));