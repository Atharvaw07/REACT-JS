npx create-react-app 01basicreact

# to check file in directory
cd filename
dir

# to start
npm run start

# using vite
npm create vite@latest
react
js
cd 01vitereact
dir
npm install
npm run dev

# things to remember
1st letter captial of file,function
create a file in src
vite: Chai.jsx 
react app: Chai.js or jsx

## syntax in Chai.jsx
function name(){
    return(
        <!-- code -->
    )

}
export default name

# import the file in App.jsx

import name from "./Chai"

# syntax in App.jsx

import Chai from "./Chai"
function App() {
  return (
   <>             --->fagmentation
   <Chai/>        ---->name of function
   <h1>chai aur react////</h1>
   </>
  );
}
export default App;


# context

create a js file

const userContext =React.createContext()

export default userContext






