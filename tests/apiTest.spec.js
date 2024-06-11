const { test, expect } = require('@playwright/test');
var userId;

test.describe("Api testing", async () => {  

test('Get user', async ({ request }) => {

    const response = await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json())
    expect(response.status()).toBe(200)



})

test('Create user', async ({ request }) => {

    const response = await request.post('https://reqres.in/api/users',
        {
            data: {
                "name": "Shazzad",
                "job": "leader"
            },
            headers:{
                "Accept": "application/json"
            }
        }
    )

    console.log(await response.json())
    expect(response.status()).toBe(201)

    var res = await response.json()
    userId = res.id

})

test('Update user', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/'+userId,
        {
            data: {
                "name": "Shazzad",
                "job": "SQA"
            },
            headers:{
                "Accept": "application/json"
            }
        }
    )

    console.log(await response.json())
    expect(response.status()).toBe(200)

})

test('Delete user', async ({ request }) => {
const response = await request.delete('https://reqres.in/api/users/'+userId)
expect(response.status()).toBe(204)

})

})