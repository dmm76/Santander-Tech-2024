const user = {
    name: 'DouGlas MARcelO mOnqUerO',
    email: 'DouGLAS.MonqueRO@GMAIL.COM',
    age: 48,
    address: 'X street, 48'
}
//for-in para objetos
for(const key in user){
    if(key === 'name'){
        user[key] = user[key].toLowerCase()
        const names = user[key].split(' ') //transformei name em um array
        user[key] = '' //reseta a chave name

        for(const name of names){
            const [primeiraLetra, ...restoDoNome] = name

            user[key] = user[key] + ' ' + primeiraLetra.toUpperCase() + restoDoNome.join('') 
            user[key] = user[key].trim()
        }
    }
    
    if(key in user){
        if(key === 'email'){
            user[key] = user[key].toLowerCase()
        }
    }
}


console.log(user)
console.log(user.name)