# React-Props-Practice

# Dynamic Contact Cards App

A React application that displays a list of contact cards generated from a `contacts` data file. Each card includes a contact's name, image, phone number, and email address, demonstrating dynamic data rendering in React.

## Table of Contents

1. [Overview](#overview)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Features](#features)
5. [Technologies](#technologies)
6. [Folder Structure](#folder-structure)
7. [Scripts](#scripts)
8. [License](#license)

## Overview

The Dynamic Contact Cards App uses a `contacts` data file to dynamically render contact information through a reusable `Card` component. This setup illustrates how to manage and display dynamic data in a React application.

## Installation

### Prerequisites

- Node.js (version 14 or above)
- npm (version 6 or above)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/jbolan12/React-Props-Practice.git

## Navigate to the project directory:

bash
cd your-repo

**Install the dependencies:**

bash
npm install

**Start the development server:**

bash
npm start
Open your browser and go to http://localhost:3000 to view the app.

## Usage
To add or modify contacts, update the contacts data file (located at src/contacts.js). Each entry should follow the structure used in the existing contact data.

**Example:**
javascript

{
  name: "Elon Musk",
  imgURL: "https://example.com/elon.jpg",
  phone: "+987 654 321",
  email: "elon@musk.com"
}

## Features
- Dynamic Rendering from Data File: Renders each contact card based on data in contacts.js.
- Reusable Card Component: Uses the Card component to display contact information, ensuring a consistent layout.

## Technologies
- React
- JavaScript (ES6+)

## Scripts
The following scripts are available in the project:

- start: Runs the app in development mode with react-scripts start.
- build: Builds the app for production using react-scripts build.
- test: Runs the test suite with react-scripts test --env=jsdom.
- eject: Ejects the app from Create React App configuration.

## License
This project is licensed under the MIT License.
