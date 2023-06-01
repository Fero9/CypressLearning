import { LoginPage } from "./pages/login_page"

const loginPage = new LoginPage

describe('All of the login tests', () => {

    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })

    it('First login test with valid credentials', () => {
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
    
        cy.get(':nth-child(4) > .oxd-main-menu-item > .oxd-text').click()
    })
    
    it('Second login test with invalid credentials', () => {
        loginPage.enterUsername('Admin123')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
    
        cy.get(':nth-child(4) > .oxd-main-menu-item > .oxd-text').click()
    })
})
