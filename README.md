### Installation

1. git clone https://github.com/georgelovegrove/GeorgeWebsite.git - Download the repository
2. npm install - Install the dependencies
3. meteor - Run the project

### Implementation history

Please refer to the DEVHISTORY.md file to see the history of development from start to finish.

### TODOS

- Finish integrating SASS
- Add proper validation on the form inputs for both login and add project (should be able to use ReduxForm for the majority)
- Find a way to do correct redirects before a page is loaded, perhaps using React Router onEnter()
- Refactor any necessary components where they should be able to become functions instead of classes
- Do setupwebsite page with documentation on how website was made for the first project
- Add change password page
- Integrate Babel into project
- Add in dev and prod build scripts

### Eventually TODOS

- Add a date picker to add project form, validate the dates and then also order projects by date on the homepage
- Add an image uploader instead of a base64 string that resizes the image and saves it as a base64 string in the projects collection

