describe('validating URL', ()=>{
    it('launch URL',()=>{
        cy.visit('https://demoqa.com/')
        cy.get('div.body-height:nth-child(2) div.home-content div.home-body div.category-cards div.card.mt-4.top-card:nth-child(1) div:nth-child(1) div.card-body > h5:nth-child(1)').should('be.visible')
    })

    it('Elements Button',()=>{
        cy.get('div.body-height:nth-child(2) div.home-content div.home-body div.category-cards > div.card.mt-4.top-card:nth-child(1)').click()
        cy.url().should('eq', 'https://demoqa.com/elements')
    })

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
})