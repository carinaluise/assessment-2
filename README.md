# assessment-2

## guidelines

- fork this repo
- add `npm` or `Yarn` package manager to this project
- exclude node_modules from uploading it to the remote repository
- add to the project `bootstrap` framework from `cdn` or `npm/Yarn`
- use `node-sass` or similar to compile provided `scss` into `css` style sheet
- link compiled `css` to the page
- make the color of `<h1>` white using `bootstrap`
- make color of `body` pseudo-element white using `scss`
- document project's tech-stack and how to build the `style.css` in this README.md
- open PR from your fork to the origin remote

## nice-to-have

- clean commit history
- showcasing knowledge of `JS` in any preferred way

## document here:
# Languages and tools
To set up this project I have used the following tech-stack:

- <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
- <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
- <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="JAVASCRIPT">
- <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM">
- <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="BOOTSTRAP">
- <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SASS">
- <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="GIT">
- <img src="https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white" alt="VISUAL STUDIO CODE">



# Building the "styles.css" file 

1. Begin by installing all dependencies listed within the `package.json` file. <br/>

    To do so open up your command line, cd into the project folder and type: <br/>

    `npm install`

    Now you should have `node-sass` installed and ready to use.

2. Next you can go ahead and run the build script listed inside `package.json`:

    `"build" : "node-sass --watch scss -o css"`

    To run this you can use the following command inside of your terminal:

    `npm run build`
    
    Now any `scss` edits you make will automatically compile into the `style.css` file. 

3. You have now successfully built a css file from live compiled sass! <br/> 

    Now you can right-click on `index.html` and run the live server to test it out.


![](https://raw.githubusercontent.com/ritwickdey/vscode-live-sass-compiler/master/images/Screenshot/AnimatedPreview.gif) 
