const Koa = require('koa')

const app = require('../server/app')

describe('App', () => {
  it('should have correct instance', () => {
    expect(app).toBeInstanceOf(Koa)
  })
})
