const request = require('supertest');
const app = require('../server'); // Pastikan ini merujuk pada file server.js di proyekmu
const { Folder } = require('../models/folder');

// Mocking model methods
jest.mock('../models/folder');

describe('GET /api/folders', () => {
  it('should return folders', (done) => {
    Folder.findAll.mockResolvedValue([{ id: 1, name: 'Test Folder' }]);

    request(app)
      .get('/api/folders')
      .then((response) => {
        expect(response.status).toBe(200);
        expect(response.body).toEqual([{ id: 1, name: 'Test Folder' }]);
        done(); // panggil done() untuk menandakan bahwa tes telah selesai
      })
      .catch((error) => done(error)); // tangani error
  });
});