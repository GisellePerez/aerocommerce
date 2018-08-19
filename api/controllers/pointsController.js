const self = {};
const axios = require ('axios');

const BASE_URL = "https://aerolab-challenge.now.sh"
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yjc3NGEwMWFkMGE5MzAwNWI3YzRjNDEiLCJpYXQiOjE1MzQ1NDQzODV9.Vp5XnQ37oxa-vXuORjSbFqEsQVwu7Mpk_31ONoxX8pA';

const DEFAULT_OPTIONS = {
    crossDomain: true,
    responseType: "json",
    headers: {
        Authorization: `Bearer ${TOKEN}`,
        "Content-Type": "application/json"
    }
}

self.getMorePoints = function(req,res,next) {
    console.log('points')
}

module.exports = self; 