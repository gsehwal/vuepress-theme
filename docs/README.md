---

---


# LIVING GOOD DOCUMENTATION IS HARD
- - -
Documentation can be difficult, but it's the key to any project's long term success.

# VuePress  


> Minimalistic docs generator with Vue component based layout system  
  
``The simplicity of this high quality doc system is the beauty of VuePress`` 

<br />  

## INTRODUCTION  

To create a document with VuePress you need a markdown file with the name ``README.md``    
VuePress will then transpile this README.md into html using a nice default theme with following features:

  - Responsive layout
  - Optional Homepage
  - Simple out-of-the-box header-based search
  - Algolia Search
  - Customizable navbar and sidebar
  - Auto-generated GitHub link and page edit links


### Environment Setup

::: tip COMPATIBILITY NOTE
VuePress requires Node.js >= 8
:::
 
**VuePress** is a **Node** application that needs to be installed via **NPM** or **Yarn**. You can use 
NPM (Node Package Manager) or Yarn to install VuePress within either a ``new`` or ``existing`` project. 

To check you have **Node.js** installed along with access to **NPM**, open up your console and type:  

| `node -v` | **and** | `npm -v` |  

Both of these commands should provide you with a version number. If they go unrecognized, 
visit [Node.js](https://nodejs.org/en/) and download the appropriate installer based on your operating system. Install it through the default options and reload your console. You can now re-issue the same commands and they will work.

If you need upgrading to a newer version [Read the docs](https://www.npmjs.com/get-npm)

```bash
# any version number - nvm = Node Version Manager
nvm install 8.1.0
yarn upgrade --latest
``` 


The same is valid for yarn  

| `yarn -v` |

| [Download Yarn](https://yarnpkg.com/lang/en/docs/install/#windows-stable) |   



#### Optional installations:  
  [Download Git](https://git-scm.com/downloads) for later use of Github, GitLab or Bitbucket  
Use an editor you like, for example [Visual Studio Code](https://code.visualstudio.com/download)  

<br />  



### Installing VuePress  
 

```bash
npm install -g vuepress  | or | yarn global add vuepress
``` 
  

#### After installing VuePress, it's very easy to create an online document 
 
```bash
# Create the project folder
mkdir myProject && cd myProject  
 
# Create a README markdown file with **Hello VuePress**
echo # Hello VuePress > README.md

# Start Server
vuepress dev  

# Open in a browser  
http://localhost:8080
```

### Result

This **README.md** file with one line of markdown formatted content `# Hello VuePress` gives you a 
responsive layout with `menu-icon`, `header` and `search-box` out of the box.

<img src="https://res.cloudinary.com/iicamp/image/upload/v1535456695/VuePress-Zero/vuepress-zero-result.png" />

The README.md markdown file is compiled into a HTML index.html with **markdown-it** and then 
processed as the template of a Vue component. This allows you to directly use Vue inside your 
markdown files and is great when you need to embed dynamic content.

You can find the markdown-it syntax in this demo [Markdown-it demo](https://markdown-it.github.io/)

### Additional Features of VuePress are

- Built-in markdown extensions optimized for technical documentation
- Ability to leverage Vue inside markdown files
- Vue-powered custom theme system
- Automatic Service Worker generation
- Google Analytics Integration
- "Last Updated" based on Git
- Multi-language support


### Tips and Tricks:

If you need the latest npm or yarn installed

```bash
npm install npm@latest -g
yarn upgrade --latest
```

