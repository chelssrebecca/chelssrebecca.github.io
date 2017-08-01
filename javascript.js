var skill = [
	'Build a website from scratch using HTML code',
	'Practice meditation',
	'Improve your charisma',
	'Implement a fitness routine',
	'Practice cooking with new recipes',
	'Write a short story',
	'Talk to a stranger every day',
	'Invest in stocks using Robinhood', 
	'Improve your reading speed with Spreeder',
	'Learn a new language', 
	'Start a garden of vegetables',
	'Start a garden of spices',
	'Read a new book', 
	'Learn to play an instrument',
	'Write a song',
	'Start a blog',
	'Start a podcast',
	'Start a YouTube channel',
	'Practice drawing',
	'Master PhotoShop',
	'Master Excel', 
	'Knit a scarf',
	'Practice yoga',
	'Learn bartending techniques and recipes',
	'Learn to juggle',
	'Learn to salsa dance',
	'Learn poker', 
]

function newSkill() {
	var randomNumber = Math.floor(Math.random() * (skill.length));
	document.getElementById('skillDisplay').innerHTML = skill[randomNumber];
}