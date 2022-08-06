// ! TEST EXAMPLE ! //
import "../src/moduleResolver"
// import { expect } from "chai"
import request from "supertest"

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import createServer from "@src/server"
const app = createServer()

describe("> Server", () => {
  it("server is created without errors", (done) => {
    request(app).get("/").expect(200, done)
  })

  it("\"/\" responds with 'Hello World!'", (done) => {
    request(app).get("/").expect("Hello World!", done)

    //? SAME
    // request(app).get("/").then((res) => {
    //   expect(res.text).equal("Hello World!")
    //   done()
    // }).catch(e => {
    //   done(e)
    // })
  })
})
