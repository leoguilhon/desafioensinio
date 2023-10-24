import "cypress-real-events";

describe('Deve acessar o site do Desafio Ensinio e testar os submenus', () => {
  it('Acessar o site e testar o submenu Soluções', () => {
    cy.viewport(1840, 844)
    cy.visit('https://desafio-ensinio.vercel.app/')
    cy.wait(2000);
    cy.get(':nth-child(1) > [data-testid="hovermenu-wrapper"] > [data-testid="hovermenu-toggle"]').realHover()
    
    cy.contains('Soluções principais').should('be.visible')
  })
  it('Acessar o site e testar o submenu Languages', () => {
    cy.viewport(1840, 844)
    cy.visit('https://desafio-ensinio.vercel.app/')
    cy.wait(2000);
    cy.get('[data-testid="languageselect-label"]').realHover()
    
    cy.contains('EN' && 'ES').should('be.visible')
  })
})
describe('Deve selecionar as linguagens corretamente', () => {
  it('Acessar o site e selecionar a linguagem inglês', () => {
    cy.viewport(1840, 844)
    cy.visit('https://desafio-ensinio.vercel.app/')
    cy.wait(2000);
    cy.get('[data-testid="languageselect-label"]').realHover()
    cy.contains('EN').realClick()
    cy.contains('Your').should('be.visible')
  })
  it('Acessar o site e selecionar a linguagem espanhol', () => {
    cy.viewport(1840, 844)
    cy.visit('https://desafio-ensinio.vercel.app/')
    cy.wait(2000);
    cy.get('[data-testid="languageselect-label"]').realHover()
    cy.contains('ES').realClick()
    cy.contains('Descubre algunos').should('be.visible')
  })
})