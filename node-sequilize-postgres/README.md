# Steps to Run

1. Clone this repository

2. Run "npm install"

3. Create a ".env" file in the root directory and provide below required environment variables,

   1. PORT = 5000

   2. DEV_DB_USERNAME = "database user name"

   3. DEV_DB_PASSWORD = "database password"

   4. DEV_DB_NAME = "database name"

   5. DEV_HOST_NAME = "database host name"

   6. DEV_DB_PORT = database port

   7. JWT_SECRET = T%><BBJ^KC{\_t"2vEj@^^`ap-CGA$/{\TCA"Uz\RWeFkr3VYj^

4. Run [Migrations](https://sequelize.org/docs/v6/other-topics/migrations/)

   ```
   npx sequelize-cli db:migrate
   ```

5. Run [Seeds](https://sequelize.org/docs/v6/other-topics/migrations/#creating-the-first-seed)

   ```
   npx sequelize-cli db:seed:all
   ```

6. Below are the testing credentials to see if authentication apis are working fine,
   ```
   Endpoint: http://localhost:5000/user/login
   Method: Post
   Body Params:
   {
      "email": "umaishassan66u@gmail.com",
      "password": "1q2w3e"
   }
   ```
