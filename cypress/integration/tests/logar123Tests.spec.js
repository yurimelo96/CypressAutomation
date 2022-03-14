//Import de Page
import loginPage from '../../support/pages/LoginPage.js';

//teste de um mesmo grupo podem ficar dentro de um describe
describe('login123', ()=>{
    
    //uso o beforeEach p este iniciar antes de cada teste (it)
    beforeEach(()=>{
        cy.visit(Cypress.config('url'))  
    })

    it('RealizarLoginSucesso', ()=>{
        //Parametros (Arrange)
        var email = Cypress.config('email')
        var senha = Cypress.config('senha')

        //Uso dos métodos das classes de Page (Acts)
        loginPage.preencherEmail(email)
        loginPage.preencherSenha(senha)
        loginPage.clicarLogar()

    })




})
