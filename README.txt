**************************************************************
Source code provided by: Professor L.D. Nel
Code modified by: 
	Ravi Gupta (Github user: rgupta0747)
	Will Mahler (Github user: WillMahler)
**************************************************************

Version:
==================

OS: All code was tested on MacOS High Sierra Version 10.13.6 

Node.js: All code compiled using Node.js v8.11.4

NPM: v.5.6.0

express module: v^4.16.4
morgan 	module: v^1.9.1
request module: v^2.88.0
path 	module:	v^0.12.7

Launch:
==================
	
	1. Open a command window to the directory that the code was unzipped to
	2. Enter "npm install" to install all required modules
	3. Enter "node 02_express_static_server.js" to launch the server

Testing:
==================
	
	1. To access the webpage, open Chrome and enter in any of the following urls:
		http://localhost:3000/recipes.html
		http://localhost:3000/recipes
		http://localhost:3000/index.html
		http://localhost:3000/
		http://localhost:3000
	
	2. The default webpage for the client is the page that would display if 'cake' were searched as an ingredient
	
	3. Enter an ingredient into the text field and click the Get Recipes button to obtain the recipes with that ingredient listed
	
	4. To check recipes with multiple ingredients, enter the ingredients in the text fields with commas separating them. For example, to search for basil and thyme, enter: basil, thyme

	5. Ingredients can also be searched for via directly entering them into the URL in the format below, where multiple ingredients are separated by a comma:
		http://localhost:3000/recipes?ingredient=Basil,Cumin
	
	5. Click on a recipe's image to open up the recipe on the Food2Fork page
	


