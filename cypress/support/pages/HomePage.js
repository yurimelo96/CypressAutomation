require ( 'cypress-xpath' )
require('cypress-commands')

//**********Mapeamento de elementos**********
const el = {
  inputSaida: '.styles__InvertValuesWrapper-sc-1ommosc-0 > :nth-child(2) > .styles__InputWrapper-sc-qxqwj3-2 > .MuiInputBase-root > .MuiInputBase-input',
  inputDestino: ':nth-child(5) > .styles__InputWrapper-sc-qxqwj3-2 > .MuiInputBase-root > .MuiInputBase-input',
  dropPrimeiro: ':nth-child(1) > .styles__ItemButton-sc-1y9kjpm-2',
  inputDataSaida: '#datepicker-ida',
  inputDataVolta: '#datepicker-volta',
  botaoBuscarVoo: '.styles__ButtonWrapper-sc-1ommosc-1 > .MuiButtonBase-root',
  formPassageiros: '.styles__StyledFormControl-sc-1xwl39-1 > .MuiFormControl-root > .styles__InputWrapper-sc-qxqwj3-2 > .MuiInputBase-root > .MuiInputBase-input',
  quantidadeAdultos: 'div.MuiPaper-root.styles__StyledPaper-sc-wh0zl8-1.euiUGe.MuiPaper-elevation2.MuiPaper-rounded div.styles__MenuWrapper-sc-1xwl39-8.cqphXl div.styles__PassengersContainer-sc-1xwl39-0.dqtsxy:nth-child(1) div.styles__CounterWrapper-sc-1udsyfy-0.hclYnv div.styles__TextWrapper-sc-1udsyfy-2.hTTgdY:nth-child(2) > span.styles__StyledText-sc-jikqhn-0.lhOxen',
  quantidadeCriancas: 'div.MuiPaper-root.styles__StyledPaper-sc-wh0zl8-1.euiUGe.MuiPaper-elevation2.MuiPaper-rounded div.styles__MenuWrapper-sc-1xwl39-8.cqphXl div.styles__PassengersContainer-sc-1xwl39-0.dqtsxy:nth-child(2) div.styles__CounterWrapper-sc-1udsyfy-0.hclYnv div.styles__TextWrapper-sc-1udsyfy-2.hTTgdY:nth-child(2) > span.styles__StyledText-sc-jikqhn-0.lhOxen',
  quantidadeBebes: ':nth-child(3) > .styles__CounterWrapper-sc-1udsyfy-0 > .styles__TextWrapper-sc-1udsyfy-2 > .styles__StyledText-sc-jikqhn-0',
  adicionarAdulto: ':nth-child(1) > .styles__CounterWrapper-sc-1udsyfy-0 > :nth-child(3) > .Icon__StyledIcon-sc-1aimh8k-0',
  adicionarCrianca: ':nth-child(2) > .styles__CounterWrapper-sc-1udsyfy-0 > :nth-child(3) > .Icon__StyledIcon-sc-1aimh8k-0',
  adicionarBebe: ':nth-child(3) > .styles__CounterWrapper-sc-1udsyfy-0 > :nth-child(3) > .Icon__StyledIcon-sc-1aimh8k-0'


}

//**********Ações**********
class HomePage {



  preenchoSaida(valor) {
    //cy.wait(16000)
    
    cy.get(el.inputSaida, {
        timeout: 60000
      })
      .type(valor.saida)
    cy.wait(3000)
    cy.get(el.dropPrimeiro)
      .click()
  }


  preenchoDestino(valor) {
    cy.get(el.inputDestino, {
        timeout: 10000
      })
      .type(valor.destino)
    cy.get(el.dropPrimeiro)
      .click()
  }


  preenchoDataIda(dateIda) {
    cy.get(el.inputDataSaida, {
        timeout: 40000
      })
      .should('be.visible')
      .click({
        force: true
      })
      .type(dateIda);
  }


  preenchoDataVolta(dateVolta) {
    cy.get(el.inputDataVolta)
      .should('be.visible')
      .click({
        force: true
      })
        .type(dateVolta)
  }





  
  abrirFormularioPassageiros() {
    cy.get(el.formPassageiros)
      .should('be.visible')
      .click()
  }







  preencherQuantidadeAdulto(valor) {

    cy.get(el.quantidadeAdultos).invoke('text').then(text => {
      var contador = text;
      while (contador < valor.adultos) {
        cy.get(el.adicionarAdulto)
          .click()
          contador++
      }
    })
  }


  preencherQuantidadeCrianca(valor) {

    cy.get(el.quantidadeCriancas).invoke('text').then(text => {
      var contador = text;
      while (contador < valor.criancas) {
        cy.get(el.adicionarCrianca)
          .click()
          contador++
      }
    })
  }
    preencherQuantidadeBebes(valor) {

      cy.get(el.quantidadeBebes).invoke('text').then(text => {
        var contador = text;
        while (contador < valor.bebes) {
          cy.get(el.adicionarBebe)
            .click()
            contador++
      }
    })
  }
    









  

  

    
  
  

  //verificoQuantidadeBebe() {
    //var $value_3 = el.quantidadeBebes.innerHTML;
  //}
  //preencherQuantidadeBebe(bebes3) {
   // var $value_3 = el.quantidadeBebes.innerHTML;
   // if ($value_3 < bebes3) {
  //    cy.get(el.adicionarBebe).click({
   //     force: true
   //   })
  //  }
 // }

  clicoBuscarVoo() {
    cy.get(el.botaoBuscarVoo)
      .click()
      cy.wait(36000) 
  }
}

export default new HomePage();