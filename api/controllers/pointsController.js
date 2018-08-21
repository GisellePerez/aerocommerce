const self = {};
const axios = require ('axios');

const BASE_URL = "https://aerolab-challenge.now.sh"
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yjc3NGEwMWFkMGE5MzAwNWI3YzRjNDEiLCJpYXQiOjE1MzQ1NDQzODV9.Vp5XnQ37oxa-vXuORjSbFqEsQVwu7Mpk_31ONoxX8pA';


self.getMorePoints = function(req,res,next) {
    
    fetch(`${BASE_URL}/user/points`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify({ 'amount': 1000 })
    })
    
}

module.exports = self;
