const assert = require('assert')
const request = require('supertest');
const app = require('../app.js')
const chai = require('chai')
const sinon = require('sinon')
const Calculator = require('../calculator.js');
const { render } = require('ejs');

describe('GET /', ()=> {
    it('respond by rendering a homepage',  (done)=> {
        request(app)
            .get('/')
            render('index.ejs')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });
});


describe('POST /result', function () {
   
    it('respond with 201 created', function (done) {
        request(app)
            .post('/result')
            
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end((err) => {
                if (err) return done(err);
                done();
            });
    });
});

describe('Calculator',()=>{
    describe('.add',()=>{
        it('returns sum of two inputs',()=>{
            const expected = 5
            const x =2
            const y =3
            const result = new Calculator(x,y)
            assert.equal(result.add,expected)
        })
    })
})

describe('.product',()=>{
    it('returns product of two inputs',()=>{
        const expected = 6
        const x =2
        const y =3
        const result = new Calculator(x,y)
        assert.equal(result.product,expected)
    })
})