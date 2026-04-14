Since you are using the **Gemini CLI in VS Code**, providing a structured, technical requirement document is the best way to ensure the AI generates precise, production-ready code. 

Below is the **Master Requirements Specification**. You can copy these sections directly into your CLI prompts.

---

## 1. Core Technical Stack & Architecture
* **Frontend:** React.js (Vite), TypeScript, Tailwind CSS.
* **Backend:** Node.js, Express.js, TypeScript.
* **Database:** SQLite (LibSQL/Turso recommended for cloud persistence).
* **Aesthetic:** Sharp-edged minimalist (No rounded corners: `rounded-none` only).
* **Responsiveness:** Mobile-first, fluid grid system (1-col mobile, 2-col tablet, 3-col desktop).

---

## 2. Functional Requirements (The "Dynamic" Feature)
The portfolio must not be hard-coded. It must fetch data from an API.

* **Public API Endpoints:** * `GET /api/projects`: Returns all projects (Jewelry ERP, LPG, etc.).
    * `GET /api/experience`: Returns the professional journey timeline.
    * `GET /api/skills`: Returns skills with category and icon name.
    * `GET /api/feedback`: Returns client ratings and messages.
* **Admin Persistence (Add Option):**
    * Create a simple **JSON Web Token (JWT)** protected admin dashboard at `/admin`.
    * Forms to **Add/Edit/Delete** entries for all the above sections.

---

## 3. Page Structure & Section Details

### **A. Hero & About Me**
* **Content:** Name, Title (Full-Stack Software Engineer), and a high-fidelity profile image.
* **Design:** Use a split-screen layout or a central focus with a sharp-bordered image frame.

### **B. My Journey (Experience Timeline)**
* **Content:** Company Name, Role, Date Range (Past few years), and Key Contributions.
* **Design:** A vertical line with "nodes." Use Framer Motion for a "draw-in" effect as the user scrolls.

### **C. Portfolio (Project Showcase)**
* **Categories:** Jewelry ERP & POS, LPG System, React Websites, WordPress Projects.
* **Card Requirements:** * **Image:** High-quality screenshot.
    * **Title/Company:** Name of the project and client/company.
    * **Tech Stack:** Visible icons/tags (React, Node, etc.).
    * **Description:** Use the **STAR method** (Situation, Task, Action, Result) for the ERP/POS systems to show complexity.

### **D. Skills & Services**
* **Skills:** Display as a grid. Each skill must have an icon (Lucide or Simple Icons).
* **Services:** Define your offerings (e.g., Full-stack Development, WordPress Customization, ERP Consultation).

### **E. Client Feedback (Social Proof)**
* **Content:** Message, Rating (1-5 stars), Client Name, Company, and Profile Image.
* **Design:** A horizontal slider or a masonry grid of sharp cards.

### **F. Contact Me**
* **Form:** Name, Email, Subject, and Message.
* **Integration:** Use **Nodemailer** on the backend to send emails to your Gmail.

---

## 4. UI/UX & Responsive Standards
* **Mobile View:** Project cards should occupy 100% width with clear, readable text.
* **Typography:** Professional sans-serif (e.g., Inter or Roboto). Use strict visual hierarchy (H1 > H2 > H3).
* **Performance:** All images must be lazy-loaded. Use compressed formats (WebP).
* **Accessibility:** WCAG compliant contrast ratios and ARIA labels.

---

## 5. Deployment Setup
* **Frontend:** Configured for Vercel/Netlify.
* **Backend:** Configured for Render/Railway with environment variables for database keys.
* **Database:** Turso (managed SQLite) connection string configuration.

---

### **How to use this with Gemini CLI:**
Instead of one giant prompt, feed these to your CLI in order:
1.  **Prompt 1:** *"Create a backend folder with Express and TypeScript. Implement a SQLite schema for Projects, Experience, Skills, and Feedback as per the 'Functional Requirements' list."*
2.  **Prompt 2:** *"Build a React frontend using Tailwind. Set a global theme for sharp corners and a minimalist dark-mode aesthetic. Build the Project Card component."*
3.  **Prompt 3:** *"Create the 'My Journey' timeline component using Framer Motion for scroll animations based on the 'Page Structure' requirements."*

**Would you like the specific code for the Database Schema or the Mailer integration first?**