	var fs = require('fs');

	module.exports = function(folderName){
		this.productNames = function(callback) {
			var linesInFile = fs.readFileSync(folderName, "utf8"); 
			var lines = linesInFile.split('\r');
			var productList =[];

			lines.forEach(function(fileLines){

				var product = fileLines.split(';');
				
				var currentItem = product[2];
				var productTotal = product[3];

				var productMap = {
					itemName : currentItem,
					soldItems : Number(productTotal)
				};
				productList.push(productMap);
			  });

			callback(null, productList);
		};

		this.groupedItems = function(){
			var linesInFile = 	fs.readFileSync(folderName, "utf8");
			var productLines = linesInFile.split('\r');
			var productCountMap = {};
			productLines.forEach(function(productLine){

				var splitLines = productLine.split(';');

				var currentItem = splitLines[2];
				var numberSold =  splitLines[3];

				if(productCountMap[currentItem] === undefined)
	            {
	                    productCountMap[currentItem] = 0;
	            }
	                productCountMap[currentItem] += Number(numberSold);
			});



			return productCountMap;
		};

	
	this.mostPopular = function(){
		var linesInFile = fs.readFileSync(folderName, 'utf8');
		var	productsList = linesInFile.split('\r');

		//remove the csv header...
		productsList = productsList.splice(1, productsList.length)
		
		var mostPopularList = [];
		var mostPopularMap = {};

	productsList.forEach(function(productList){

				var hold = productList.split(';');

				var currentItem = hold[2];
				var numberSold =  hold[3];

				if(mostPopularMap[currentItem] === undefined){
					mostPopularMap[currentItem] = 0;
				}	
					mostPopularMap[currentItem] += Number(numberSold);
				});
		//return mostPopularMap;
		for(var key in mostPopularMap){
			var obj = {
				currentItem : key,
				numberSold: mostPopularMap[key]
			};
			mostPopularList.push(obj);

		}

		mostPopularList.sort(function(a,b){
				return b.numberSold-a.numberSold;
			});
		
		console.log(mostPopularList)
		console.log(mostPopularList.length);

};

	


	};