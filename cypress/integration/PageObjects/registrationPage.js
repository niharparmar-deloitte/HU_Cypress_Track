class registrationPage{


    getregisterbutton(){
        return cy.get('#signin2')
    }

    getusername(){
        return cy.get('#sign-username')
    }

    getpassword(){
        return cy.get('#sign-password')
    }

    getsignupbutton(){
        return cy.get('body.modal-open:nth-child(2) div.modal.fade.show:nth-child(2) div.modal-dialog div.modal-content div.modal-footer > button.btn.btn-primary:nth-child(2)')
    }

    getpophandle(){
        return cy.get('.modal-footer > button:nth-child(2)')
    }
}

export default registrationPage

