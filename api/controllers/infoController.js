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

self.info = function(req,res,next) {
    Promise.all([
    axios.get(`${BASE_URL}/user/me`, { headers: {"Authorization" : `Bearer ${TOKEN}`} }),
    axios.get(`${BASE_URL}/products`, { headers: {"Authorization" : `Bearer ${TOKEN}`} })
  ]).then(([userInfo, productsInfo]) => {
        console.log('USER: ',userInfo.data)
        console.log('PRODUCTS: ', productsInfo.data)
        res.json({
            totalInfo: {
                userInfo: userInfo.data,
                productsInfo: productsInfo.data,
            }
        })     
    })
    .catch(err => console.log('THIS IS ERROR: ', err))
}

module.exports = self;  