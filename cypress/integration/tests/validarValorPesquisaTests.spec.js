//Import de Page
require ( 'cypress-xpath' )
import homePage from "../../support/pages/HomePage.js";
import loginPage from '../../support/pages/LoginPage.js';
import buscaPage from '../../support/pages/BuscaPage.js';

//teste de um mesmo grupo podem ficar dentro de um describe
describe('pesquisarVoo', () => {

    //Pode se usar o beforeEach p este iniciar antes de cada teste (it)


    context('Seleciona Voos', function () {

        var email = Cypress.config('email')
        var senha = Cypress.config('senha')

        //**********Array com massa de dados**********
        var valores = [{saida: 'SAO', destino: 'RIO', dataIda: 7, dataVolta: 35, adultos: 3, criancas: 1, bebes: 1
            },
            {saida: 'RIO', destino: 'SAO', dataIda: 10, dataVolta: 35, adultos: 3, criancas: 2, bebes: 0
            }
            
        ]
        

        //**********Passo de login**********
        it('Dado que realido o login', function () {
            cy.visit(Cypress.config('urlHome'))
            loginPage.fechaLoginFace()
            loginPage.clicaEntrar()
            //loginPage.acessAndValidateLoginPage()
            loginPage.preencherEmail(email)
            loginPage.preencherSenha(senha)
            loginPage.clicarLogar()
        })


        //**********Passo de preencher as informações da busca**********
        valores.forEach(function (valor) {
            //Variaveis de Data
            var dia1 = valor.dataIda;
            var dia2 = valor.dataVolta;
        
            var moment = require('moment');
            const dateIda = moment().add(dia1, 'days').format('DD' + '/' + 'MM' + '/' + 'YYYY');
            const dateVolta = moment().add(dia2, 'days').format('DD' + '/' + 'MM' + '/' + 'YYYY');
            it('Quando pesquiso por uma viagem', function (preco1,preco2) {
                cy.visit(Cypress.config('url'))
                loginPage.fechaLoginFace()
                //Destinos
                
                homePage.preenchoSaida(valor)
                homePage.preenchoDestino(valor)
                var dia1 = valor.dataIda;
                var dia2 = valor.dataVolta;
                
                var moment = require('moment');
                const dateIda = moment().add(dia1, 'days').format('DD' + '/' + 'MM' + '/' + 'YYYY');
                const dateVolta = moment().add(dia2, 'days').format('DD' + '/' + 'MM' + '/' + 'YYYY');
                //Datas
                homePage.preenchoDataIda(dateIda)
                homePage.preenchoDataVolta(dateVolta)
                
                //Passageiros
                homePage.abrirFormularioPassageiros()
                
                
            
                
                
                homePage.preencherQuantidadeAdulto(valor)
                
                homePage.preencherQuantidadeCrianca(valor)
                homePage.preencherQuantidadeBebes(valor)
                
               
                //Buscar
                homePage.clicoBuscarVoo()
                buscaPage.pegaValorCard()
                buscaPage.selecionaVoo()
                buscaPage.pegaValorCheckout()
                


                
            })

            it('Entao os valores do card e do checkout devem ser os mesmos', function () {
                buscaPage.comparaPreco()

                
            })

            
        })




    })
})