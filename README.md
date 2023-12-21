# Mnemosyne

Mnemosyne is a web application built with Next.js that facilitates authentication and authorization. It enables users to save and share prompts for use in ChatGPT.

## Tech Stack

### Client

- React.js
- Tailwind CSS

### Server

- MongoDB
- Mongoose
- NextAuth

## Features

- **Authentication and Authorization:** Secure user authentication and authorization system.
- **Prompt Management:** Ability to create, save, and share prompts for ChatGPT.
- **Next.js Framework:** Leveraging Next.js for server-side rendering and seamless client-side navigation.
- **Database Integration:** Utilizing MongoDB and Mongoose for efficient database management.
- **Responsive Design:** Responsive UI design using Tailwind CSS for a seamless user experience across devices.

## User Stories

### Version 1.0 (Initial Release)

- [x] As a user, I want to register an account on Mnemosyne using oauth2, so I can access the application's features.
- [x] As a registered user, I want to log in to my Mnemosyne account securely, so I can access my saved prompts.
- [x] As a logged-in user, I want to create a new prompt, specifying the description and tags, and save it to my profile.
- [x] As a user, I want to view a list of available prompts, categorized by tags, so I can choose the ones I want to save.
- [x] As a registered user, I want the ability to edit or delete prompts I have previously created.
- [x] As a registered user, I want to have a profile page where I can view and manage my prompts.
- [x] As a user, I want to search for prompts based on specific keywords or tags to find relevant content quickly.
- [x] As a user, I want the application to have a responsive design, ensuring usability across various devices.

### Version 1.1 (Updates and Enhancements)

- [x] As a user, I want to see skeleton components when the data is loading.
- [x] As a registered user, I want to have the ability to make my prompts private.
- [ ] As a user, I want to have the ability to group and organize saved prompts into custom collections.
- [ ] As a user, I want to have an option to favorite or mark specific prompts as important for quick access.

## Lessons Learned

### Challenges Faced

- Implementing user authentication with NextAuth and handling secure routes.
- Integrating MongoDB with the server-side code and managing database operations effectively.

### Learnings

- Gained a deeper understanding of authentication and authorization mechanisms.
- Enhanced skills in using Next.js for server-side rendering and routing.
- Learned efficient database handling using MongoDB and Mongoose.

## Feedback

If you have any feedback, please reach out to us at gregorio.atwork@gmail.com
