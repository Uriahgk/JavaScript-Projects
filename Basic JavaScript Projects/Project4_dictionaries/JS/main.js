function dictionary_Drinks() {
    var Drinks = {
        Brand:"Coca-Cola",
        Flavor:"Original",
        Size:"20oz",
        Container:"Bottle"
    };
    delete Drinks.Brand;
    document.getElementById("Dictionary").innerHTML = Drinks.Brand;
} // is a dictionary for Drinks. With Brand deleted and also trying to be displayed it will say undefined.