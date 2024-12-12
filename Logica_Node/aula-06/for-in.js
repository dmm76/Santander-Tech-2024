const user = {
    name: 'JoSé MaRia',
    email: 'JOSE.M1@gmail.com',
    age: 23,
    address: 'X street'
}

for(const key in user){
    console.log(user[key])
}

console.log(user.name)
console.log(user["address"])