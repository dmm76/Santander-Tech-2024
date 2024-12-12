//true - oque é avaliado como true
//trufy: true, [], {}, numero diferente de 0, string nao vazia
//false - o que é avalidado como false
//falsy: null, undefined, 0, "", NAN

console.log(!![], !!{}, !!1, !!'oi')

if ([] && {} && 1 && 'oi') {
    console.log(`tudo é truthy`)
}


console.log(!!null, !!undefined, !!0, !!NaN)