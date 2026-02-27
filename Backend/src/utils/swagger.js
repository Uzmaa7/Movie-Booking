import swaggerJsdoc from 'swagger-jsdoc';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Movie Booking API Documentation',
            version: '1.0.0',
            description: 'Professional API for Movie Management',
        },
        servers: [{ url: 'http://localhost:4000/api/v1' }],
        components: {
            schemas: {
                Movie: {
                    type: 'object',
                    required: ['name', 'description', 'casts', 'trailorUrl', 'language', 'releaseDate', 'director'],
                    properties: {
                        name: { type: 'string', example: 'Inception' },
                        description: { type: 'string', example: 'A thief who steals corporate secrets...' },
                        casts: { type: 'array', items: { type: 'string' }, example: ['Leonardo DiCaprio'] },
                        trailorUrl: { type: 'string', example: 'https://youtube.com/trailor' },
                        language: { type: 'string', example: 'English' },
                        releaseDate: { type: 'string', example: '2010-07-16' },
                        director: { type: 'string', example: 'Christopher Nolan' },
                        releaseStatus: { type: 'string', enum: ['Released', 'Coming Soon'], default: 'Released' }
                    }
                }
            }
        }
    },
    apis: ['./src/routes/*.js', './src/controllers/*.js'], // Controllers ko bhi add karo
};

export const specs = swaggerJsdoc(options);