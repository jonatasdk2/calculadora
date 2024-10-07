import som from "./soma";



describe('conjunto de testes',()=>{

    test('deve verificar o resultado de uma soma',()=>{
        expect(som(3,8)).toBe(11)
    })

    test('deve verificar o resultado de uma soma',()=>{
        expect(som(3,8)).not.toBe(12)
    })
})