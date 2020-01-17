const expect = require('chai').expect;
const request = require('request');

describe('Color Code Converter API', function(){
    describe('RGB to Hex Conversion', function(){
        const url = 'http://localhost:3000/rgbToHex?red=255&green=255&blue=255';
        it('returns status 200', function(){
            request(url, function(error, response, body){
                expect(response.statusCode).to.equal(200);
                // done();
            });
        });
        it('returns the color in hex', function(){
            request(url, function(error, response, body){
                expect(body).to.equal('ffffff');
                // done();
            });
        });
    });
    describe('Hex to RGB conversion', function(){
        const url = 'http://localhost:3000/hextoRGB?hex=00ff00';
        it('return status 200', function(){
            request(url, function(error, response, body){
                expect(response.statusCode).to.equal(200);
                // done();
            });
        });
        it('return the color in RGB', function(){
            request(url, function(error, response, body){
                expect(body).to.equal('[0,255,0]');
                // done();
            });
        });
    });
});