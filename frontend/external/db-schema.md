Since you are using **Sequelize** as your ORM, the generation process is slightly different than raw SQLite. You need the **Models** (which define the logic in your code) and the **Migrations** (which define the structure in the database).

Here are the two updated, high-precision prompts for your Gemini CLI.

### Prompt 1: Model & Interface Generation
Run this first to define the data structures and the relationships between your projects, experience, and feedback.

> "Act as a Senior Backend Engineer. In the `/backend` directory, generate **TypeScript Sequelize Models** for a professional portfolio system using **SQLite**. 
> 
> 1. **Project Model**: Fields for `id` (UUID), `title`, `category` (Enum: ERP, POS, WordPress, React), `description` (Text), `techStack` (DataTypes.JSON or STRING), `imageUrl`, `liveLink`, and `githubLink`.
> 2. **Experience Model**: Fields for `companyName`, `role`, `startDate`, `endDate` (nullable for 'Present'), and `contributions` (Text).
> 3. **Skill Model**: Fields for `name`, `category` (Frontend, Backend, Tools), and `iconName`.
>4. **Testimonial Model**: Fields for `clientName`, `clientCompany`, `rating` (Integer 1-5), and `message` (Text).
>
> **Requirements**:
> - Use the **Sequelize-TypeScript** decorator pattern or the standard `init` pattern with strict typing.
> - Include `createdAt` and `updatedAt` timestamps for all models.
> - Export all models from a central `index.ts` file.
> - Provide the **TypeScript Interfaces** for each model to be used in the Service layer."

---

### Prompt 2: Sequelize Migration & DB Setup
Run this second to create the physical database file and the "Standard" setup for production-ready migrations.

> "Now, generate the **Sequelize Migration** files for the models created previously. 
> 
> 1. **Migration Files**: Create individual files in a `/migrations` folder for `create-projects`, `create-experience`, `create-skills`, and `create-testimonials`.
> 2. **DB Configuration**: Generate a `config/config.json` (or `.ts`) file configured for **SQLite**. Set the storage path to `./database/portfolio.sqlite`.
> 3. **Initialization Script**: Provide a script for the `package.json` to run these migrations using the Sequelize CLI (`sequelize-cli db:migrate`).
> 4. **Standard Practices**: Ensure the migrations include `allowNull: false` where appropriate and use `DataTypes.UUID` for primary keys to maintain professional standards. 
> 5. **Constraints**: Ensure the `Testimonial` table has a `projectId` foreign key if a client wants to leave a review specifically for a project like the 'Jewelry ERP'."

---

### Why this is the "Standard" Way:


1.  **UUIDs over Integers:** Using UUIDs for your project IDs is a professional standard that prevents people from guessing how many projects or clients you have by looking at the URL.
2.  **JSON for Tech Stack:** Storing the tech stack as a JSON object in SQLite allows you to store an array like `['React', 'Tailwind', 'Node']` directly, which is much easier to map in your React frontend later.
3.  **Migration History:** By using migrations instead of `sync()`, you can track changes to your database over time, which is exactly how large-scale systems (like the ERPs you build) are managed.

