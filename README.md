For this App I was trying to create something that could have a professional use. Wanted to get away from the traditional API projects and create something that could be used on a daily basis by a company. So I thought of how road assistance companies don't send you their own vehicles, instead they have a data base with contractors that work with them, and they just mediate between the customer and the service provider. I kept it within my area (Gold Coast, QLD, Australia), so I did not have to deal with such a large DB.

So, first I needed a database with Towing service companies, and basic info like their location and phone number. At that moment I was also learning some Python libraries like selenium and beautiful soup, so I created a scrapper to go through a PUBLIC directory.

The directory was in XML, so I had to learn how to work with namespaces. And then I parsed everything into a Json file that I uploaded through console to MongoDB.

Once I had my DB of service providers uploaded I started my app. I worked on my client to get nav-geolocation. I also COPY an array of the towers DB to manipulate.

Once it has the customer's location, the next step is to use Google directions services to compare the distance between the customer and all the towers in my DB. This will create a new key:value for each tower--> distance-from-customer. So then I Sort my array from closer to farthest. It will be displayed in a Google Map as a driving route. 

The user can navigate the array, and the map will display the route each time. 

On the side I created an information panel component to Provide the basic details of each tower as we go through them in the sorted array.

The design was made with CSS and SASS, and for the google maps I used react-google-maps.
