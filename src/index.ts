import "./moduleResolver"
// import express, { Application, Request, Response, NextFunction } from "express"
import createServer from "@src/server"

const startServer = () => {
  const app = createServer()
  const port: number = parseInt(<string>process.env.PORT, 10) || 3000

  app.listen(port, () => {
    console.log("Server running on port %d", port)
  })
}

startServer()
