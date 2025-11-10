# Firebase Google Authentication App

A React application with Firebase authentication and Firestore, built with Vite and styled with Tailwind CSS.

## Features

- Google Sign-In authentication
- Automatic user document creation in Firestore
- Firebase Emulator support for local development
- Modern UI with Tailwind CSS
- Protected routes with React Router

## Setup Instructions

### 1. Install Dependencies

```bash
yarn install
```

### 2. Configure Firebase

Create a `.env.local` file in the root directory with your Firebase credentials:

```env
VITE_FIREBASE_API_KEY=your-api-key-here
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

You can find these values in your Firebase Console under Project Settings.

### 3. Run the Application

**Development mode (production Firebase):**
```bash
yarn dev
```

**Development mode with Firebase Emulators:**
```bash
# In one terminal, start the emulators
yarn dev:emulators

# In another terminal, start the dev server
yarn dev
```

The app will automatically detect if it's running on localhost and connect to the emulators.

### 4. Build for Production

```bash
yarn build
```

## Firebase Emulator Ports

- Auth Emulator: http://localhost:9099
- Firestore Emulator: http://localhost:8080
- Emulator UI: http://localhost:4000

## User Document Structure

When a user signs in for the first time, a document is created in the `users` collection with the following structure:

```javascript
{
  uid: "user-uid",
  email: "user@example.com",
  displayName: "User Name",
  previous_ailments: []
}
```

## Technologies Used

- React 18
- Vite
- Firebase 10
- Tailwind CSS
- React Router DOM