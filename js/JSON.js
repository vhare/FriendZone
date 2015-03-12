function generateMatches() {
	var matchString = '{ "matches" : [' +
	'{ "firstName": "Brody", "lastName":"Hannen", "age":"22", "photo":"images/niceguy.jpeg", "profession":"Fitness Trainer at Club Sport", "likes":"Likes fly fishing, partying, and beaches","lookingFor":"Looking for something fairly serious with a cute girl", "stature":"Medium Height, Ripped"},' +
	'{ "firstName": "Jordan", "lastName":"Butler", "age":"23", "photo":"images/niceguy3.jpg", "profession":"High School English Teacher", "likes":"Likes reading, writing, fine food, tennis, and long walks", "lookingFor":"Looking for something monogomous but casual", "stature":"Fit and firm"},' +
	'{ "firstName": "Hansel", "lastName":"Johnson", "age":"21", "photo":"images/niceguy2.jpg", "profession":"Software Engineer", "likes":"Likes Hip Hop Dancing, Concerts, Cooking, and Coding", "lookingFor":"Looking for love (physical and emotional)", "stature":"Lean and lanky"},'+
	'{ "firstName": "Ansel", "lastName":"Adams", "age":"21", "photo":"images/guy2.jpg", "profession":"Photographer", "likes":"Likes Nature, Photography, and Yosemite", "lookingFor":"Looking for a woman", "stature":"tall, skinny and hipster"},' +
	'{ "firstName": "Antonio", "lastName":"Jimenez", "age":"24", "photo":"images/niceguy4.jpg", "profession":"Doctor in Training", "likes":"Likes Living Things, Samurai, and Asian Food", "lookingFor":"Looking for an accepting female partner", "stature":"Well-built"},' +
	'{ "firstName": "Liam", "lastName":"Neeson", "age":"35", "photo":"images/cakeface.jpg", "profession":"Actor", "likes":"Likes skiing, fighting, and kicking bad guy ass", "lookingFor":"Looking for a very serious relationship", "stature":"broad and majestic"} ]}';
	var matches = JSON.parse(matchString);
	return matches;
}

function generateFriends() {
	var friendString = '{ "friends" : [' +
	'{ "firstName": "Carly", "lastName":"Heckles", "age":"21", "photo":"images/niceGirl.jpeg", "profession":"CS Major at Stanfod", "likes":"Likes puzzle hunts, painting, and game of thrones","lookingFor":"Looking for something casual and monogomous", "stature":"Short and Slim"},'+
	'{ "firstName": "Eliza", "lastName":"Renner", "age":"26", "photo":"images/girl_withhorse.jpg", "profession":"Horse Trainer and Jewlery Maker", "likes":"Likes Gemstones, Palomino Horses, and Rainbows","lookingFor":"Looking for something very serious; even potentially looking to settle down", "stature":"tall and willowy"},'+
	'{ "firstName": "Preston", "lastName":"Perez", "age":"30", "photo":"images/friend3.jpg", "profession":"Data Scientist at Box", "likes":"Likes scary movies, filmography, and desserts","lookingFor":"Looking for something fairly serious with a cute girl", "stature":"Medium Height, Ripped"},'+
	'{ "firstName": "Rehan", "lastName":"Adams", "age":"24", "photo":"images/friend4.jpg", "profession":"Fitness Trainer at Club Sport", "likes":"Likes fly fishing, partying, and beaches","lookingFor":"Looking for something fairly serious with a cute girl", "stature":"Medium Height, Ripped"},'+
	'{ "firstName": "Pika", "lastName":"Chu", "age":"22", "photo":"images/pikaChu.jpg", "profession":"CS Major at Stanfod", "likes":"Likes puzzle hunts, painting, and game of thrones","lookingFor":"Looking for something casual and monogomous", "stature":"Short and Slim" },'+
	'{ "firstName": "Ellery", "lastName":"Feng", "age":"31", "photo":"images/girl1.jpg", "profession":"CS Major at Stanfod", "likes":"Likes puzzle hunts, painting, and game of thrones","lookingFor":"Looking for something casual and monogomous", "stature":"Short and Slim"} ]}';
	var friends = JSON.parse(friendString);
	return friends;
}

function matchHomeClick(elemID) {
	localStorage.currFriend = parseInt(elemID);
}

function inboxClick(elemID) {
	localStorage.currDate = parseInt(elemID);
}

function matchIncrement() {
	if(localStorage.currMatch == 5) {
		localStorage.currMatch = 0;
	} else {
		localStorage.currMatch++;
	}
}

function generateDates() {
	var dateString = '{ "dates" : [' +
	'{ "firstName": "Bobby", "friend":"1", "lastName":"Breaks", "age":"21", "photo":"images/niceguy.jpeg", "profession":"Professional Climber", "date":"Coffee", "location":"Palo Alto, CA", "time":"Friday, 2PM"},'+
	'{ "firstName": "Jeremy", "friend":"0", "lastName":"Renner", "age":"26", "photo":"images/date1.jpg", "profession":"Contemporary Dancer","date":"Hiking", "location":"San Francisco, CA", "time":"Saturday, 11AM"},'+
	'{ "firstName": "Miles", "friend":"2", "lastName":"Davis", "age":"30", "photo":"images/date2.jpg","profession":"Banker at JPMorgan", "date":"Lunch", "location":"Mountain View, CA", "time":"Friday, 12PM"},'+
	'{ "firstName": "Baron", "friend":"3", "lastName":"Rakes", "age":"24", "photo":"images/date3.jpg", "date":"Concert", "profession":"Freelance DJ", "location":"Golden Gate Park", "time":"Friday, 2PM"},'+
	'{ "firstName": "Severus", "friend":"1", "lastName":"Snape", "age":"22", "photo":"images/date4.jpg", "date":"Coffee", "profession":"Game Developer for SquareInt", "location":"Hollister, CA", "time":"Sunday, 11AM"},'+
	'{ "firstName": "Brian",  "friend":"4","lastName":"Cranston", "age":"31", "photo":"images/date5.jpg", "date":"Escape Room", "profession":"Data Scientist, Glassdoor", "location":"Pleasanton, CA", "time":"Friday, 8PM"} ]}';
	var dates = JSON.parse(dateString);
	return dates;
}

var match = generateMatches();
var friend = generateFriends();
var date = generateDates();