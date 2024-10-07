import dividir from "./multiplicacao"

describe('testes de subtracao',()=>{

    test('testa o resultado de uma subtração ',()=>{
      expect(dividir(10,5)).toBeCloseTo(2) 
      expect(dividir(3,2)).toBeCloseTo(1.5)
    })

    test('testa o resultado incorreto de uma subtração',()=>{
        expect(dividir(10,5)).not.toBe(6) 
      })
})