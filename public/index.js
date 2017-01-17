'use strict';

//list of cars
//useful for ALL exercises
var cars = [{
  'id': 'p306',
  'vehicule': 'peugeot 306',
  'pricePerDay': 20,
  'pricePerKm': 0.10
}, {
  'id': 'rr-sport',
  'pricePerDay': 60,
  'pricePerKm': 0.30
}, {
  'id': 'p-boxster',
  'pricePerDay': 100,
  'pricePerKm': 0.45
}];

//list of rentals
//useful for ALL exercises
//The `price` is updated from exercice 1
//The `commission` is updated from exercice 3
//The `options` is useful from exercice 4
var rentals = [{
  'id': '1-pb-92',
  'driver': {
    'firstName': 'Paul',
    'lastName': 'Bismuth'
  },
  'carId': 'p306',
  'pickupDate': '2016-01-02',
  'returnDate': '2016-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '2-rs-92',
  'driver': {
    'firstName': 'Rebecca',
    'lastName': 'Solanas'
  },
  'carId': 'rr-sport',
  'pickupDate': '2016-01-05',
  'returnDate': '2016-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}, {
  'id': '3-sa-92',
  'driver': {
    'firstName': ' Sami',
    'lastName': 'Ameziane'
  },
  'carId': 'p-boxster',
  'pickupDate': '2015-12-01',
  'returnDate': '2015-12-15',
  'distance': 1000,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'assistance': 0,
    'drivy': 0
  }
}];

//list of actors for payment
//useful from exercise 5
var actors = [{
  'rentalId': '1-pb-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '2-rs-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '3-sa-92',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'owner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'assistance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'drivy',
    'type': 'credit',
    'amount': 0
  }]
}];

//list of rental modifcation
//useful for exercise 6
var rentalModifications = [{
  'rentalId': '1-pb-92',
  'returnDate': '2016-01-04',
  'distance': 150
}, {
  'rentalId': '3-sa-92',
  'pickupDate': '2015-12-05'
}];

console.log(cars);
console.log(rentals);
console.log(actors);
console.log(rentalModifications);



//fonction to convert the date
function convertDate(str)
{
	var re=/[0-9]+/g;
	var result = re[Symbol.match](str);
	var dateLoc=new Date(result[0],result[1],result[2]);
	return dateLoc;
}
//computing of the final price
function getFinalPrice() {
  var timeDiff;
  var diffDays;
  var distance=[];
  for(var i = 0; i < rentals.length; i++) {
	//keep in data the distance
	distance[i]=rentals[i].distance;
	//compute the number of days
  	timeDiff = Math.abs(convertDate(rentals[i].returnDate).getTime() - convertDate(rentals[i].pickupDate).getTime());
    diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
	//compute the price
    rentals[i].price = diffDays * cars[i].pricePerDay + rentals[i].distance * cars[i].pricePerKm;
	console.log(rentals[i].price);
    }
}

//EXERCICE 2

rentalPriceDecreasing(){
	var time;
	var distance;
	var rentalPrice;
	for(var i = 0; i<rentals.length;i++)
	{
		var daysDiff = getDays(rentals[i].pickupDate,rentals[i].returnDate);	
		console.log(daysDiff);

		for(var j = 0; j<cars.length;j++)
		{			
			if (rentals[i].carId==cars[j].id)
			{						
				time = daysDiff * cars[i].pricePerDay;
				distance = cars[i].pricePerKm * rentals[i].distance;
				if(daysDiff>10)
				{
					rentalPrice = time*0.5 + distance;
					console.log(time);
					console.log(distance);
					rentals[i].price=rentalPrice;
					console.log(rentalPrice);

				}
				else if(daysDiff>4)
				{
					rentalPrice = time*0.7 + distance;
					rentals[i].price=rentalPrice;
					console.log(rentalPrice);

				}
				else if(daysDiff>1)
				{
					rentalPrice = time*0.9 + distance;
					rentals[i].price=rentalPrice;
					console.log(rentalPrice);
				}
				else
				{
					rentalPrice = time + distance;
					rentals[i].price=rentalPrice;
					console.log(rentalPrice);
				}

			}
		}
	}
}

//EXERCICE 3

function commission()
{
	var com;
	var timeDiff;
	var diffDays;
	for(var i=0;rentals.length;i++)
	{
		com = rentals[i].price*0.3;
		rentals[i].insurance=com/2; //insurance
		
		//assistance
		timeDiff = Math.abs(convertDate(rentals[i].returnDate).getTime() - convertDate(rentals[i].pickupDate).getTime());
		diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
		rentals[i].assistance=diffDays*1;
		
		//drivy
		rentals[i].drivy= com - rentals[i].insurance ;
		
	
	}
}

// EXERCICE 4


function OptionRental(i)
{
	var OptionPrice = 0;
	var numberDays = getDays(rentals[i].pickupDate,rentals[i].returnDate);
	OptionPrice = priceDecreasePerRental(i) + 4 *numberDays;
	return OptionPrice;
}


function WithOption(rentals)
{
	
	for(var i = 0; i<rentals.length;i++) 
	{
		rentals[i].price = priceDecreasePerRental(i); 
		if(rentals[i].options.deductibleReduction)
		{
			rentals[i].price = OptionRental(i); 
		}
	}
	return rentals;
}

//Exercice 5 
function ActorRentals()
{

	for(var i = 0; i<actors.length;i++)
	{
		for(var j = 0; j<rentals.length;j++)
		{
			if(actors[i].rentalId == rentals[j].id)
			{
					actors[i].payment[0].amount = priceWithOptionsPerRental(j);  //driver's amount
					actors[i].payment[1].amount = priceWithOptionsPerRental(j) - commission(rentals) ;//owner's amount
					actors[i].payment[2].amount = commissionAssistance(j); //assistance's amount
					actors[i].payment[3].amount = commissionInsurance(j); //insurance's amount
				    actors[i].payment[4].amount = commissionDrivy(j) - priceDecreasePerRental(j); + OptionRental(j)  // ForDrivy
			}
		}
	}

 
}







