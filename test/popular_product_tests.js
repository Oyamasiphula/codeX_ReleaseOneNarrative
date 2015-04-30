var assert = require("assert");

describe("Find data in file", function(){

    it('should return all products as they are in the csv file', function(done){
        var Products = require("../productsSold");
        var products = new Products('./Nelisa Sales History.csv');
        products.productNames(function(err, product){
        assert.equal(449, product.length);
        //assert.equal("Imasi", product[2].itemName);
        done();
        });
         
    });

    it('should return grouped items', function(){
        var Products = require("../productsSold");
        var products = new Products('./Nelisa Sales History.csv');
        var groupedProducts = products.groupedItems();
        console.log(groupedProducts);
        assert.equal(125, groupedProducts["Imasi"]);
       
    });
    
it('should return most popular items', function(){
        var Products = require("../productsSold");
        var products = new Products('./Nelisa Sales History.csv');
        var popularProduct = products.mostPopular();
        assert.equal(172, popularProduct["Mixed Sweets 5s"]);

    });

});