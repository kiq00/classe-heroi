class heroi{
    constructor (nome, idade, tipo, ataque){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }
    atacar(){
        console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
    }
}
let mago = new heroi("Merlin", "20", "mago", "Magia")
let guerreiro = new heroi ("Geralt", "30", "Guerreiro", "espada")
let monge = new heroi ("Jack Chan", "50", "Artes Marciais", "Artes Marciais")
let ninja = new heroi ("Yuji", "20", "Ninja", "Shuriken")

let heroiEscolhido = "Ninja"

switch(true){
    case heroiEscolhido === "Mago":
        mago.atacar();
        break
    case heroiEscolhido === "Guerreiro":
        guerreiro.atacar();
        break
    case heroiEscolhido === "Monge":
        monge.atacar();
        break
    case heroiEscolhido === "Ninja":
        ninja.atacar();
        break
    default:
        console.log("Escolha uma classe de heroi")
}








