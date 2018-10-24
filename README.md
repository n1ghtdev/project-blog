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

TODO
-----

### Front-end
- [x] make single blog page by id from response api
- [x] make "create a new blog post" page with POST-request to the server
- [x] show modal window on adding new blog post *(react-modal?)*
- [ ] add new post action which resets state *(need this one to show modal second time)*
- [ ] clean up in project structure
- [ ] merge client and server folders into one, make client work with Maven *(optional)*
- [ ] replace webpack-dev-server with expressjs and webpack-hot/dev-middleware *(optional)*
### Back-end
- [x] POST-request for blog posts
- [ ] POST-request validation - check if data is not empty or not valid
- [ ] connect DB