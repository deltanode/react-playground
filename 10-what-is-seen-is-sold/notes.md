## `Chapter-10 What is seen is sold`

- Why frameworks?

  - optimized css,
  - consistent UI
  - saves time.
  - Eg : MaterialUI, Bootstrap, Base Web UI, Ant design, chakra UI

- Can we use more than one framework ?

  - It's all package can use any number of frameworks,
  - But, not consistent way

- Different ways to write css :

  1. **Normal Native CSS** - all components's styles in a single file index.css
  2. **SCSS** - Syntactical CSS - atlast it is converted to css
  3. **Inline CSS** - style attribute - pass object - {{backgroundColor : "red"}}
  4. **Component Library** - MaterialUI, Bootstrap, Base Web UI, Ant design, chakra UI
  5. **CSS Framework** - Tailwind
  6. **Styled Components**: Majorly used in react projects.

- **Important**: In a `system design round of interview`, you always have to discuss that

  - what will you use for styling your components?
  - Now, there are differnet ways, you can style your web apps.
  - But, what way you will choose & you have give a a good reason for it.
  - So, you should know what are the pros & cons of using them.
  - Exapmle: what are pros & cons of using `Native CSS` over `SCSS` or `component library`

- Pros & Cons of using Component librery (i.e MaterialUI, Bootstrap, etc)

  - Pros :

    - `consistent UI`: (All the button in your app will look the same now)
    - save time

  - Cons :
    - Bundle size -
    - Loose control over design
    - personal customizition is hard

### Tailwind CSS:

- When? How? & Why? to use it.

- writing css on the go (i.e in the same file )
- reusablity
- less bundle size (minimal css) only includes the css classes that we have used
- Flexible UI (Customizable)

#### Seting up tailwimd css in our project: (refer)[https://tailwindcss.com/docs/installation/framework-guides]

1. Installing `tailwind` & `postcss` using npm [for parcel]

   ```
   npm install -D tailwindcss postcss
   npx tailwindcss init
   ```

2. Configure Tailwind:

   - use command `npm tailwind init`
   - This will create `tailwind.config.js` file
   - Now, we will be telling tailwind which all files to scan (i.e Configure your template paths)

     ```
      /** @type {import('tailwindcss').Config} */
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

3. Configure postcss:
   - Create `.postcssrc` file.
   - Configure PostCSS:
   ```
   {
     "plugins""{
       "tailwindcss": {}
     }
   }
   ```
   - In this `.postcssrc` file, we have to tell the `parcel`(i.e bundler) that we will be using tailwind. So, compile our tailwind css into normal css during the build. This is the reason, we use `.postcssrc` configuration.
4. Now, in 'index.css`
   - We will not be writing any css in it.
   - Instead there will only three lines inside it (i.e Add the Tailwind directives to your CSS):
     ```
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

- Add a plugin/extension `Tailwind CSS IntelliSense` in VScode.
  - NOTE: Sometime this extension is showing suggetion. In that case `press ctrl + spacebar`.

## Pros & Cons of tailwind

- Pros:

  - Saves Time (faster developnment)
  - Easy to debug
  - Less code is shipped
  - No duplicates CSS
  - Bundle size is small
  - Much more customisable (then other frameworks like MaterialUi, Bootstrap,...)
  - Gives much more control over things

- Cons:
  - Initial learning curve: every new developer that will join our team will take some time understand & learn.
  - Too much class. So, readability is compromised a little.
  -

> **Note:**: Because of `JSX` & `tailwind` we don't have to move out of our `.js` file.
