import configUrl from '../../config/url.config.json';
import configEndPoints from '../../config/end_points.config.json';
import selLogin from '../../selectors/auth/login.sel.json';

//for open auth page
const login = () => {
    cy.visit(configUrl.url + configEndPoints.auth);
};
Cypress.Commands.add('login', login);

//func for auth
const authorization = (name, email, password) => {
    name != ""
        ? cy.get(selLogin.inputName).should('be.visible').clear().type(name)
        : cy.get(selLogin.inputName).should('be.visible').clear().focus().blur();

    email != ""
        ? cy.get(selLogin.inputEmail).should('be.visible').clear().type(email)
        : cy.get(selLogin.inputEmail).should('be.visible').clear().focus().blur();

    password != ""
        ? cy.get(selLogin.inputPassword).should('be.visible').clear().type(password)
        : cy.get(selLogin.inputPassword).should('be.visible').clear().focus().blur();

    cy
        .get(selLogin.btnSubmit)
        .should('be.visible')
        .click();
};
Cypress.Commands.add('authorization', authorization);