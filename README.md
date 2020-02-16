# **Trials**

Trials is a collection of simple APIs that you can use when you're trying a new technology or studying.  
It contains "famous" APIs, like TODOs and Blog (and that's is for now 😜). 

## Setup

You can run locally by following:

clone the project:  
`git clone git@github.com:soutoigor/trials.git`

Create a `.env` file and add the environment variables as in `.env.example` file  
(the local URL created by Docker is in the example, you can use it 🤙).  

Run Docker container:  
`docker-compose up`
  
Now it must be showing the message `App listening on port [PORT]!` in terminal.

## Usage  

**BLOG:**  
- **POST** - (/post) - *Create a new post*
- **GET** - (/post) - *List all posts*
- **GET** - (/post/:id) - *List post by id*
- **PATCH** - (/post/:id) - *Update a post by id*
- **DELETE** - (/post/:id) - *Delete a post by id*

**TO DO:**  
- **POST** - (/task) - *Create a new task*
- **GET** - (/task) - *List all tasks*
- **GET** - (/task/:id) - *List task by id*
- **PATCH** - (/task/:id) - *Update a task by id*
- **DELETE** - (/task/:id) - *Delete a task by id*

## Author
[Igor Souto](https://www.linkedin.com/in/igor-souto/)

