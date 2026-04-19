# 🚀 TypeScript Automation Training: Local Setup Guide

Welcome to your TypeScript training environment! Before you write your first line of code, you need to build the "engine" that will compile and run your scripts. 

Follow these exact steps to turn an empty folder into a professional-grade TypeScript execution environment.

---

## 🛠️ Phase 1: The Prerequisites
Before doing anything, ensure you have the core software installed on your machine.

1. **Install VS Code:** Download and install [Visual Studio Code](https://code.visualstudio.com/). This is the industry standard IDE for TypeScript.
2. **Install Node.js:** Download and install [Node.js (LTS version)](https://nodejs.org/). This installs both Node (the runtime) and `npm` (the package manager).
3. **Verify Installation:** Open your VS Code terminal (`Ctrl + \``) and type:
   ```bash
   node -v
   npm -v


## 🛠️ Phase 2: Project Initialization
We need to create a project identity to manage our dependencies.

Create a brand new, empty folder on your computer (e.g., ts-automation-training).

Open that folder in VS Code (File > Open Folder).

Open the VS Code terminal (`Ctrl + ``).

Run the initialization command to create your package.json file:
Bash
npm init -y
Note: The package.json file is your project's "ID card." It keeps track of everything we are about to install.


## 🛠️ Phase 3: Installing the TypeScript Engine
Now we install the tools required to write and run TypeScript locally.

In your terminal, run the following command to install the core developer tools:

Bash
npm install -D typescript ts-node @types/node
What did you just install?

typescript: The compiler that checks your code for errors.

ts-node: A magical tool that allows you to run .ts files directly in the terminal without compiling them to .js first.

@types/node: The definitions that teach TypeScript about built-in Node functions (like console.log).

## 🛠️ Phase 4: Configuring the Compiler

Phase 4: Configuring the Compiler
TypeScript needs strict rules so it can catch your bugs before they happen.

Generate the default configuration file by running:

Bash
npx tsc --init
You will now see a tsconfig.json file in your folder. Open it.

Delete everything inside it and paste this strict automation standard configuration:


## 🛠️Phase 5: Building the Folder Structure
Organization is key. Let's create the directories for your 100-task curriculum.

In VS Code, create a new folder named typescript at the root level.

Inside typescript, create a sub-folder named lesson-1-arrays.

Inside lesson-1-arrays, create a new file named practice.ts.

Your project should now look exactly like this:

📁 ts-automation-training/
 ├── 📁 node_modules/                 
 ├── 📁 typescript/                   
 │    └── 📁 lesson-1-arrays/
 │         └── 📄 practice.ts         
 ├── 📄 package.json                  
 ├── 📄 package-lock.json             
 └── 📄 tsconfig.json

 ## 🛠️Phase 6: Building the Folder Structure
 Let's prove the engine works.

Open typescript/lesson-1-arrays/practice.ts.

Paste the following strictly typed array declaration:
const successMessage: string = "TypeScript Engine is Online! 🚀";
const activeTracks: string[] = ["Track 1: Arrays", "Track 2: Mutating", "Track 3: Searching"];

console.log(successMessage);
console.log("Your active tracks are:");
activeTracks.forEach(track => console.log(`- ${track}`));

Save the file (Ctrl + S).

Run the file directly from your terminal using ts-node:
npx ts-node typescript/lesson-1-arrays/practice.ts

Success! If you see the messages print in your terminal, your training environment is 100% configured. You are ready to start coding your 100 exercises.

Optional Pro-Tip: The "Code Runner" Extension
Tired of typing npx ts-node ... every time?

Go to the Extensions tab in VS Code (the square icons on the left).

Search for "Code Runner" (by Jun Han) and install it.

Now, whenever you want to run a .ts file, just open the file and click the small "Play" (▶) button in the top right corner of VS Code!