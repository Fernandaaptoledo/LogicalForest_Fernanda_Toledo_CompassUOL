import assert from 'assert'
import chai from 'chai'
import Calculadora from '../src/calculadora.js'

const expect = chai.expect

describe('Testes de soma', () => {
    it('Deve somar 4 e 5 resultando em 9', () => {
       let resultado = Calculadora.soma(4,5)
       expect(resultado).to.be.equal(9)
    })
    it('Deve somar -4 e 5 resultando em 1', () => {
       let resultado = Calculadora.soma(-4,5)
       expect(resultado).to.be.equal(1)
    
    })
})
describe('Testes de subtração', () => {
    it('Deve subtrair 4 e 5 resultando em -1', () => {
       let resultado = Calculadora.sub(4,5)
       expect(resultado).to.be.equal(-1)
    })
})
describe('Testes de mutiplicação', () => {
    it('Deve multiplicar 3 e 5 resultando em 15', () => {
       let resultado = Calculadora.mult(3,5)
       expect(resultado).to.be.equal(15)
    })
})
describe('Testes de divisão', () => {
    it('Deve dividir 25 e 5 resultando em 5', () => {
       let resultado = Calculadora.div(25,5)
       expect(resultado).to.be.equal(5)
    })
})
