import selLogin from '../../selectors/order/order.sel.json';

//func for add new order
const addOrder = (name, quantity, cost, status, bidType) => {
    cy.contains(' Add Order ').click();

    name != ""
        ? cy.get(selLogin.inputName).should('be.visible').clear().type(name)
        : cy.get(selLogin.inputName).should('be.visible').clear().focus().blur();

    quantity != ""
        ? cy.get(selLogin.inputQuantity).should('be.visible').clear().type(quantity)
        : cy.get(selLogin.inputQuantity).should('be.visible').clear().focus().blur();

    cost != ""
        ? cy.get(selLogin.inputCost).should('be.visible').clear().type(cost)
        : cy.get(selLogin.inputCost).should('be.visible').clear().focus().blur();

    if(status != "") {
        cy.get(selLogin.inputStatus).should('be.exist').click();
        cy.contains(status).should('be.exist').click();
    } else {
        cy.get(selLogin.inputStatus).should('be.exist').clear().focus().blur();
    }

    if(bidType != "") {
        cy.get(selLogin.inputType).should('be.exist').click();
        cy.contains(bidType).should('be.exist').click({ force : true });
    } else {
        cy.get(selLogin.inputType).should('be.exist').clear().focus().blur();
    }

    cy.contains('Save').click();
};
Cypress.Commands.add('addOrder', addOrder);