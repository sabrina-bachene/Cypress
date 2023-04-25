describe('inscription réussie', () => {
    beforeEach(() => {
        // Naviguer vers la page de connexion
        cy.visit('https://preprod.backmarket.fr/fr-fr/register');
        // Cliquer sur le bouton 
        cy.contains("C'est OK pour moi").click();
    });
    it('remplire le formulaire ', () => {
        cy.get('#firstName').type('Sabrina');
        cy.get('#lastName').type('mina');
        // Utilisez le nouveau mail dans vos commandes Cypress
        const newEmail = `test${Math.random() * 100000}@gmail.com`;
        cy.get('#signup-email').type(newEmail);
        cy.get('#signup-password').type('Poe@testeur24');
        cy.contains("J’accepte de recevoir les meilleurs plan du web et la ").click();
        cy.contains("Enchantés ! ").click();

    });
});
describe('inscription échouée ', () => {
    beforeEach(() => {
        // Naviguer vers la page de connexion
        cy.visit('https://preprod.backmarket.fr/fr-fr/register');
        // Cliquer sur le bouton 
        cy.contains("C'est OK pour moi").click();
    });
    it('remplire le formulaire ', () => {
        cy.get('#firstName').type('Sabrina');
        cy.get('#lastName').type('mina');
        cy.get('#signup-email').type('s.bachene@afept.fr');
        cy.get('#signup-password').type('Poe@testeur24');
        cy.contains("J’accepte de recevoir les meilleurs plan du web et la ").click();
        cy.contains("Enchantés ! ").click();


    });
});

describe('Authentification', () => {
    beforeEach(() => {
      // Naviguer vers la page de connexion
      cy.visit('https://preprod.backmarket.fr/fr-fr/register');
       // Cliquer sur le bouton 
       cy.contains("C'est OK pour moi").click();
    });
  
    it('Devrait se connecter avec succès avec des identifiants valides', () => {
      // Remplir le champ de l'adresse e-mail
      cy.get('#signin-email').type('s.bachene@afept.fr');
  
      // Remplir le champ du mot de passe
      cy.get('#signin-password').type('Poe@testeur24');
  
      // Cliquer sur le bouton de connexion
      cy.contains("Welcome Back!").click();
  
      // Vérifier que la connexion a réussi
      cy.url().should('not.include', '/register');
    });
});

