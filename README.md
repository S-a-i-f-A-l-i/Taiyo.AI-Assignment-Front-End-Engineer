# Taiyo.AI-Assignment-Front-End-Engineer

# Contact Management App with Charts and Maps [Live Link](https://contact-management-smoky.vercel.app/)

This is a contact management app built with ReactJS, TailwindCSS, React Router v6 and React Query, which also includes a dashboard with charts and maps showing COVID-19 data.

## Objective

The app has two main objectives:

1.  Contact Management: The app allows users to add, view, edit, and delete contacts. Contacts are stored in Redux, and the app uses React Query to handle API calls and data management.

2.  Charts and Maps Dashboard: The app includes a dashboard with a line graph showing the fluctuations in COVID-19 cases and a React Leaflet map with markers showing the country name, total number of active, recovered cases, and deaths in that particular country.

## APIs Used

The following APIs were used to fetch data for the dashboard:

- World-wide data of cases: https://disease.sh/v3/covid-19/all
- Country-specific data of cases: https://disease.sh/v3/covid-19/countries
- Graph data for cases with date: https://disease.sh/v3/covid-19/historical/all?lastdays=all

## How to Run the App

To run the app locally, follow these steps:

1.  Clone the GitHub repo to your local machine.
2.  Navigate to the root directory of the project.
3.  Run npm install to install the necessary dependencies.
4.  Run npm start to start the development server.
5.  The app should now be running at http://localhost:3000/.

## Dependencies

The following dependencies were used in this project:

- react
- react-dom
- react-router-dom
- react-query
- redux
- react-redux
- fetch
- leaflet
- react-leaflet
- tailwindCSS
- ModuleCSS
- ObjectCSS

## Features

- Add new contacts
- View a list of all contacts
- Edit and delete contacts
- View a line graph showing COVID-19 case fluctuations
- View a map with markers indicating the country name, total number of active, recovered cases and deaths in that particular country

### Conclusion

This contact management app with charts and maps provides an easy way to manage contacts and view COVID-19 data in a simple dashboard. The app is well-structured and easy to maintain, making it a great starter project for anyone looking to improve their skills in ReactJS, ModuleCSS, TailwindCSS, ObjectCSS and React Query.
