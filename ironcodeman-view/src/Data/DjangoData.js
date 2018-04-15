const DjangoData = [
  {
    type: "Django Intro",
    command: "virtualenv env",
    description: "creates the env folder with all the necessary files to run a virtual environment"
  },
  {
    type: "Django Intro",
    command: ". env/bin/activate",
    description: "activate the environment with activate as the key folder to start the virtual environment up" 
  },
  {
    type: "Django Intro",
    command: "pip install django",
    description: "now that you have set up and activated the environment, you can now easily install django into the environment context" 
  },
  {
    type: "Django Intro",
    command: "python -m django --version",
    description: "checks Django version" 
  },
  { 
    type: "Django Intro",
    command: "pip install -r requirements.txt",
    description: `installs the dependences off of the requirement.txt file. 
    Important for installing any needed dependencies. Similar to npm install to 
    install required dependencies`
  },
  {
    type: "Django Intro",
    command: "django-admin startproject appname",
    description: "creates a new Django project called 'appname'"
  },
  { 
    type: "Django Intro",
    command: "/manage.py runserver",
    description: `starts up the python/django based server. Make sure that the 
    manage.py file can be found when typing 'ls' or 'dir' in the terminal before 
    you start up server. Usually located in the main app folder itself`
  },
  { 
    type: "Django Intro",
    command: "python manage.py runserver 0:8000",
    description: "you can specify port number like this by adding number at the end of command" 
  },
  { 
    type: "Django Intro",
    command: "ctrl + c",
    description: `shuts down the server if it is running` 
  },
  {
    type: "Django Intro",
    command: "'./manage.py shell",
    description: "starts up the python shell and test Django api."
  },
];

export default DjangoData;