<p align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg" width="400"></p>


## About the project

- Reproduce Amazon website as a training (MVC Architecture)

## Project Version

- Version : 1.0.0-SNAPSHOT


## Project requirements

- Server : local build-in
- Browser : Chrome / Mozilla

## Project components version

- Laravel 6.0
- PHP : 7.2
- Lavarel Debugbar (*)
- Collective HTML (*)
- Cors (*)

## Project setup

- install MAMP
- Open MAMP application
- Go to webstart page -> tools -> phpMyAdmin
- create a database name 'laravel'
- download the project from github and put it in the default Mamp server directory
- Come back to webstart page, you should see all MySQL informations connections 
- update project/.env databases informations with MySQL informations connections  (Default & Additionnal)
- update project/config/database.php databases informations with MySQL informations connections (Default & Additionnal)
- Open the terminal from your project root folder
- Run the command php artisan migrate:install
- Run the command php artisan migrate:refresh --seed
- Go to webstart page -> MyWebsite -> laravel* -> public
- Now you are able to use and see the application
- You can connect to the app with (email:super@gmail.com / password:super)

## Project concepts used
- Authentification
- Eloquent ORM
- Query Builder
- Migrations
- Seeding
- Middleware
- Dependency Injection
- Hashing
- Pagination
- Relationship 1:N
- Error Handling
- Unit testing

