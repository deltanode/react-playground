# 10 - What is Seen is Sold

Today, it was all about UI Layer of our app. The look and feel of the app attracts the user. Various ways of writing css (styling) is discussed in this chapter. Recreated the whole app using Tailwind CSS.

### Topics Covered:

- Explored all the ways of writing css in React.
- Configured tailwind.
- Re-built our food-order-app using tailwind css.

## Notes:

- [Notes.md](https://github.com/deltanode/react-playground/blob/main/10-what-is-seen-is-sold/notes.md)

## Theory:

<!-- *******************************-->
<details>
<summary>Explore all the ways of writing css.</summary><br>
<blockquote>

1. `Native CSS` - all components's styles in a single file index.css
2. `SCSS` - Syntactical CSS - it is then converted to css 
3. `Inline - style attribute` - pass object - {{backgroundColor : "red"}}
4. `Component Library` - MaterialUI, Bootstrap, Base Web UI, Ant design, chakra UI
5. `styled-components` 
6. `CSS Framework` - Tailwind 
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>How do we configure tailwind?</summary><br>
<blockquote>

Below are the steps to use Tailwind CSS for React App in Parcel :
- `Install tailwind css`
  - Below command will *install* tailwindcss and its peer dependencies via npm, and then run the init command to *generate* **tailwind.config.js**.
    ```
    npm install -D tailwindcss postcss
    npx tailwindcss init
    ```
  

- `Configure PostCSS`
  - Now, create a **.postcssrc*** file in your project root, and **enable** the tailwindcss plugin.
    ```json
    {
      "plugins": {
        "tailwindcss": {}
      }
    }
    ```

- `Configure your template paths`
  - Now, **add** the paths to all of your template files in your tailwind.config.js file.
    ```
    module.exports = {
      content: [
        "./src/**/*.{html,js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```
- `Add the Tailwind directives` to your CSS
  - Now, **create** a ./src/`index.css` file and **add** the `@tailwind directives` for each of Tailwind’s layers.
    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```
- Start your build process
   ```
   npx parcel src/index.html
   ```
- Now, you are ready to start using Tailwind in your project.   
- For more, refer [Tailwind CSS Docs](https://tailwindcss.com/docs/installation/framework-guides)
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>In tailwind.config.js, what does all the keys mean (content, theme, extend, plugins)?</summary><br>
<blockquote>

- ```
  module.exports = {
    content: [
      "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  ```
- `content`: This section is where you configure the paths to all of your HTML templates, JS components, and any other files that contain Tailwind class names.

- `theme`: In this, we can customize color palette, spacing scale, typography scale, or breakpoints using theme section of your tailwind.config.js file

- `plugins`: The plugins section allows you to register plugins with Tailwind that can be used to generate extra utilities, components, base styles, or custom variants.
- ```
  module.exports = {
    // Using content property to provide the path for the html files
    content: ["./*html"],
    
    // Using extend property to set custom color & font
    theme: {
      extend: {
        colors: {
          "custom-blue": "#00BAFF",
          "custom-purple": "#6336FA"
        }
      },
      fontFamily: {
        Poppins: ["Poppins, sans-serif"]
      }
    },
    
    plugins: []
  }
  ``` 
</blockquote><br>
</details>

<!-- *******************************-->
<details>
<summary>Why do we have .postcssrc file?</summary><br>
<blockquote>

- PostCSS is a Node.js tool that transforms your styles using JavaScript plugins.
- Despite its name, it is neither a post-processor nor a pre-processor, **it is just a transpiler** that **turns** a special PostCSS plugin syntax **into** a Vanilla CSS. You can think of it as the Babel tool for CSS.
- So, we used `PostCSS` to transpile the tailwind css code into Vanilla CSS. 
- Remember, while installing tailwind, we install postcss as its peer dependency. So, we create a '.postcssrc' file in project root, and **enable** the tailwindcss plugin.
  ```json
  {
    "plugins": {
      "tailwindcss": {}
    }
  }
  ```
- For more detail [refer](https://www.freecodecamp.org/news/what-is-postcss/)
</blockquote><br>
</details>
<!-- *******************************-->

## Coding:

<ul>
	<li>Configure Tailwind and try to build your whole app using tailwind.</li>
</ul>

## References:

<ul>
	<li>https://styled-components.com/</li>
	<li>https://tailwindcss.com/</li>
	<li>https://getbootstrap.com/</li>
	<li>Material UI - https://mui.com/ </li>
</ul>
