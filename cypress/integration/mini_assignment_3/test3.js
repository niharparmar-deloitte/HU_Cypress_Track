describe('radio button',()=>{
    it('clicking radio button',()=>{
        cy.visit('https://demoqa.com/elements')
        cy.url().should('eq', 'https://demoqa.com/elements')
        cy.get('#item-2').click()
        cy.get('div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div:nth-child(2) div.custom-control.custom-radio.custom-control-inline:nth-child(3) > label.custom-control-label').click()
        cy.get('div.body-height:nth-child(2) div.container.playgound-body div.row div.col-12.mt-4.col-md-6:nth-child(2) div:nth-child(2) p.mt-3:nth-child(5) > span.text-success').should('have.text', 'Impressive');

        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    })
})