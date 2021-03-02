describe("App loaded", () => {
  it("Visit page and it has data", () => {
    cy.visit("/");
    cy.contains("Luke");
    cy.contains("A New Hope");
    cy.contains("Tatooine");
  });
});
