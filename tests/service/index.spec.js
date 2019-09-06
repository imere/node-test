const supertest = require('supertest');

const app = require('../../service/index');

let server;

const request = () => supertest(server = app.listen(3000));

describe('koa service', function () {
  this.afterAll(done => {
    server.close(done);
  })

  it('api success', function (done) {
    request()
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err);
        if (res.body.data === 'x') {
          done()
        } else {
          done(new Error('unconformant'))
        }
      })
  })
})
