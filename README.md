# Project Blog

Tools
-----
* Spring Boot - java mvc framework
* Maven - project management tool
* Embedded tomcat - java servlet container
* PostgreSQL - database
* React - javascript library
* Redux - javascript state container
* Webpack - module bundler
* Webpack-dev-server
* npm - package manager
* check package.json for more...

Done
----- 
* blog page with list of notes
* note page
* add note page with modal
* connect postgreSQL

TODO
-----

### Front-end
- [x] blog categories redux store, container, components..
- [ ] dispose createPostReducer *(if there is any other option)*
- [ ] sort posts by categories
- [ ] implement draft-js to add-note page desc-textarea
- [ ] clean up in project structure
- [ ] merge client and server folders into one, make client work with Maven *(optional)*
- [ ] replace webpack-dev-server with expressjs and webpack-hot/dev-middleware *(optional)*
### Back-end
- [x] response to add note POST-request with id of new note
- [ ] POST-request validation - check if data is not empty or not valid