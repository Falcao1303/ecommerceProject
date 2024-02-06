class errorNotFound extends Error{
    constructor(){
        super('Cliente não encontrado')
        this.name = 'errorNotFound'
        this.idError = 0
    }
}

module.exports = errorNotFound