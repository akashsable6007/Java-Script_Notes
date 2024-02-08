// callback function is a function that we call inside the another fnction 
// we give the control of that function to theier parent function 

let cart = ['shoes', 'paints', 'shirts']

 api.createOrder( cart, function () {
    api.processPayment (cart)
})

