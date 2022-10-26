class Pessoa {
    nome;
    idade;
    nascimento;

    constructor(nome, idade) { // Foram declarados somente o parâmetro "nome" e "idade".
        this.nome = nome;
        this.idade = idade;
        this.nascimento = `Você nasceu em ${2022 - idade}` // Irá ser exibido automaticamente, isso porque eu não declarei "nascimento" como parâmetro no construtor.
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é :${this.idade}`)
    }
}

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} tem ${p1.idade} anos é mais velho(a) que ${p2.nome} que tem ${p2.idade} anos`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} tem ${p2.idade} é mais velho(a) que ${p1.nome} que tem ${p1.idade}`);
    } else {
        console.log(`${p1.nome}, ${p2.nome} ambos tem a mesma idade ${p1.idade}`);
    }
}

const marcos = new Pessoa('Marcos Linss', 19);
const maiara = new Pessoa('Maiara Martins', 28);

compararPessoas(marcos, maiara);