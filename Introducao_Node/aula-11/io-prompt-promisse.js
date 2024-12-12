const rl = require('readline');
const prompt = rl.createInterface({
  input: process.stdin,
  output: process.stdout
});

const promptPromisse = {
    question: (pergunta) => new Promise((resolve, reject) => {
        try {
            prompt.question((pergunta), (resposta) => resolve(resposta))
        } catch (error) {
            reject(error)
        }
    }),
    close: () => prompt.close()
}

async function askUser() {
    const numero = await promptPromisse.question('Qual seu numero?: ')
    console.log(`O dobro do seu numero é: ${parseInt(numero) * 2}`)

    const cor = await promptPromisse.question('Qual sua cor favorita?: ')
    console.log(`Sua cor favorita é: ${cor}`)
    prompt.close()
}

askUser()