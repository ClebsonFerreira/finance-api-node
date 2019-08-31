class  Titulo{
    
    constructor() {
        this.nome 
        this.valor
        this.vencimento
        this.parcela
        this.status
    }

    getName() {
        return this.name;
    }
    setName(name){
        this.name = name
    }
    getValor(){
        return this.valor;
    }
    setValor(valor){
        this.valor = valor
    }
    getVencimento(){
        return this.vencimento;
    }
    setVencimento(vencimento){
        this.vencimento = vencimento
    }
    getParcela(){
        return this.parcela;
    }
    setParcela(parcela){
        this.parcela = parcela
    }
    getStatus(){
        return this.status;
    }
    setStatus(status){
        this.status = status
    }

}

module.exports = Titulo;