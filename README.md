# Bizzabo Website Sections

The purpose of this project is to create new themes for Bizzabo website sections.

In `src` folder you will find a filed called `Section.js`.  
This file is a template for the new section theme.  
Please duplicate this file before you start.
Inside the `props` object you'll find the relevant data for your section. Please find below section-specific instructions for your your development process.
Inside the `Section.d.ts` file you can find TypeScript interfaces that describe the data structure for the section.

You can find an example in the `examples` folder.  
It contains a real sections that you can take inspiration from.  
You can use the css classes that are used in the example sections, but it's not a must.  
Please don't edit any other file other then your duplicated `Section.js` file.

## Important classes
There are several important classes that must to be included in the section markup:
- `atom-sectionMain` should be on the top level wrapper of the section  
- `element-${element.id}` should wrap every element in the section. (for example in the `people` section, `header` and `people` elements).
- Please find another important classes that are section-specific.

## Section-specific instruction
### People
Inside the section prop, you will find all the relevant data for the `people` section.
`people` section elements are `people` and `header`.  
 
 **NOTE:** The naming is a little bit confusing. `people` **section** contains two elements: `people` **element** and `header` **element**  

 If `people` element contains `contactListId` prop, show the contacts, overwise, show the placeholder.  

 In the `people` element you will find the contacts array.  
 Each `contact` can be a speaker and than he will have a `speakerId` prop. In this case, the contact img should be wrapper with an A tag.  

If the `contact` doesn't have image url (`thumbnailUrl`), show the placeholder instead.
When hovering over an contact image, there is a small zoom effect. You can see it in the example section.

The number of contacts to show in each view size:
- Web view - show up to 4 contacts in a row.
- Ipad view - show up to 3 contacts in a row.
- Mobile view - show up to 1 contacts in a row.

In the `people` example section, you can find an example of all the use cases described above.

**Important classes**
- `atom-main` should be on the header text of the section
- `atom-1` should be on the contact name
- `atom-2` should be on the contact title
- `atom-3` should be on the contact company

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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
