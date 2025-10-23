const request = require('supertest');
const app = require('./app'); 

describe('GET /', () => {
  it('responds with Hola mundo desde node.Js este es un app para el examen de DevOps!', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hola mundo desde node.Js este es un app para el examen de DevOps!');
  });
});

describe('GET /data', () => {
  it('responds with the data from data.json', async () => {
    const response = await request(app).get('/data');
    const data = response.body;  
    expect(response.status).toBe(200);
    expect(data.name).toBe('Examen Proyecto');
    expect(data.description).toBe('Aplicación de ejemplo para pruebas.');
  });
});


