//once we get the data lets see if we can get the data onto the screen mvc= model view data)



var houseUrl = "https://congress.api.sunlightfoundation.com/bills?apikey=149a2a8730aa4936bab76017c47d8dab&chamber=house"

var promise = $.getJSON(houseUrl)
var houseColNode = document.querySelector('.houseCol')
var senateColNode = document.querySelector('.senateCol')
var inputNode = document.querySelector('input')


var displayHouseInfo = function(apiResponse) {
	console.log(apiResponse.results)//leaving to pick through the content
	var billsArray = apiResponse.results
	for(var i =0; i<billsArray.length; i++) {
		console.log(billsArray[i])
		var htmlString = ''
		var billDetails = billsArray[i]
		htmlString = htmlString + billDetails.short_title //you could also shorthand this by using htmlString+= billDetails.short_title
        

	}


}



promise.then(displayHouseInfo)

console.log("hi people")