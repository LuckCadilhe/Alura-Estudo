class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if (this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Lucas";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;


const contaCorrenteLucas = new ContaCorrente();
contaCorrenteLucas.saldo = 0;
contaCorrenteLucas.agencia = 1001;



console.log(contaCorrenteLucas.saldo);
contaCorrenteLucas.saldo = 100;
console.log(contaCorrenteLucas.saldo);
contaCorrenteLucas.sacar(200);


console.log(contaCorrenteLucas.saldo);
console.log(cliente1);
console.log(cliente2);
