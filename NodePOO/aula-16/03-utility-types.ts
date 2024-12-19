import { Product } from "./01-produto";

const product1: Readonly<Product> = {
    name: 'Palnito',
    amountInStock: 100,
    unitValue: 10,
}

//product1.name = 'Socks' // Readonly proibe acesso a mudancas //trava

const productAllOptional: Partial<Product> = {
    unitValue: 20,
} //usado para deixar todos os valores como nao obrigatorios

const productAllRequired: Required<Product> = {
    name: 'JAcker',
    amountInStock: 30,
    unitValue: 180,
    barCode: '3ecca32a-a4db-4da5-b56b-e4c465293c43',
} //usado para obrigar todos os valores à serem usados

const productOmit: Omit<Product,  'amountInStock' | 'barCode'> = {
   name: 'Short',
   unitValue: 80,
   //barCode: 'e7729964-63bf-46b8-8dc0-a44ace9a91e5'
} // usando para excluir alguns valores

const productOnlyNameAndValue: Pick<Product,  'name' | 'unitValue'> = {
    name: 'Short',
    unitValue: 80,    
 } // usado para escolher somente alguns valores
