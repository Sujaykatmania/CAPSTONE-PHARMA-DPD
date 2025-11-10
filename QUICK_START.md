# Quick Start Guide

## 🚀 Get Started in 3 Steps

### Step 1: Add Your Firebase Credentials

Edit `/app/.env.local` file and replace with your Firebase project credentials:

```env
VITE_FIREBASE_API_KEY=your-actual-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

**Where to find these:**
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project (or create a new one)
3. Click the gear icon → Project Settings
4. Scroll down to "Your apps" section
5. Click on the web app or create one
6. Copy the config values

### Step 2: Enable Google Sign-In

1. In Firebase Console, go to **Authentication**
2. Click **Get Started** (if not already enabled)
3. Go to **Sign-in method** tab
4. Click **Google** → Enable → Save

### Step 3: Run the App

```bash
cd /app
yarn dev
```

Open http://localhost:3000 in your browser!

## 🧪 Testing with Firebase Emulators (Optional)

If you want to test locally without using production Firebase:

1. **Install Firebase CLI:**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase:**
   ```bash
   firebase login
   ```

3. **Initialize Firebase (already configured):**
   The `firebase.json` is already set up, so you can skip `firebase init`

4. **Start Emulators:**
   ```bash
   yarn dev:emulators
   ```
   
5. **In another terminal, start the app:**
   ```bash
   yarn dev
   ```

The app will automatically detect localhost and use emulators!

## 📱 What You'll See

1. **Login Page** - A beautiful "Sign in with Google" button
2. **Google OAuth Flow** - Google's sign-in popup
3. **Dashboard** - Your profile with name, email, and sign-out button

## 🔍 Verify It's Working

After signing in, check your Firestore:

1. Go to Firebase Console → Firestore Database
2. Look for the `users` collection
3. You should see a document with your `uid` containing:
   - uid
   - email
   - displayName
   - previous_ailments: []

## 🎉 That's It!

Your Firebase authentication app is now running. You can now build additional features on top of this foundation!

## 🆘 Troubleshooting

**Issue:** "Firebase configuration missing"
- **Fix:** Make sure you've added real values to `.env.local`

**Issue:** "Google sign-in not working"
- **Fix:** Enable Google provider in Firebase Console → Authentication

**Issue:** "Firestore permission denied"
- **Fix:** Make sure you've created a Firestore database in Firebase Console

**Issue:** Port 3000 already in use
- **Fix:** Kill the process using port 3000 or change port in `vite.config.js`
