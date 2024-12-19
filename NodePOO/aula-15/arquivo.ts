class Carro {
    constructor(car) {
        this.marca = car.marca;
        this.modelo = car.modelo;
        this.cor = car.cor;
        this.ano = car.ano;
    }

    info() {
        return `${this.modelo} ${this.ano} ${this.cor}`;
    }
}

/* Não modifique o código abaixo! */
export function execute(car) {
    return new Carro(car).info();
}
