# NextGenPatients

NextGen Patients is an open-source project aimed at making medical advice and consultation easily accessible. This project allows patients (users, or you and me :) ) to conveniently access healthcare service and consultations, directly from our smartphones.

## Type of App

Progressive Web App (PWA)

## Core Stack (includes but not limited to the following):

Next.js, Appwrite, Zustand, AntDesign, TailwindCSS, JavaScript, Jest, Docker.

- **Next.js:** For Frontend.
- **Appwrite:** For Backend.
- **Zustand:** For state management.
- **AntDesign:** For UI components (when necessary).
- **TailwindCSS:** For easy responsiveness.
- **JavaScript:** For writing functions.
- **Jest:** For Testing.
- **Docker:** For Containerization.

## Key Features of App

- **Appointment Booking:** Schedule online medical appointments with ease, eliminating the need for unecessary physical visits.
- **Virtual Consultations:** Connect with doctors through video calls, audio calls, or chat, to seek medical advice.
- **Health Information DB:** Store and access your personal health records, including medical history, prescriptions, and test results, all within the app.
- **QR Code Ticketing:** Generate QR Code Tickets for booked schedules (in case of physical visit to a hospital).
- **Timers & Reminders:** Set reminders for medication schedules.
- **Health Tips and Resources:** Recieve health tips, and resources.
- **PWA:** No need to install from Appstore or Playstore.

## Getting Started

To contribute to [NextGenPatients](https://github.com/chukusuccess/NextGenPatients), you need to follow these steps:

1. **Fork** the repository by clicking the "Fork" button in the top-right corner of the GitHub page. This will create a copy of the project in your GitHub account.

2. **Clone** the forked repository to your local machine using the following command:

```bash
git clone https://github.com/chukusuccess/NextGenPatients.git
```

3. Navigate to the project directory:

```bash
cd NextGenPatients
```

4. While in the project directory, run the command below to install all dependencies needed in the project:

```bash
npm install
```

5. Create a new branch for your changes, replace "branch-name" with a descriptive name that reflects the purpose of your changes:

```bash
git checkout -b branch-name
```

## Contributing

Now that you have the project set up locally and a branch for your changes, you can start making contributions. Here are a few important guidelines to follow:

- **Do not push directly to the main branch:** The main branch is protected, and direct pushes are not allowed. Always work on your branch and submit changes via a pull request.

- **Keep your branch up to date:** Before making any changes, ensure that your local main branch is up to date by pulling the latest changes from the upstream repository. You can do this with the following commands:

```bash
git checkout main
git pull origin main
```

Then, switch back to your branch:

```bash
git checkout branch-name
```

- **Create meaningful and atomic commits:** Commit your changes with clear and concise messages that describe the purpose of each commit. Each commit should represent a logical, self-contained unit of work.

- **Be respectful and considerate:** When interacting with other contributors, maintain a friendly and professional tone. Value the ideas and opinions of others, and be open to constructive feedback.

- **Follow the project's code style and conventions:** Consistent code style makes collaboration easier. Familiarize yourself with the existing codebase and follow the established conventions.

## Submitting a Pull Request

Once you have completed your changes and tested them (as described in the next section), you are ready to submit a pull request (PR) to the main repository. To do this:

1. Push your branch to your forked repository:

```bash
git push origin branch-name
```

2. Visit the main repository on GitHub and click on the "New Pull Request" button.

3. Select your branch (branch-name) from the dropdown on the right-hand side.

4. Provide a descriptive title and description for your pull request, explaining the purpose and scope of your changes.

5. If your pull request addresses any existing issue, mention it using the GitHub keywords.

6. Click on the "Create Pull Request" button to submit your contribution.

7. Be responsive to feedback and participate in the discussion around your pull request. Make any necessary changes or improvements based on feedback from maintainers and reviewers.

## Testing

To maintain code quality, we use Jest as our testing framework. Before pushing any branches or changes, it is important to run the tests to ensure your modifications are functioning correctly and don't introduce regressions.

To run the tests locally, execute the following command:

```bash
npm test
```

Make sure that all the tests pass successfully before submitting your pull request.

## Code Style

Consistent code style is important for readability and maintainability. Please adhere to the established code style and conventions used in the project. If there are no specific guidelines, follow the prevalent patterns observed in the existing codebase.

## Contact

If you have any questions or need assistance, feel free to reach out to the project maintainers or contributors. You can typically find contact information on the project's repository.

## Learn More

Below are resources you can use to get started with and learn more about the technologies that were used in this project.

- [Next.js](https://nextjs.org/docs) - Documentation.
- [Appwrite](https://appwrite.io/docs) - Documentation.
- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) - Documentation.
- [AntDesign](https://ant.design/docs/react/introduce) - Documentation.
- [TailwindCSS](https://tailwindcss.com/docs/installation) - Documentation.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) -  Documentation.
- [Jest](https://jestjs.io/docs/getting-started) - Documentation.
- [Docker](https://docs.docker.com/get-started/) - Documentation.

## License

This project is licensed under the [GNU General Public License v3.0](COPYING.txt).

Thank you for your interest in contributing to [NextGenPatients](https://github.com/chukusuccess/NextGenPatients)! We greatly appreciate your time and effort in making this project better. Your contributions will help us deliver a high-quality and reliable software solution.
