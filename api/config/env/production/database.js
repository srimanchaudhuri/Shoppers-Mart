module.exports = ({ env }) => ({
    connection: {
      client: 'mysql', // Specify the database client as MySQL
  
      connection: {
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3306), // Use the default MySQL port
        database: env('DATABASE_NAME', 'strapidb'),
        user: env('DATABASE_USERNAME', 'root'), // Use the appropriate MySQL username
        password: env('DATABASE_PASSWORD', ''),
        ssl: env.bool('DATABASE_SSL', false) && {
          rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
        },
      },
  
      debug: false,
    },
  });
  