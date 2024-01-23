# Welcome to Flight service

## Project Setup

- clone the project on your local
- Execute "npm install" on the same path as your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variable
     - `PORT=3001`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of code

```
{
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "flights_search_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


```
-- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute:

`npx sequelize db:migrate`


```

## DB Design

  -Airplane Table
  -Flight Table
  -Airport Table
  -City Table

  - A flight belongs to an airplane but one airplane can be used in multiple flights
  - A city can have many airports but a airport belongs to a particular city
  - One airport can have many flights but a flight belongs to one airport only.


  ##Tables

  ### City -> id, name,created_at, updated_at
  ### Airport -> id, name, address, city_id, created_at, updated_at
      Relationship : A City has many Airports but one airport belongs to a city.
      (one to many relationship)

  ```
  `npx sequelize model:generate --name Airport --attributes Name:String,Address:String,cityId:integer`
  
  ```
  ```
  `npx sequelize seed:generate --name add-airports`

  ```
  ```
   `npx sequelize db:seed:all`

  ```


