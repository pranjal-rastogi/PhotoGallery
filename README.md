# Photo Gallery App

A beautiful and responsive photo gallery application that dynamically fetches images from the Unsplash API. The gallery includes features like infinite scrolling, error handling, and loading indicators for a smooth user experience.

## Features

- **Responsive Layout**: Automatically adjusts to different screen sizes (mobile, tablet, desktop).
- **Infinite Scrolling**: Load more photos as you scroll down.
- **Error Handling**: Displays error messages when fetching data fails.
- **Loading Indicator**: Shows a loading spinner while new images are being fetched.
- **Hover Effects**: Enhance user interaction with zoom and shadow effects on images.
- **Local Caching**: Minimizes redundant API calls with in-memory caching of fetched data.

## Live Demo

You can check out the live version of the project here: [Your Live Site URL]

## Technologies Used

- **React**: Frontend framework for building the UI.
- **Unsplash API**: To fetch high-quality images.
- **CSS**: Custom styling for a beautiful and responsive design.

## Installation

To run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/photo-gallery.git
   ```

2. Navigate into the project directory:

   ```bash
   cd photo-gallery
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file and add your Unsplash API key:

   ```env
   REACT_APP_UNSPLASH_API_KEY=your_unsplash_api_key
   ```

5. Start the development server:

   ```bash
   npm start
   ```

6. Open the app in your browser at `http://localhost:3000`.

## Contributing

If you'd like to contribute, feel free to fork the repository and create a pull request with improvements or bug fixes.
