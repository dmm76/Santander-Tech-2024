const rl = require('readline');
const prompt = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

prompt.question('Digite um número: ', (line) => {
  const numero = parseFloat(line); // Converte para número
  if (isNaN(numero)) {
    console.log('Isso não é um número válido!');
  } else {
    console.log(`O dobro do seu número é: ${numero * 2}`);
  }
  prompt.close(); // Encerra o programa
});
