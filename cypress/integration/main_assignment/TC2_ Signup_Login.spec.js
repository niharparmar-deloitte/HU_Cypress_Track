import loginPage from "../PageObjects/loginPage";
describe('Login Page', function(){
    let Dine
    before(function(){
        cy.fixture('login').then(function(data)
        {
            Dine=data
        })
    })

    it('Log-in with incorrect username and incorrect password.', function(){
        const lp = new loginPage();
        lp.getvisiturl()
        lp.getloginlink().click()
        lp.getlogininput().clear().type(Dine.invalidusername);
        lp.getpasswordinput().clear().type(Dine.invalidpassword);
        lp.getsigninbutton().click()
        lp.getpophandle().eq(1).click({force:true})
        cy.on('window:alert', (str) => {
            expect(str).to.equal('User does not exist.')
    })
    })

    it('Log-in with correct username and empty password.', function(){
        const lp = new loginPage();
        lp.getvisiturl()
        lp.getloginlink().click()
        lp.getlogininput().clear().type(Dine.validusername);
        lp.getsigninbutton().click()
        lp.getpophandle().eq(1).click({force:true})
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.')
    })
    })

    it('Log-in with empty username and valid password.', function(){
        const lp = new loginPage();
        lp.getvisiturl()
        lp.getloginlink().click()
        lp.getpasswordinput().clear().type(Dine.validpassword);
        lp.getsigninbutton().click()
        lp.getpophandle().eq(1).click({force:true})
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.')
    })
    })

    it('Log-in with valid username and password.', function(){
        const lp = new loginPage();
        lp.getvisiturl()
        lp.getloginlink().click()
        lp.getlogininput().clear().type(Dine.validusername);
        lp.getpasswordinput().clear().type(Dine.validpassword);
        lp.getsigninbutton().click()
        //lp.getuserid().should('have.value',this.data.validusername);
    })



})