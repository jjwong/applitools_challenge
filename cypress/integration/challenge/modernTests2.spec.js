const url = "https://demo.applitools.com/gridHackathonV2.html";

describe("UFG Hackathon", () => {
  it(`Task 1`, function () {
    // Navigate to the url we want to test
    cy.visit(url);

    // Call Open on eyes to initialize a test session
    cy.eyesOpen({
      appName: "V1",
      testName: "Cross-Device Elements Test",
    });

    // check the login page with fluent api, see more info here
    // https://applitools.com/docs/topics/sdk/the-eyes-sdk-check-fluent-api.html
    cy.eyesCheckWindow({
      tag: "Grid",
      target: "window",
      fully: true,
    });

    // Call Close on eyes to let the server know it should display the results
    cy.eyesClose();
  });

  it(`Task 2`, function () {
    cy.visit(url);

    // Call Open on eyes to initialize a test session
    cy.eyesOpen({
      appName: "V1",
      testName: "Filter Results",
    });

    cy.eyesCheckWindow({
      tag: "Home",
      target: "window",
      fully: true,
    });

    // Verify the filter is black before clicking
    cy.get(".container_check#LABEL__containerc__104").contains("Black");
    cy.get(".container_check > #colors__Black ~ .checkmark").click();
    cy.get("#filterBtn").click();

    cy.eyesCheckWindow({
      tag: "Product Grid",
      target: "region",
      fully: true,
    });

    cy.eyesClose();
  });

  it(`Task 3`, function () {
    cy.visit(url);

    cy.eyesOpen({
      appName: "V1",
      testName: "Product Details test",
    });

    cy.eyesCheckWindow({
      tag: "Home",
      target: "window",
      fully: true,
    });

    // Verify the filter is black before clicking
    cy.get(".container_check#LABEL__containerc__104").contains("Black");
    cy.get(".container_check > #colors__Black ~ .checkmark").click();
    cy.get("#filterBtn").click();

    // Click on the first product
    cy.get("#product_1 > img").click();

    cy.eyesCheckWindow({
      tag: "pdp",
      target: "window",
      fully: true,
    });

    cy.eyesClose();
  });
});
