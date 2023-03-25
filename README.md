# Project Structure
public/: Store images here such as logo

src/asset: I have no idea

src/component: This folder is for individual component, each component is stored in
its own folder with corresponding files, for example:
- PrimaryButton (Component folder must be in CamelCase):
  - index.jsx (vite require the jsx extension)
  - PrimaryButton.module.css 
  - Other files

src/hooks: This folder is for universal hooks such as API caller 

src/pages: This folder is for pages such as SignIn, SignUp, HomePage,...

src/styles: This folder is for styles of PAGES not COMPONENT

src/providers: This folder is for providers use for authentication

Simply skip the App.jsx, main.jsx, App.css and index.css

# Third-party libraries
Please annouce it to other members before installing other libraries.
For this project, there will be some required libraries:
- axios (no need to use fetch)
- react-icons (for icons)
- react-query (for calling to the API)
- swiper (for image slider)

# Eslint throw some error, what to do ?
Vscode have function for skipping eslint error, simply use that. I will update the eslint 
file later

# What package manager was used ?
Yarn was used instead of NPM