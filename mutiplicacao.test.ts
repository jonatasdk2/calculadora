import multiplicar from "./multiplicacao"

describe('testes de subtracao',()=>{

    test('testa o resultado de uma subtração ',()=>{
      expect(multiplicar(10,5)).toBeCloseTo(50) 
      expect(multiplicar(3,3.3)).toBeCloseTo(9.9)
    })

    test('testa o resultado incorreto de uma subtração',()=>{
        expect(multiplicar(10,5)).not.toBe(6) 
      })
})