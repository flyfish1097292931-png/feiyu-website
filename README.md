# Feiyu — Structure Thinker

A minimalist personal website built with Next.js (App Router), TypeScript, and Tailwind CSS. The site focuses on abstract structural domains and maintains a quiet, serious, dark aesthetic.

## Tech Stack

* **Next.js** (App Router)
* **TypeScript**
* **Tailwind CSS**
* **Static Generation** (SSG)

## Getting Started

### Prerequisites

* Node.js 18.x or later
* npm or yarn

### Installation

1. Clone or download the project.
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Build and Export

To generate a static version of the site:
```bash
npm run build
```
The static files will be generated in the `out` directory.

## Deployment to Vercel

The project is ready for Vercel deployment:

1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. Import the project in Vercel.
3. Vercel will automatically detect the Next.js framework and use the appropriate build settings.
4. Set the build command to `npm run build` if not automatically detected.

## Constraints Followed

* **Abstract Identity**: No real-world projects, credentials, or affiliations are exposed.
* **Minimalist Aesthetic**: Dark theme (#000 background, #f5f5f5 text), large spacing, and quiet typography.
* **Information Architecture**: 2x2 grid home page leading to structural domain explorations.
* **Static Only**: No database or complex backend requirements.
