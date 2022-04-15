import registrationPage from "../PageObjects/registrationPage";

describe('Registration Page', function(){
    let Sign
    before(function(){
        cy.fixture('registration').then(function(data)
        {
            Sign=data            
        })
})

    it('Registration with invalid Email-id',function(){
        const rp = new registrationPage();
        cy.visit('https://www.demoblaze.com/index.html#');
        rp.getregisterbutton().click();
        rp.getusername().clear().type(Sign.invalidusername);
        //rp.getpassword().type(this.data.invalidpassword);
        rp.getsignupbutton().click();
        rp.getpophandle().eq(1).click({force:true})
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.')
    })

    })
    it('Registration with empty Email-id',function(){
        const rp = new registrationPage();
        cy.visit('https://www.demoblaze.com/index.html#');
        rp.getregisterbutton().click();
        //rp.getusername().type(this.data.emptyusername);
        rp.getpassword().clear().type(Sign.password);
        rp.getsignupbutton().click();
        rp.getpophandle().eq(1).click({force:true})
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.')

        })
    })

    it('Registration with empty password',function(){
        const rp = new registrationPage();
        cy.visit('https://www.demoblaze.com/index.html#');
        rp.getregisterbutton().click();
        rp.getusername().clear().type(Sign.username);
        //rp.getpassword().type(this.data.emptypassword);
        rp.getsignupbutton().click();
        rp.getpophandle().eq(1).click({force:true})
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.')

        })
    })

    it('Registration with empty Email-id & password',function(){
        const rp = new registrationPage();
        cy.visit('https://www.demoblaze.com/index.html#');
        rp.getregisterbutton().click();
        //rp.getusername().type(this.data.emptyusername);
        //rp.getpassword().type(this.data.emptypassword);
        rp.getsignupbutton().click();
        rp.getpophandle().eq(1).click({force:true})
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Please fill out Username and Password.')

        })
    })

    it('Registration-Sign-in',function(){
        const rp = new registrationPage();
        cy.visit('https://www.demoblaze.com/index.html#');
        rp.getregisterbutton().click();
        rp.getusername().clear().type(Sign.username);
        rp.getpassword().type(Sign.password);
        rp.getsignupbutton().click();
        rp.getpophandle().eq(1).click({force:true})
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Sign up successful.')

        })
    })
    
})