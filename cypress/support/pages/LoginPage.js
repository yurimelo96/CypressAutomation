/**************-- Mapeamento --********************/
const el = {
  emailField: '#lpemail',
  senhaField:'#lppassword',
  logarButton: '#btn-login > .ng-scope',
  logoAreaDoCliente: '.subheader > .container',
  fecharPublish: '.tsG0HQh7bcmTha7pyanx-btn-close',
  fecharNewsletter: 'g > path',
  fechaFace: '.styles__IconWrapper-sc-1hnwv8t-1 > .Icon__StyledIcon-sc-1aimh8k-0',
  acessar:'.styles__MenuTrigerWrapper-sc-1tgnow7-4 > .styles__StyledText-sc-jikqhn-0',
  entrar: '.styles__HeaderContainerGuest-sc-u0c1qk-1 > .styles__StyledText-sc-jikqhn-0'
}
/*****************-- Ações --***********************/
class LoginPage {
  acessAndValidateLoginPage(){
        cy.get(el.fecharPublish,{ timeout: 10000 }).should('be.visible');
        cy.get(el.fecharPublish).click()
        cy.get(el.fecharNewsletter,{ timeout: 10000 }).should('be.visible');
        cy.get(el.fecharNewsletter).click()
       
  }

  clicaEntrar(){
    cy.get(el.acessar,{ timeout: 10000 }).should('be.visible').click()
    cy.get(el.entrar).click()
  }

  fechaLoginFace(){
    cy.get(el.fechaFace,{timeout: 16000}).should('be.visible').click()
  }

  preencherEmail(email){
      cy.get(el.emailField).type(email)
  }

  preencherSenha(senha){
      cy.get(el.senhaField).type(senha)
  }

  clicarLogar(){
      cy.get(el.logarButton).click()
  }

  validarLogin(){
      cy.get(el.logoAreaDoCliente).should('be.visible')
  }


}
export default new LoginPage()

