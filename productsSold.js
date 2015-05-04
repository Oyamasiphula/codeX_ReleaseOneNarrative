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


			console.log(productCountMap);
			return productCountMap;
		};

		var productList = [];
		var mostPopularMap = {};
	var createProductList = function(csvFile){

		// start
		var linesInFile = fs.readFileSync(csvFile, 'utf8');
		var	productsList = linesInFile.split('\r');

		//remove the csv header...
		productsList = productsList.splice(1, productsList.length)
		
		

		productsList.forEach(function(productLine){

				var hold = productLine.split(';');

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
			productList.push(obj);

		}
		// end
		return productList;
	}


	this.mostPopularItem = function(){

		var productList = createProductList(folderName);		

		productList.sort(function(a,b){
			return b.numberSold-a.numberSold;
		});

		console.log(productList)
		// console.log(productList.length);
		console.log(productList[0])
		return productList[0];
	};

	this.leastPopularItem = function(){

		var productList = createProductList(folderName);		

		productList.sort(function(a,b){
			return b.numberSold-a.numberSold;
		});

		//console.log(productList)
		console.log(productList[productList.length-1]);
		//console.log(productList[2])
		return productList[productList.length-1];
	};
this.popularCategory = function(){

	var productList = createProductList(folderName);
			var Diary = [];
			var DiaryMap = {};
			/*var BeveragesMap = {};
			var fruitMap = {}; 
			var Canned_FoodMap = {};
			var Starch_FoodMap = {};
			var ToiletriesMap = {};
			var BakeryMap = {};
			var SweetsMap = {}; 
 			var ExtrasMap= {};*/
for(var key in mostPopularMap){
			var obj = {
				Category : key,
				numberSold: DiaryMap[key]
			};
			//Diary.push(obj);

		}
		// end
	if (productList[1] === "Imasi" || "milk") {
		Diary.push(productList[0]);
	};
		Diary.push(productList[1],productList[0]);
		console.log(productList[1],productList[0]);
	}
};
