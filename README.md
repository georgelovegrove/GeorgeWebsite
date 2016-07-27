# GeorgeWebsite

### Installation

1. git clone https://github.com/georgelovegrove/GeorgeWebsite.git - Download the repository
2. npm install - Install the dependencies
3. meteor - Run the project

### Implementation history

#### 1. Design
First designs were mocked up using Sketch to specify what will be created ([Design folder](https://drive.google.com/folderview?id=0B8eUsSv3DhS6ZTJLN2VBcXdTWEE&usp=sharing)).

#### 2. Architecture
Architecture document drafted based on existing documentation and example resources ([Architecture document](https://docs.google.com/document/d/16jToKFgV-beYQUD_9a2z75bQMieD3t-LypEBiwklbWU/edit?usp=sharing)).

#### 3. Project setup
The project layout was setup with the file structure and empty files added to reflect the architecture.

#### 4. Login functionality added
Login functionality added allowing an admin user to login and redirect them to the homepage. The admin can also log out on the homepage.

#### 5. Integrated ReduxForm and react-meteor-data containers
Login functionality and add project forms both now use ReduxForm for UI state management. react-meteor-data containers were used to give the components access to Meteor.user() data. It is unclear on the best approaches towards integrating both the Meteor account system and Redux - there appears to be a lot of disparity and few examples on a good approach.

#### 6. Add project functionality working and rendering project list
An admin user can now add projects with very basic validation. The list is subscribed to on the homepage and printed out. The next task is to use Redux to manage the state of the lists on the homepage in preparation to use remove project functionality.

### TODOS

- Add proper validation on the form inputs for both login and add project
- Add a date picker to add project form and eventually add an image uploader instead of a relative URL. 
- Find a way to do correct redirects for when users are logged in / out
- Use a promise using redux thunk approach to redirect user to homepage after successful project creation or login
- Finish error handling for the forms

