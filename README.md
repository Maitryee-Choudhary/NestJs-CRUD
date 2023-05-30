### NESTJS CRUD

## How to run on local machine:-
1. Clone the project from github
```
https://github.com/Maitryee-Choudhary/NestJs-CRUD.git
```
2. ```npm install ```
3. Setting up environment
- You will find a file named '.env.example' in project's directory.
- Create a new file named '.env' in root directory and copy and paste the content of '.env.example'
- Change the credentials value according to your environment. (MySQL is used as DB, make sure mysql is installed on local machine)
4. Running locally: `npm run start:dev`

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## REST API
| METHOD | URL | ACTIONS |
|--------|-----|---------|
| GET | localhost:3000/user | Fetch the list of all users |
| POST | /user | Create a new user ( email,name, password) |
| GET | /user/:id | Fetch user by id |
| PATCH | /user/:id | Update user details by id as param |
| DELETE | /user/:id | Delete a user or remove user from DB by id |
| POST | /auth/login | Login a registered user by taking email and password and return access_token |
| GET | /blog | Fetch the list of all blogs. This route is been accessed by logged in users. Authorization token is required to access this route |
| POST | /blog | Create a new blog with (title,content). This route needs authorizathion header. Make sure to include authorization header and value is access_token of any user. |
| DELETE | /blog/:id | Deletes a blog with id, need authorization |
| PATCH | /update/:id | Update a blog details with id |

