## Setup

_This setup assumes that you have the latest versions of node (v10), npm (v6), and git (v2) installed._

### Installing the Front-End

1. `git clone https://github.com/mankittens/questionnaire.git`
2. `cd questionnaire`
3. `npm i`
4. `npm start`

### Installing the Backend

1. `git clone https://github.com/mankittens/questionnaire-api.git`
2. `cd questionnaire-api`
3. `npm i`
4. `node index.js`

### Creating a Questionnaire

1. Go to `http://localhost:3000/`.
2. Follow the instructions on the page. Here is some example JSON that will create a form:

```json
{
  "displayName": "Basic esports knowledge",
  "sections": [
    {
      "displayName": "League of Legends",
      "questions": [
        {
          "type": "freetext",
          "text": "Discuss the suitability of League of Legends as high school esport"
        },
        {
          "type": "multi",
          "text": "In which genre would you classify League of Legends ?",
          "options": [
            {
              "text": "First Person Shooter"
            },
            {
              "text": "MOBA"
            }
          ]
        }
      ]
    },
    {
      "displayName": "Esports (general)",
      "questions": [
        {
          "type": "multi",
          "text": "Which spelling of ’esports’ are acceptable: 1. Esports, 2. e-sports",
          "options": [
            {
              "text": "1"
            },
            {
              "text": "1 and 2"
            },
            {
              "text": "2"
            },
            {
              "text": "None"
            }
          ]
        }
      ]
    }
  ]
}
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
