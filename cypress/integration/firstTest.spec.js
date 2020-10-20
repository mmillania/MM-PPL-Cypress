/// <reference types="Cypress"/>

describe('My first test suite', () => {
    it('First test', () => {
        cy.visit('/')
        cy.contains('Form').click();
        cy.contains('Form Layouts').click()

    })

    it('Test Fill Inline form', () => {
        cy.get('input[placeholder="Jane Doe"]').type('Mardhiyah Millania')
        cy.get('[placeholder="Email"][type="text"]').type('mmillania09@gmail.com')
        cy.get('.custom-checkbox').first().click()
        cy.get('[status="primary"][type="submit"]')
        cy.contains('Submit')
    });


    it('Test Fill Using the Grid', () => {
        cy.get('#inputEmail1').type('mmillania09@gmail.com')
        cy.get('#inputPassword2').type('1122334455')
        cy.get('.text').contains('Option 1').click()
        cy.get('.text').contains('Option 2').click()
        cy.get('[status="primary"][type="submit"]')
        cy.contains('Sign in')
    });

    it('Test Fill Basic form', () => {
        cy.get('#exampleInputEmail1').type('mmillania09@gmail.com')
        cy.get('#exampleInputPassword1').type('1122334455')
        cy.get('.custom-checkbox').eq(1).click()
        cy.get('[status="danger"][type="submit"]')
        cy.contains('Submit')
    });

    it('Test Fill Form without labels', () => {
        cy.get('[placeholder="Recipients"]').type('Mardhiyah Millania')
        cy.get('[placeholder="Subject"]').type('Project Cypress')
        cy.get('textarea[placeholder="Message"]').type('Tugas Pengujian Perangkat Lunak 3B Pengujian Menggunakan Cypress')
        cy.get('[status="success"][type="submit"]')
        cy.contains('Send')
    });

    
    it('Fill Block form', () => {
        cy.get('#inputFirstName').type('Mardhiyah')
        cy.get('#inputLastName').type('Millania')
        cy.get('#inputEmail').type('mmillania09@gmail.com')
        cy.get('#inputWebsite').type('www.tugaspplmillan.com')
        cy.get('[status="primary"][type="submit"]')
        cy.contains('Submit')
    });

    it('Fill Horizontal form', () => {
        cy.get('#inputEmail3').type('mmillania09@gmail.com')
        cy.get('#inputPassword3').type('1122334455')
        cy.get('.custom-checkbox').last().click()
        cy.get('[status="warning"][type="submit"]')
        cy.contains('Sign in')
    });

})
