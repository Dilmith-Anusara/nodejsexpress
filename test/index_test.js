'use strict';
const config = require('../config');
const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const server = require('../app');

chai.use(chaiHttp);

describe('/GET', () => {
    it('returns the homepage', (done) => {
        chai.request(`http://localhost:${config.port}`)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.contain('Welcome to Contoso!');
                done();
            });
    });

    it('GET /health should return status OK', (done) => {
        chai.request(`http://localhost:${config.port}`)
            .get('/health')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.have.property('status').eql('OK');
                done();
            });
    });
});