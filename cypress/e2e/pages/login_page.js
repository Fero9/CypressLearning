export class LoginPage{

    loginPage_username_textbox = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    loginPage_password_textbox = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    loginPage_login_button = '.oxd-button'

    enterUsername(username){
        cy.get(this.loginPage_username_textbox).type(username)
    }

    enterPassword(password){
        cy.get(this.loginPage_password_textbox).type(password)
    }

    clickLogin(){
        cy.get(this.loginPage_login_button).click()
    }
}

    
    