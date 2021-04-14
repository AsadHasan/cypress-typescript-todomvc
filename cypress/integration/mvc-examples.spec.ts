before(() => {
  cy.visit("");
});

describe("MVC examples", () => {
  it("should show Examples heading", () => {
    cy.get("h2").contains("Examples");
  });
  it("should show JavaScript in Examples", () => {
    cy.get("div.tab-content").contains("JavaScript");
  });
});
