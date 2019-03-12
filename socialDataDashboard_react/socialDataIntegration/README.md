Social Data Integration Dashboard

DockerHub Production Image : https://hub.docker.com/r/kamal15leo/socialdatadashboard

Important Commands 

>   npm install

Installs all required dependencies from package.json to be usable by our code base

>   npm start

Start development server (default port being 3000)

>   npm run generate

Generate a new component/controller. Do ensure to select **PureComponent** when asked about the type of component/controller you want to create

--------------- Architecture -----------------

The execution starts from HomePage controller. The execution shifts to PersonDashboard, PlaceDashboard or EventDashboard controller, as per the entity type entered by the user.

---------------- What to do ----------------

Expand functionalities on PersonDashboard, PlaceDashboard or EventDashboard controller by making re-usable components as widgets for the dashboards.
---------------- What not to do ----------------

**Never run the command** npm run clean
This will delete all our files.