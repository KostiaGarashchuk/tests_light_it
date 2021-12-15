import auth from '../../fixtures/user_data/auth.fix.json';
import '../../support/auth/auth.actions';
import '../../support/order/order.actions';
import '../../support/commands';

describe('Orders tests', () => {
    beforeEach(() => {
        cy.viewport(1280, 1024);
        cy.login();
        cy.authorization(auth.name, auth.email, auth.password);
    })

    afterEach(() => {})

    it('Successful add new order', () => {
        cy.intercept( 'POST', 'http://light-it-03.tk/api/orders/orders/', (req) => {
            expect(req.body.name).to.include('testName');
            expect(req.body.owner).to.be.a('number');
            expect(req.body.quantity).to.be.a('string');
            expect(req.body.status).to.be.a('number');
            expect(req.body.cost).to.be.a('string');
            expect(req.body.id).to.be.a('number');
            expect(req.body.bid_type).to.be.a('number');
        }).as('addOrder');
        cy.addOrder('testName', "10", "10", "Opened", "Selling");
        cy.wait('@addOrder');
        cy.contains('testName').should('be.visible');
        cy.contains(' Delete Order ').should('be.visible');
        cy.contains(' Edit Order ').should('be.visible');
    })
})