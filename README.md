# Line of Credit Application

This project implements a Line of Credit feature for a cash-advance style application. It includes both a frontend built with React and Vite, and a backend built with TypeScript and AWS Lambda.

## Prerequisites

- Node.js (v14 or later)
- AWS CLI
- Serverless Framework

## Setup

### Backend

1. Navigate to the `backend` directory:

   ```sh
   cd backend
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Configure AWS CLI with your credentials:

   ```sh
   aws configure
   ```

4. Deploy the backend using the Serverless Framework:

   ```sh
   npx serverless deploy
   ```

5. Note the API endpoint provided by the Serverless deployment. You will need this for the frontend configuration.

### Frontend

1. Navigate to the [frontend](http://_vscodecontentref_/2) directory:

   ```sh
   cd frontend
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Start the frontend development server:

   ```sh
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` to view the application.

## Future Enhancements

- Implement authentication and authorization for user and admin actions.
- Add more detailed error handling and validation.
- Implement additional features such as multiple currencies, more complex fee structures, and integration with external payment providers.
- Improve the frontend UI/UX with better styling and user feedback.
