/// <reference types = "cypress"/>

before(function() {
    cy.fixture('example.json').as('test_data')
})

it('Is a read/write test', function() {
    cy.fixture('example.json').then((data) => {
        cy.log(data.name);
        cy.log(data.email)
    })

    cy.log(this.test_data.name)
})

it('Read file using readFile()', function(){
    cy.readFile('./cypress/fixtures/example.json').then((data) =>{
        cy.log(data.name)
    })
})

it('Write a file demo', function(){
    cy.writeFile('sample.txt', 'Hello, I am learning cypress today')
})