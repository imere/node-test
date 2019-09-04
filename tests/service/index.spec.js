const supertest = require('supertest')

const app = require('../../service/index.js')

const request = () => supertest(app.listen(3000))

describe('koa service', function () {
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
