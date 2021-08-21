// event listener for memory 
document.getElementById('8GB').addEventListener('click', function () {
    document.getElementById('memory').innerText = 0;
    calculate_total_price();
});
document.getElementById('16GB').addEventListener('click', function () {
    document.getElementById('memory').innerText = 180;
    calculate_total_price();
});

// event listener for storage
document.getElementById('256GB').addEventListener('click', function () {
    document.getElementById('storage').innerText = 0;
    calculate_total_price();
});
document.getElementById('512GB').addEventListener('click', function () {
    document.getElementById('storage').innerText = 100;
    calculate_total_price();
});
document.getElementById('1TB').addEventListener('click', function () {
    document.getElementById('storage').innerText = 180;
    calculate_total_price();
});

// event listener for delivery
document.getElementById('Prime_Delivery').addEventListener('click', function () {
    document.getElementById('delivery').innerText = 0;
    calculate_total_price();
});
document.getElementById('Charged_Delivery').addEventListener('click', function () {
    document.getElementById('delivery').innerText = 20;
    calculate_total_price();
});

// event listener for promo code
document.getElementById('promo_button').addEventListener('click', function () {
    apply_promo();
});


// price calculation after every choice selected
function calculate_total_price() {

    let storage_price = parseInt(document.getElementById('memory').innerText);
    let memory_price = parseInt(document.getElementById('storage').innerText);
    let delivery_price = parseInt(document.getElementById('delivery').innerText);

    let total_price = 1299 + storage_price + memory_price + delivery_price;

    document.getElementById('total').innerText = total_price;
    document.getElementById('final_total').innerText = total_price;
}

// function for adding promo code
function apply_promo() {
    if (document.getElementById('promo_code').value == 'stevekaku') {
        let price_after_Discount = parseInt(document.getElementById('total').innerText);
        price_after_Discount = price_after_Discount * 80 / 100;
        document.getElementById('final_total').innerText = price_after_Discount;
    }
    document.getElementById('promo_code').value = '';
}