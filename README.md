# Quotes App Server
A simple server for saving author quotes.  

---

## Installation

`NOTE:` You need to have a `MongoDB running` to be able to run the application.  
If you want to run Docker, then I suggest using:  

- `Docker version 20.10.7`
- `docker-compose version 1.29.2`

since these are what I'm using to run the application.

#### Step 1. Clone the application

```
git@github.com:deejaygeroso/quotes-app-server.git
```

#### Step 2 (Optional). Install MongoDB using Docker

Install `mongodb` using docker.  
Then go to `config/docker` directory which contains a `docker-compose-mongo.yml` file for running MongoDB on your local machine.  
Then run docker-compose command.  

```
docker pull mongo
cd ./config/docker/
docker-compose -f docker-compose-mongo.yml  up -d
```

#### Step 3. Create environment variables

`NOTE:` Before running the application, environment variables must be defined.  
`Instruction:` Create a file `.env` inside your project directory, then add the variables with its corresponding values indicated in the table below.  

| Variables   | Definition                                                                  | Example Values                   |
| :---------- | :-------------------------------------------------------------------------- | :------------------------------- |
| AUTH_SECRET | Allows secure communication between GraphQL client and server.              | <Secret Key>                     |
| ENV         | Defines the environment the app will be running on.                         | prod                             |
| PORT        | The port where the app will run.                                            | 8000                             |
| MONGO_URL   | Set value to `mongodb://localhost:27017/server-app`, when not using docker. | mongodb://mongo:27017/server-app |

#### Step 4. Run Application

##### Running application without using Docker Compose

`NOTE:` Make sure `.env` is setup correctly.  
Also make sure a running `MongoDB` is running in your system.  
Then run application with this command:  

```
npm run dev
```

If you want to build the app for production use then run these commands:  

```
npm run build
npm run start
```

##### Running application using Docker Compose

This will automatically run and deploy your app in a docker container.  
`NOTE:` Make sure you have no running mongo on your docker container.  
If you did step two then you should stop that container using `docker stop <container-id>`.  
Use `docker ps` to view running containers and get the id of the container you want to stop.  

`IMPORTANT:` Update your mongo url in `.env` and change it to `MONGO_URL=mongodb://mongo:27017`.  
This will allow your application container to connect to your mongo container.  

```
docker-compose up --build -d
```

---

## API Routes  

- `https://localhost:3000/api/createQuote`  
  Request:  
  ```
  {
    body: {
       author: string
       quote: string
    },
    method: POST
  }
  ```
  Response:  
  ```
  {
      _id: string
      author: string
      quote: string
      createdAt: string
      updatedAt: string
  }
  ```

- `https://localhost:3000/api/getAllQuotes`  
  Request:  
  ```
  {
    method: GET
  }
  ```
  Response:  
  ```
  [
    {
        _id: string
        author: string
        quote: string
        createdAt: string
        updatedAt: string
    }
  ]
  ```

- `https://localhost:3000/api/updateQuote`  
  Request:  
  ```
  {
    body: {
       _id: string
       author: string
       quote: string
    },
    method: PUT
  }
  ```
  Response:  
  ```
  {
      _id: string
      author: string
      quote: string
      createdAt: string
      updatedAt: string
  }
  ```

- `https://localhost:3000/api/deleteQuote/:_id`  
  Request:  
  ```
  {
    method: DELETE
  }
  ```
  Response:  
  ```
  { 
    ok?: number
     n?: number
    deletedCount?: number
  }
  ```

- `https://localhost:3000/api/searchQuoteByAuthor`  
  Request:  
  ```
  {
    author: string
    method: POST
  }
  ```
  Response:  
  ```
  [
    {
        _id: string
        author: string
        quote: string
        createdAt: string
        updatedAt: string
    }
  ]
  ```

- `https://localhost:3000/api/getAuthorInfo`  
  Request:  
  ```
  {
    author: string
    method: POST
  }
  ```
  Response:  
  ```
  {
    author: string
    info: string
  }
  ```



