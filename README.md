# Pi Calculator with Web Worker

A Next.js application that calculates the value of Pi using a Web Worker to prevent UI blocking. The project demonstrates the use of parallel processing in web applications by offloading intensive calculations to a separate thread.

## Features

- Calculate Pi with configurable accuracy
- Non-blocking UI during calculations

## Technical Implementation

The application consists of two main components:

1. Main Thread ([`pibutton.tsx`](src/app/pibutton.tsx))

   - React component with user interface
   - Controls for setting calculation accuracy
   - Message passing to Web Worker

2. Worker Thread ([calculation.js](src/app/calculation.js))
   - Performs Pi calculations
   - Handles message events from main thread
   - Returns results asynchronously

## Communication Flow

1. User sets accuracy and clicks "Generate Pi"
2. Main thread sends message to worker with accuracy parameter
3. Worker performs calculation without blocking UI
4. Results are sent back to main thread and displayed

## Running the Project

```bash
npm install
npm run dev
```
