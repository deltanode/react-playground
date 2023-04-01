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
  5. **CSS Framework**  - Tailwind
  6. **Styled Components**: Majorly used in react projects. 

- **Important**: In a `system design round of interview`, you always have to discuss that 
  - what will you use for styling your components?
  - Now, there are differnet ways, you can style your web apps. 
  - But, what way you will choose & you have give a a good reason for it.
  - So, you should know what are the pros & cons of using them.
  - Exapmle: what are pros & cons of using `Native CSS` over `SCSS` or `component library`
 
- Pros & Cons of using Component librery (i.e  MaterialUI, Bootstrap, etc)
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
