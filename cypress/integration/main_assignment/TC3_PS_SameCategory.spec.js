import loginPage from "../PageObjects/loginPage";
import products from "../PageObjects/products";
describe('Login Page', function(){
    before(function(){
        cy.fixture('login').then(function(data)
        {
            this.data=data;
        })
    })

    it.only('Place an order for multiple products with same category',function(){
        const pd = new products();
        const lp = new loginPage();
        cy.visit('https://www.demoblaze.com/index.html#');
        lp.getloginlink().click()
        lp.getlogininput().clear().type(this.data.validusername);
        lp.getpasswordinput().clear().type(this.data.validpassword);
        lp.getsigninbutton().click()
        pd.getlaptopid()
        pd.getproductid(this.data.name)
        pd.getaddtocart()
        cy.go(-1)
        cy.go(-1)
        pd.getlaptopid()
        pd.getproductid(this.data.name1)
        pd.getaddtocart()
        pd.getcartbutton()
        pd.getvalidateprice()
        pd.getplaceorder()
        pd.getuname(this.data.pname,this.data.pcountry,this.data.pcity,this.data.pcard,this.data.pmonth,this.data.pyear)
        pd.getpurchasebutton()
        pd.getpophandle().eq(1).click({force:true})
        cy.on('window:alert', (str) => {
             expect(str).to.equal('Product added.')

         })

    })
})