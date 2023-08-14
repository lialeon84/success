var PORT = 8080;
var express = require('express');
var cors = require('cors');
var axios = require('axios'); // Import the axios library
var app = express();
require('dotenv').config();

app.use(cors());

var username = process.env.USERNAME;
var password = process.env.PASSWORD;

app.get('/deals', async (req, res) => {
    try {
        var body = {
            'source': "amazon_search",
            'domain': 'com',
            'query': 'deals of the day',
            'pages': 5,
            'parse': true,
            
        };

        const response = await axios.post('https://realtime.oxylabs.io/v1/queries', body, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64')
            }
        });

        
       // console.log(response.data); // Use response.data to access the API response data

        var data = await response.data; // Use

        var results = data.results[0].content.results.organic

        
       var filterDeals = results.filter(deal => deal.price_strikethrough > 0);

        var sortByBestDeal = filterDeals.sort((b, a) => 
        
        (
            (a.price_strikethrough - a.price) / a.price_strikethrough * 100
        ) - 
        (
            (b.price_strikethrough - b.price) / b.price_strikethrough * 100
        )

        )


        res.json(sortByBestDeal); // Optionally, send the response back to the client
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'An error occurred while fetching data' }); // Handle errors
    }
});

app.listen();

// app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));

