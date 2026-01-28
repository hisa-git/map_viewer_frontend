# Client Side of Map viewer Application

This repository contains the client-side part of the Map Viewer Application.

The application is responsible for user interaction, UI rendering, and communication with the server API. It runs entirely in the browser and acts as a presentation layer between the user and the backend.

## Stack

- Next.js
- TypeScript and JavaScript
- Tailwind CSS
- Three.js

## Functionality

- Page rendering and client-side navigation
- API communication
- Interactive map navigation
- Weather data visualization
- Visualization of static cartographical data
- UI state management for map settings

## Structure
The codebase follows a standard Next.js layout with separated pages, UI components, and utility logic. State is managed locally without complex external abstractions.

## Running

Fill the .env.local in the root folder with

```
NEXT_PUBLIC_STARTLON = 30.123456
NEXT_PUBLIC_STARTLAT = 40.123456
NEXT_PUBLIC_API_BASE = http://example.com
```

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The app will be available at http://localhost:3000. Also check the backend repo to get full functionality
