# weatherApp
App that fetches the weather data for given position

## Getting Started

### Installing
Just clone this folder by 


```
git clone https://github.com/GiovanniFerrara/weatherApp.git
```

and run "npm" install to install the dependencies


## Usage

First register at "https://darksky.net/dev" and get your API key. Then add it as a environmental variable to the app with name of weatherApiKey, by typing in the command line:
```
export weatherApiKey = <your weather key>
```
Register and get your API key for google localization services. Then add it as a environmental variable as well by typing in the command line:
```
export localizationApiKey = <your google key>
```
Now you can use the app by command line just typing: node app.js <your city or adress> <when you wanna know>

Where:
```
<when you wanna know>  ==> 0 (today), 1 (tomorrow), 2 (after tomorrow) ...

<your city>  ==> 90100 (Postal code), Palermo, Street Ballarò 99
```

For example, if I want to fecth the weather in Castelvetrano of today:
```
node app.js Castelvetrano 0

//OR JUST

node app.js Castelvetrano 0

```
Or the weather in Katowice of tomorrow:
```
node app.js Katowice 1
```

 Built With

* [Node]( https://nodejs.org/it/) JavaScript runtime
* [Request](https://www.npmjs.com/package/yargs) - NPM Dependency 

## Version 1

## Author

* **Giovanni Ferrara* - [Linkedin Profile](https://www.linkedin.com/in/giovanni-marco-ferrara-6aa458137/)

## License
MIT

