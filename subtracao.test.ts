import sub from "./subtracao";

describe('testes de subtracao',()=>{

    test('testa o resultado de uma subtração ',()=>{
      expect(sub(10,5)).toBe(5) 
      expect(sub(10.5,5.5)).toBeCloseTo(5)
    })

    test('testa o resultado incorreto de uma subtração',()=>{
        expect(sub(10,5)).not.toBe(6) 
      })
})