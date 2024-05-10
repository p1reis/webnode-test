# Project Webnode test.

## 🎯 **Project Description:**

The project consists of a test for the Application Developer position at Webnode.cz.

## 🐛 **Feature:**

To test the result and receive order information, it's necessary to make a GET request to the application address, passing the order number as a parameter

> **Note:** In the developed seed, the orders range from 1001 to 1007..

Make the request using:

```shell
  https://localhost:4000/order/{order number}
```

## ✔️ Technologies used

- ``Nest.js``
- ``Prisma``
- ``PostgreSQL``
- ``Docker``

## 🐛 **How to Run the Application:**

This application was built to run in a Docker container, along with the database. To start it, it's necessary to set up both containers (one for the application and another for the database). The environment variables are configured in the .env file as a suggestion and can be changed according to the needs.

Follow the steps below:

1. Clone the repository and navigate to the backend folder:

```bash
# clone using the web URL.
$ git clone https://github.com/p1reis/webnode-test.git && cd webnode-test

# Use a password-protected SSH key.
$ git clone git@github.com:p1reis/webnode-test.git && cd webnode-test

```

2. Configure the containers:

For local development with application reload, you can use the docker-compose.db.yml file to create a container to run the application and another container with the database. Run the following command:

```bash
$ npm run docker-up
```

The command will bring up the app-server container for the application and the database container for the database. All necessary dependencies will already be installed in the containers, so you don't need to worry about that.

After that, simply start the application. To execute, use:

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

> **Note:** The application will be available at localhost:4000.

3. This project was built using Prisma for database manipulation. To interact with Prisma, use the following commands

    3.1. To **execute migrations** in the database with the definitions contained in `schema.prisma`,

    ```bash
    $  npx prisma migrate dev
    ```

    3.2. Generate the **Prisma client instance** (typescript code) (along with the entities defined in `schema.prisma`):

    ```bash
    $  npx prisma generate # SELECIONE a OPÇÃO 3 (gerar cliente Prisma)
    ```

    3.3. Populate the database with the seed prepared in `seed.ts`:

    ```bash
    $  npx prisma db seed
    ```

    3.4.  If you wish to **view and interact with the database tables** intuitively through the web interface, execute the option below to start Prisma Studio.

    ```bash
    $  npx prisma studio
    ```

    3.5.  If you wish to reset the database by applying all migrations and the seed, execute:

    ```bash
    $  npx prisma migrate reset
    ```

4.  Run the application in dev mode:

    ```bash
    $  npm i && npm start:dev
    ```

**Note:** The application will be available at `localhost:4000`.

## 🐙 **Automated tests with Jest:**

This repository includes simple automated tests to ensure the functionality of 'Search Orders'. The tests are written using the Jest testing library.

To start the tests, run:

```bash
$ npm run test
```

This project does not include end-to-end tests.