const { test, expect } = require('../fixtures/pages.fixture');

test.describe('Cart', () => {
  test('should add a product to the cart from the products list', async ({
    productsPage,
    cartPage,
  }) => {
    await productsPage.open();
    await productsPage.addProductToCartByIndex(0);

    await cartPage.open();
    await expect(cartPage.cartTable).toBeVisible();
    expect(await cartPage.getItemCount()).toBeGreaterThan(0);
  });

  test('should add a product to the cart from the details page with a chosen quantity', async ({
    productDetailsPage,
    cartPage,
  }) => {
    const quantity = 3;

    await productDetailsPage.open(1);
    const expectedName = await productDetailsPage.getProductName();
    await productDetailsPage.setQuantity(quantity);
    await productDetailsPage.addToCartAndViewCart();

    await expect(cartPage.cartTable).toBeVisible();
    expect(await cartPage.hasProduct(expectedName)).toBe(true);
    expect(await cartPage.getQuantityByRow(0)).toBe(String(quantity));
  });
});
