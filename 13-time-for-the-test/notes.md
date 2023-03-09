### Class notes `Chapter-13 Time for the test`

How to test react applications ? Jest & React Testing Library (alternative to enzyme)

How to setup test for our app ?

Why test cases ?

1. New code should not old code
2. Not breaking existing code - Maintainability
3.

TDD - test Driven Development ? Test cases even before writing code, development becomes very slow.

Types of tesing :

1. Manual testing -> human testing the code
2. Automated testing -> code testing the code Eg: Selenium

3. E2E tetsing -> test the whole flow by stimulating . Eg:cypress
   This is offloaded to QA team.
   Headless browser -> browser does not have to do teh work of laoding UI in browser. It makes testing faster.

4. Unit testing -> core job of developers -> testing small unit of code

5. Integration testing -> Data flow between components

6. Performance, Regression and Smoke testing

React-Testing-library

1. Install React Testing library - npm install --save-dev @testing-library/react @testing-library/jest-dom
2. Install Jest - npm install -D jest
3. Configure Jest -> npx jest --init
4. Typescript -> N
5. environment -> jsdom (broswer-like)
6. code coverage -> y
7. provider for coverage -> babel
8. automatically clear before test -> y
9. Creates jest.config.js
10. scripts -> test : jest
11. npm install -D jest-environment-jsdom
12. jest is trying to find test cases in the app under **tests** folder
13. Create first test -> sum.test.js under **tests** folder
14. test("testcase name ", () => { })
15. Every test case should have some assertion - `expect` to return - `toBe` expeect(sum(2,3)).toBe(5)
16. import sum.js (component) inside sum.test.js
17. npm install --save-dev babel-jest @babel/core @babel/preset-env - why ? because jest does not understand import statement.
18. to configure babel -> babelrc file or babel.config.js
19. package.json ->in scripts watch test : "test --watch"

20.
