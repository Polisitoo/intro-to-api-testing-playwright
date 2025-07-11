import { expect, test } from '@playwright/test'

import { StatusCodes } from 'http-status-codes'

test('get order with correct id should receive code 200', async ({ request }) => {
  // Build and send a GET request to the server
  const response = await request.get('https://backend.tallinn-learning.ee/test-orders/1')
  // Log the response status, body and headers
  console.log('response body:', await response.json())
  console.log('response headers:', response.headers())
  // Check if the response status is 200
  expect(response.status()).toBe(200)
})

test('post order with correct data should receive code 201', async ({ request }) => {
  // prepare request body
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 0,
  }
  // Send a POST request to the server
  const response = await request.post('https://backend.tallinn-learning.ee/test-orders', {
    data: requestBody,
  })
  // Log the response status and body
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.OK)
})

test('get order with orderID 0 should receive code 400', async ({ request }) => {
  // Build and send a GET request to the server
  const response = await request.get('https://backend.tallinn-learning.ee/test-orders/0')
  // Log the response status, body and headers
  console.log('response body:', await response.json())
  console.log('response headers:', response.headers())
  // Check if the response status is 200
  expect(response.status()).toBe(400)
})

test('get order with orderID 11 should receive code 400', async ({ request }) => {
  // Build and send a GET request to the server
  const response = await request.get('https://backend.tallinn-learning.ee/test-orders/11')
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})
test('get order with orderID- null should receive code 500', async ({ request }) => {
  // Build and send a GET request to the server
  const response = await request.get('https://backend.tallinn-learning.ee/test-orders/')
  expect(response.status()).toBe(StatusCodes.INTERNAL_SERVER_ERROR)
})

test('get order with orderID-test should receive code 404', async ({ request }) => {
  // Build and send a GET request to the server
  const response = await request.get('https://backend.tallinn-learning.ee/test-orders/test')
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

test('post order with incorrect data should receive code 415', async ({ request }) => {
  // prepare request body

  // Send a POST request to the server
  const response = await request.post('https://backend.tallinn-learning.ee/test-orders', {
    data: 'test',
  })
  // Log the response status and body
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.UNSUPPORTED_MEDIA_TYPE)
})

//HW 9

//PUT (200)
test('Успешное изменение заказа по корректному ID - 1 (200)', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 0,
  }
  const requestHeaders: { api_key: string } = { 'api_key': '1234567890123456' };
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/1', {
    data: requestBody,
    headers: requestHeaders
  })
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.OK)
})

test('Успешное изменение заказа по корректному ID - 5 (200)', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 0,
  }
  const requestHeaders: { api_key: string } = { 'api_key': '1234567890123456' };
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/5', {
    data: requestBody,
    headers: requestHeaders
  })
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.OK)
})

test('Успешное изменение заказа по корректному ID - 10 (200) ', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 0,
  }
  const requestHeaders: { api_key: string } = { 'api_key': '1234567890123456' };
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/10', {
    data: requestBody,
    headers: requestHeaders
  })
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.OK)
})

//PUT (400)
test('Не успешное изменение заказа с некорректным ID-0 (400) ', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 0,
  }
  const requestHeaders: { api_key: string } = { 'api_key': '1234567890123456' };
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/0', {
    data: requestBody,
    headers: requestHeaders
  })
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

test('Не успешное изменение заказа с некорректным ID-11 (400) ', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 0,
  }
  const requestHeaders: { api_key: string } = { 'api_key': '1234567890123456' };
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/11', {
    data: requestBody,
    headers: requestHeaders
  })
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

test('Не успешное изменение заказа без ID (405)', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 0,
  }
  const requestHeaders: { api_key: string } = { 'api_key': '1234567890123456' };
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/', {
    data: requestBody,
    headers: requestHeaders
  })
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.METHOD_NOT_ALLOWED)
})

test('Не успешное изменении заказа с ID в некорректном формате (400) ', async ({ request }) => {
  const requestBody = {
    status: 'OPEN',
    courierId: 0,
    customerName: 'string',
    customerPhone: 'string',
    comment: 'string',
    id: 0,
  }
  const requestHeaders: { api_key: string } = { 'api_key': '1234567890123456' };
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/pppp', {
    data: requestBody,
    headers: requestHeaders
  })
  console.log('response status:', response.status())
  console.log('response body:', await response.json())
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

//GET (200)
test('Успешная аутентификация с корректными логином и паролем (200)',async ({ request }) => {
  const response = await request.get('https://backend.tallinn-learning.ee/test-orders?username=polina&password=abc')
  console.log('response body:', await response.json())
  console.log('response header:', response.headers())
  expect(response.status()).toBe(StatusCodes.OK)
})

//GET (500)
test('Не успешная аутентификация без логина и пароля (500)',async ({ request }) => {
  const response = await request.get('https://backend.tallinn-learning.ee/test-orders?username=&password=')
  console.log('response body:', await response.json())
  console.log('response header:', response.headers())
  expect(response.status()).toBe(StatusCodes.INTERNAL_SERVER_ERROR)
})

//DELETE (204)
test('Успешное удаление заказа по корректному ID-1 (204)', async ({ request }) => {
  const requestHeaders: { api_key: string } = { api_key: '1234567890123456' }
  const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/1', {
    headers: requestHeaders,
  })
  expect(response.status()).toBe(StatusCodes.NO_CONTENT)
})

test('Успешное удаление заказа по корректному ID-5 (204)', async ({ request }) => {
  const requestHeaders: { api_key: string } = { api_key: '1234567890123456' }
  const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/5', {
    headers: requestHeaders,
  })
  expect(response.status()).toBe(StatusCodes.NO_CONTENT)
})

test('Успешное удаление заказа по корректному ID-10 (204)', async ({ request }) => {
  const requestHeaders: { api_key: string } = { api_key: '1234567890123456' }
  const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/10', {
    headers: requestHeaders,
  })
  expect(response.status()).toBe(StatusCodes.NO_CONTENT)
})

//DELETE (400)
test('Не успешное удалении заказа с некорректным ID-0 (400)', async ({ request }) => {
  const requestHeaders: { api_key: string } = { 'api_key': '1234567890123456' };
  const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/0', {
    headers: requestHeaders,
  })
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

test('Не успешное удалении заказа с некорректным ID-11 (400)', async ({ request }) => {
  const requestHeaders: { api_key: string } = { 'api_key': '1234567890123456' };
  const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/11', {
    headers: requestHeaders,
  })
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

test('Не успешное удаление заказа без указания ID (405)', async ({ request }) => {
  const requestHeaders: { api_key: string } = { 'api_key': '1234567890123456' };
  const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/', {
    headers: requestHeaders,
  })
  expect(response.status()).toBe(StatusCodes.METHOD_NOT_ALLOWED)
})