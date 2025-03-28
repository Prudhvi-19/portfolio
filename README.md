# Prudhvi Sairam Chundru - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing my professional experience, skills, projects, and contact information.

## 🌟 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, professional layout with smooth animations
- **Data-Driven**: Content separated from components for easy updates
- **Dynamic Sections**:
  - Hero section with call-to-action buttons
  - About Me with professional profile
  - Detailed Work Experience with project descriptions
  - Education history with relevant coursework
  - Skills categorized by type
  - Projects showcase with descriptions and links
  - Contact form with Formspree integration
- **Resume Download**: Direct download of resume PDF
- **Smooth Scrolling**: For better navigation experience
- **Contact Form Integration**: Using Formspree for easy message submission

## 🛠️ Technologies Used

- **React**: Frontend library for building the user interface
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Hooks**: For state management
- **Formspree**: Form submission handling
- **GitHub Pages**: For deployment

## 📋 Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Prudhvi-19/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and visit `http://localhost:3000`

## 📝 Customization

### Updating Content

All content is stored in data files in the `src/data` directory:

- `personalInfo.js`: Your name, title, contact information, etc.
- `experience.js`: Work experience and project details
- `education.js`: Education history and courses
- `skills.js`: Technical skills by category
- `projects.js`: Portfolio projects with descriptions
- `navLinks.js`: Navigation menu items
- `awards.js`: Awards and recognitions

To update any content, simply modify these files and your changes will be reflected throughout the site.

### Changing Colors and Styling

This project uses Tailwind CSS for styling. You can customize colors and other styling properties in the `tailwind.config.js` file:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        blue: {
          600: '#4F46E5', // Primary color
          // Add custom colors here
        },
      },
      // Add other customizations
    },
  },
  // ...
}
```

### Adding a Custom Favicon

1. Replace `public/favicon.svg` with your own SVG icon
2. Ensure the references in `public/index.html` are correct

## 📤 Deployment

This portfolio is configured for easy deployment to GitHub Pages:

1. Update the `homepage` field in `package.json` with your GitHub Pages URL:
   ```json
   "homepage": "https://yourusername.github.io/portfolio"
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

3. Your site will be available at the URL specified in your `homepage` field

## 📄 Resume

To update your resume:

1. Replace the file at `public/files/Prudhvi_Sairam_Chundru_Resume.pdf` with your updated resume
2. Ensure the path in `personalInfo.js` matches your file location:
   ```javascript
   resumeFile: "/files/Prudhvi_Sairam_Chundru_Resume.pdf"
   ```

## 📬 Contact Form

The contact form uses Formspree for handling submissions:

1. **Important**: You must update the Formspree endpoint in the Contact component with your own endpoint:
   ```javascript
   // In components/Contact.js, change this line:
   const response = await fetch('https://formspree.io/f/xeoalejv', {
   
   // Replace with your own Formspree endpoint:
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
   ```
   
   Without changing this, form submissions will go to the original creator's email address, not yours!

2. To get your own Formspree endpoint:
   - Sign up at [Formspree.io](https://formspree.io/)
   - Create a new form
   - Copy your unique form endpoint
   
3. After setting up your endpoint, submissions will be sent to your email
4. You can view and manage submissions in your Formspree dashboard

## 📱 Mobile Responsiveness

The portfolio is fully responsive and optimized for all screen sizes:

- Mobile-first approach
- Adaptive layout elements
- Responsive typography
- Mobile-friendly navigation

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/Prudhvi-19/portfolio/issues).

## 📞 Contact

Prudhvi Sairam Chundru - [chundru.prudhvisairam@gmail.com](mailto:chundru.prudhvisairam@gmail.com)

Project Link: [https://github.com/Prudhvi-19/portfolio](https://github.com/Prudhvi-19/portfolio)

---

Made with ❤️ by Prudhvi Sairam Chundru