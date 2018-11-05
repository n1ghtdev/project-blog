# Project Blog
Simple blog with Spring Boot on back-end and React/Redux on front-end.

Used in this project
-----
* Spring Boot - java mvc framework
* Maven - project management tool
* Embedded tomcat - java servlet container
* React - javascript library
* Redux - javascript state container
* Webpack - module bundler
* Webpack-dev-server
* npm - package manager
* check package.json for more...

Done
----- 
* get single blog page by id from response api
* page for adding new posts to blog
* implementation of modal-window with redux
* POST-request for blog posts
* modal content, modal-error, redirect button
* connected to postgreSQL-db

TODO
-----

### Front-end
- [ ] implement draft-js to add blog post input (description)
- [ ] blog categories redux store, container, components..
- [ ] clean up in project structure
- [ ] merge client and server folders into one, make client work with Maven *(optional)*
- [ ] replace webpack-dev-server with expressjs and webpack-hot/dev-middleware *(optional)*
### Back-end
- [ ] update note controller/service
- [ ] POST-request validation - check if data is not empty or not valid