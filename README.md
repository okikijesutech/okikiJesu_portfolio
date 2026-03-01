# Oluwasina OkikiJesu - Portfolio 

A highly interactive, modern portfolio designed to showcase projects, skills, and work experience as a frontend engineer. Built with a focus on clean architecture, polished UI/UX, smooth animations, and zero-compromise performance.

## 🚀 Live Preview
**[Access the Live Site Here](https://okikijesutech.vercel.app/)**

---

## 🛠️ Tech Stack & Architecture

- **Framework:** React 19 + TypeScript + Vite
- **Styling Architecture:** Tailwind CSS v4 (Zero-config utility classes)
- **Animation Engine:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **SEO Optimization:** Fully optimized with Open Graph and Twitter Card tags (`@okikioluwasina`)

### 🌟 Key Enhancements & Refactoring Features
*   **Tailwind CSS Integration:** The entire codebase leverages Tailwind CSS v4 utility classes, strictly enforcing DRY principles and eliminating massive inline style blocks.
*   **Reusable Component Architecture:** Features abstract wrappers like `<FadeIn>` to centralize layout animations, rendering the components scalable and highly readable.
*   **Magnetic Custom Cursor:** A custom `<CustomCursor />` built with Framer springs that intelligently tracks the mouse and expands when hovering over interactive elements.
*   **Parallax Scrolling:** Advanced 3D depth-of-field effects applied to background accent elements (like the About section portrait).
*   **Dynamic Scroll Reveal:** Sections fade and slide into view seamlessly utilizing the `<FadeIn>` component as the user navigates down the page.
*   **Animated Timeline:** A robust, tab-based `<Experience />` component for organizing work history.

---

## 💻 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/okikijesutech/okikiJesu_portfolio.git
   cd okikijesu_portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   > The application will typically run on `http://localhost:5173`

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📂 Project Structure Highlights
*   `src/components/About.tsx` - Bio, skillset, and Parallax portait.
*   `src/components/Projects.tsx` - Featured engineering projects including **Omoluabi** and **Chat-ME**.
*   `src/components/SectionHeader.tsx` & `FadeIn.tsx` - Shared, reusable layout abstractions.
*   `src/components/CustomCursor.tsx` - The system-wide interactive pointer logic.
*   `index.html` - Static SEO metadata injection point.

---
*Designed & Built by [Oluwasina OkikiJesu](https://github.com/okikijesutech).*
