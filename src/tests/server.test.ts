import * as mongoose from 'mongoose'
import * as supertest from 'supertest'
import createServer from '../server'

beforeEach(done => {
  // NOTE: Make sure mongoURL is using a database dedicated for test only
  const mongoURL = 'mongodb://localhost:27017/server-test-app'
  mongoose.connect(
    mongoURL,
    {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => done(),
  )
})

afterAll(done => {
  mongoose.connection.db.dropDatabase(() => {
    mongoose.connection.close(() => done())
  })
})

const app = createServer()

const quoteData = {
  author: 'Deejay Geroso',
  quote: 'I am a problem solver',
}

test('POST [Create Quote]: /api/quotes', async () => {
  await supertest(app)
    .post('/api/quotes')
    .send(quoteData)
    .set('Accept', 'application/json')
    .expect('Content-Type', /json/)
    .expect(200)
    .then(response => {
      // Check response body object
      expect(typeof response.body === 'object').toBeTruthy()
      expect(response.body.hasOwnProperty('_id')).toBeTruthy()
      expect(response.body.hasOwnProperty('author')).toBeTruthy()
      expect(response.body.hasOwnProperty('quote')).toBeTruthy()

      // Check response data
      expect(response.body.author).toBe(quoteData.author)
      expect(response.body.quote).toBe(quoteData.quote)
    })
})

test('GET [Get All Quotes]: /api/quotes', async () => {
  await supertest(app)
    .get('/api/quotes')
    .expect(200)
    .then(response => {
      // Check response body object
      expect(Array.isArray(response.body)).toBeTruthy()
      expect(response.body.length).toEqual(1)

      // Check the response data
      expect(response.body[0].author).toBe(quoteData.author)
      expect(response.body[0].quote).toBe(quoteData.quote)
    })
})
