

//**********Mapeamento de elementos**********
const el = {
    valorCard1: 'div[id^="price-total"] span[id^=card-total]',
    botaoCard1: 'button[id^=card-] span',
    valorCheckout: 'div[id^="price-total"] span[class^=price-tax]'
}
class BuscaPage {

    //**********Ações**********
    selecionaVoo(){
        cy.get(el.botaoCard1).eq(0)
            .should('be.visible')
            .click({
                force: true
            })
    }

pegaValorCard() {
    cy.wait(36000)   
    cy.get(el.valorCard1).eq(0).invoke('text').then(precoInicio => {
        let preco1 = Number(precoInicio);
        console.log(preco1); 
        return preco1;   
    })  
}


pegaValorCheckout(){
    cy.wait(10000)
    cy.get(el.valorCheckout).invoke('text').then(precoFinal => {
        var preco2 = Number.MIN_VALUE(precoFinal);
        console.log(preco2);
        return preco2;
})
}

comparaPreco(){
      
    cy.get(el.valorCard1).eq(0).invoke('text').then(precoInicio => {
        let preco1 = Number(precoInicio);
        console.log(preco1); 
        cy.get(el.botaoCard1).eq(0)
        .should('be.visible')
        .click({
            force: true
        })
        cy.get(el.valorCheckout).invoke('text').then(precoFinal => {
            var preco2 = parseInt(precoFinal);
            console.log(preco2);

        expect(preco1).to.eq(preco2)

    })
    

    })
}
}



export default new BuscaPage();