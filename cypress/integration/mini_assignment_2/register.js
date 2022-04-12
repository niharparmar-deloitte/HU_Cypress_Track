import { cpSync } from "fs"

describe('Validating the site' , () => {
    it('visiting the url',() => {
        cy.visit("http://demo.automationtesting.in/Register.html")
        cy.title().should("eq","Register")
    })

    it('Selecting value from dropdown',()=>{
        cy.get('#msdd').click()
        cy.get('.ui-autocomplete').contains('Danish').click()
        cy.get('.ui-autocomplete').contains('Dutch').click()
    })

    it('Selecting a skill', ()=> {
        cy.get('#Skills').contains('Oracle').should('have.value','Oracle')
    })

    it('Selecting a country', ()=> {
        //cy.get('.select2-search__field').type('Ind')
        cy.get('#country').contains('Denmark').should('have.value','Denmark')
    })

})