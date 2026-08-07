# Test Cases

Manual test-case specifications behind the automated suite.
Each automated test in `tests/` maps to one of the cases below.

---

## Feature: Account

### TC-001

**Title:** Register a new user and delete the account
**Feature:** Account
**Preconditions:** User is on the home page and not logged in.
**Steps:**

1. Open "Signup / Login".
2. Enter a unique name and email in the "New User Signup!" block and submit.
3. Fill in the account-information form and click "Create Account".
4. Click "Continue".
5. Click "Delete Account".

**Expected result:**
"Account Created!" is shown after step 3. After step 4 the header shows
"Logged in as <username>". After step 5 "Account Deleted!" is shown.

---

### TC-002

**Title:** Log in with valid credentials and log out
**Feature:** Account
**Preconditions:** A registered account exists (created during the test).
**Steps:**

1. Register an account, then log out.
2. Open "Signup / Login".
3. Enter the registered email and password in the Login block and submit.
4. Click "Logout".

**Expected result:**
After step 3 the header shows "Logged in as <username>".
After step 4 the user is returned to the login page and is no longer logged in.

---

### TC-003

**Title:** Signup with an already registered email is rejected
**Feature:** Account
**Preconditions:** An account with the target email already exists.
**Steps:**

1. Open "Signup / Login".
2. Enter a name and the already-registered email in the signup block and submit.

**Expected result:**
An error "Email Address already exist!" is displayed.

---

### TC-004

**Title:** Login with invalid credentials is rejected (data-driven)
**Feature:** Account
**Preconditions:** User is on the login page. Credentials do not belong to any account.
**Steps:**

1. Enter an invalid email/password pair in the Login block.
2. Submit.

**Expected result:**
An error "Your email or password is incorrect!" is displayed.
Runs for several invalid credential pairs.

---

## Feature: Products

### TC-005

**Title:** All Products page displays a non-empty product list
**Feature:** Products
**Preconditions:** User is on the home page.
**Steps:**

1. Open "Products" from the header.

**Expected result:**
"All Products" heading is visible and at least one product card is displayed.

---

### TC-006

**Title:** Search product by valid name returns results (data-driven)
**Feature:** Products
**Preconditions:** User is on the products page.
**Steps:**

1. Enter a valid product term into the search field.
2. Click the search button.

**Expected result:**
"Searched Products" heading is visible and at least one matching product
is displayed. Runs for terms: dress, top, jeans, tshirt.

---

### TC-007

**Title:** Open product details shows the product name
**Feature:** Products
**Preconditions:** User is on the products page.
**Steps:**

1. Click "View Product" on the first product card.

**Expected result:**
The product-information block is visible and shows a non-empty product name.

---

## Feature: Cart

### TC-008

**Title:** Add a product to the cart from the products list
**Feature:** Cart
**Preconditions:** User is on the products page.
**Steps:**

1. Hover the first product card and click "Add to cart".
2. Dismiss the modal with "Continue Shopping".
3. Open the cart.

**Expected result:**
The cart table is visible and contains at least one item.

---

### TC-009

**Title:** Add a product to the cart from the details page with a chosen quantity
**Feature:** Cart
**Preconditions:** User is on a product details page.
**Steps:**

1. Set the quantity to 3.
2. Click "Add to cart".
3. Open the cart via "View Cart".

**Expected result:**
The cart contains the selected product with quantity 3.

---

## Feature: Contact

### TC-010

**Title:** Submit the Contact Us form successfully
**Feature:** Contact
**Preconditions:** User is on the home page.
**Steps:**

1. Open "Contact us".
2. Fill name, email, subject and message.
3. Submit and accept the confirmation dialog.

**Expected result:**
"Success! Your details have been submitted successfully." is displayed.

---

## Feature: Subscription

### TC-011

**Title:** Subscribe to the newsletter from the home page footer
**Feature:** Subscription
**Preconditions:** User is on the home page.
**Steps:**

1. Scroll to the footer.
2. Enter an email into the subscription field and submit.

**Expected result:**
"You have been successfully subscribed!" is displayed.

---

### TC-012

**Title:** Subscribe to the newsletter from the cart page footer
**Feature:** Subscription
**Preconditions:** User is on the cart page.
**Steps:**

1. Scroll to the footer.
2. Enter an email into the subscription field and submit.

**Expected result:**
"You have been successfully subscribed!" is displayed.
