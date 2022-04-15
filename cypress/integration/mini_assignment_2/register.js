import { cpSync } from "fs"

describe('Validating the site' , () => {
    it('visiting the url',() => {
        cy.visit('http://demo.automationtesting.in/Register.html')
        cy.title().should("eq","Register")
    })

    var lang1 = 'Danish'
    var lang2 = 'Dutch'
    it('Selecting value from dropdown',()=>{
          cy.visit('http://demo.automationtesting.in/Register.html');
          cy.get('#msdd').click()
          cy.get('.ui-autocomplete').contains(lang1).click()
          cy.get('.ui-autocomplete').contains(lang2).click()
    })

    it('Selecting a skill', ()=> {
        cy.visit('http://demo.automationtesting.in/Register.html');
        cy.get('#Skills').select('Oracle').should('have.value','Oracle')
    })

    it('Selecting a country', ()=> {
        cy.visit('http://demo.automationtesting.in/Register.html');
        cy.get('.select2-selection').click()
        cy.get('.select2-search__field').type('Aus') 
        cy.get('ul[class*="select2-results__option"] > li').each((ele,index) => {
            const cityText = ele.text()
            if (cityText.includes('Australia'))
            {
                cy.get('ul[class*="select2-results__option"] > li').eq(index).click({force:true})
            }
        })

    })

})