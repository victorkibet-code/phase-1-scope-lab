var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}
function overwriteBestCustomer(newBestCustomer) {
    bestCustomer = newBestCustomer;
}

const leastFavoriteCustomer = 'someone';

changeLeastFavoriteCustomer = function () {
    leastFavoriteCustomer = 'new least favorite'; 
};


