class loginPage{
    
    getvisiturl(){
        cy.visit('https://www.demoblaze.com/index.html#')
    }

    getloginlink(){
        return cy.get('#login2')
    }

    getlogininput(){
        return cy.get('#loginusername')
    }

    getpasswordinput(){
        return cy.get('#loginpassword')
    }

    getsigninbutton(){
        return cy.get('body.modal-open:nth-child(2) div.modal.fade.show:nth-child(3) div.modal-dialog div.modal-content div.modal-footer > button.btn.btn-primary:nth-child(2)')
    }

    getpophandle(){
        return cy.get('.modal-footer > button:nth-child(2)')
    }

    getuserid(){
        return cy.get('#nameofuser')
    }
}
export default loginPage