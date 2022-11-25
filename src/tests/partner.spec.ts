import request from "supertest"
import app from "../app"
import { correctToken, emptyPayloadToken, wrongSecretKeyToken } from "./mockedData"

describe("Testing authorization", () => {
    test("Should be able to retrieve an user", async () => {
        const response = await request(app)
        .get("/")
        .set('Authorization', `Bearer ${correctToken}`)
        
        expect(response.body.name).toBe('Henrique')
        expect(response.status).toBe(200)
    })

    test("Should not be able to retrieve user without token", async () => {
        const response = await request(app)
        .get("/")
        
        expect(response.body.message).toBe('Token not found')
        expect(response.status).toBe(401)
    })

    test("Should not be able to retrieve user with empty payload token", async () => {
        const response = await request(app)
        .get("/")
        .set('Authorization', `Bearer ${emptyPayloadToken}`)

        expect(response.body.message).toBe('Invalid token')
        expect(response.status).toBe(401)
    })

    test("Should not be able to retrieve user without broken token", async () => {
        const response = await request(app)
        .get("/")
        .set('Authorization', `Bearer ${wrongSecretKeyToken}`)

        expect(response.body.message).toBe('Invalid token')
        expect(response.status).toBe(401)
    })
})


