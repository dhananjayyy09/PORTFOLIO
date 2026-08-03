# 3D Portfolio

A modern, responsive portfolio website featuring 3D elements built with React.js and Three.js.

## Features

- **3D Hero Section**: Interactive 3D computer model with responsive controls
- **Project Showcase**: Display of projects with parallax tilt cards
- **Tech Stack Display**: Visual representation of technical skills
- **Contact Form**: Functional form using EmailJS
- **Resume Section**: Download and view resume functionality
- **Responsive Design**: Mobile-friendly navigation and layout
- **Smooth Animations**: Framer Motion animations throughout

## Tech Stack 

- **Frontend**: React 18, TypeScript
- **3D Graphics**: Three.js, React Three Fiber, Drei
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Email Service**: EmailJS

## Setup Instructions

### Prerequisites

- Node.js
- NPM

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/portfolio.git
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables in `.env` file:
```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Run the development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## Project Structure

```
portfolio/
├── src/
│   ├── components/        # React components
│   │   ├── atoms/        # Small reusable components
│   │   ├── canvas/       # 3D Three.js components
│   │   ├── layout/       # Layout components (Navbar, Loader)
│   │   └── sections/     # Page sections (Hero, About, Contact, etc.)
│   ├── constants/        # Configuration and content data
│   ├── hoc/             # Higher-order components
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions
│   └── assets/          # Images and icons
├── public/              # Static assets and 3D models
└── Configuration files
```

## Configuration

Personalize the portfolio by editing:

- `src/constants/config.ts` - Personal information, hero text, section content
- `src/constants/index.ts` - Projects, technologies, services data
- `tailwind.config.cjs` - Color scheme and styling configuration

## License

This project is licensed under the MIT License.
