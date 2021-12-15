import auth from '../../fixtures/user_data/auth.fix.json';
import '../../support/auth/auth.actions';
import '../../support/commands';

describe('Authorization tests', () => {
    beforeEach(() => {
        cy.viewport(1280, 720);
        cy.login();
    })

    afterEach(() => {})

    it('Successful authorization', () => {
        cy.authorization(auth.name, auth.email, auth.password);
        cy.contains('Kostia').should('be.visible');
        cy.contains('en').should('be.visible');
        cy.get('button').contains(' Add Order ').should('be.visible');
        cy.contains(' History Orders List ').should('be.visible');
    })
})