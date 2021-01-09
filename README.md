# Amazon Web App

This is an E-Commerce website clone of Amazon Shopping site.

## Authentication


Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app.

In order to buy a product on this page the user must authenticate. To do that he must click on the "Sign In" button in the header.

After that the user will be redirected to the Login page. The user can then Login or create a new account. In this app the user can use dummy data to create the account so he does not have to enter his real email address or password. After that he can use that data to login.

After the login the user-data will be stored in the React context and used throughout the app.

## The Amazon App

![alt text](https://raw.githubusercontent.com/tonigasic/portfolio/master/src/assets/images/Screenshot_1.png)


After the login the user will automatically be redirected to the home page. There the user can add products to the basket or even search for them in the header.

Once the user has picked his products and added them to the basket he now can click on the basket icon on the right side of the header.

On the checkout page the user can see the products he added to the basket and also the subtotal. There is also an option to remove the products if he changed his mind.

If the user clicks on the "Proceed to checkout" button he will be redirected on the payment page. There he can once more see his projects and the subtotal.

In this section, in order to buy the products, the user must enter his Credit-Card data. Since this is a demo app feel free to use the following data:

#### `Credit-Card number: 4242 4242 4242 4242`
#### `Expiration date: 04 / 24`
#### `Security code: 242`
#### `Post Code: 42424`

Once the user entered the Credit-Card data and pressed the "Buy Now" button he will be redirected to the Orders page where the user can see all the orders he made.

From here if he wants to return to the home page all he needs to do is to press the amazon logo in the header.
