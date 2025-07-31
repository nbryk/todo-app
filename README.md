# Todo App

This project is an interactive to-do list application that interacts with a REST API to manage tasks. The app allows users to add, delete, edit, and toggle the status of to-dos, with all changes being synchronized with a remote server.

### **Code Notes**

- The code is built with an emphasis on clean architecture and readability.
- It follows component-based development principles.
- Asynchronous requests are used for all API interactions to prevent blocking the UI.
- The project includes a complete implementation of the API interactions, including loading states and robust error handling.

## Preview link

- [DEMO LINK](https://nbryk.github.io/todo-app/)

---

## **Technologies**

- **React**
- **TypeScript**
- **SCSS**
- **Git**
- **GitHub Pages**

---

## **Features**

- **Task Management:**
  - **Add and Delete:** Easily create new to-dos and remove existing ones.
  - **Toggle Status:** Change a to-do's status between "completed" and "not completed."
  - **Edit Title:** Double-click a to-do's title to enable editing. Changes are saved on form submission (Enter key) or when the input field loses focus. Editing can be canceled with the Escape key.
- **API Interaction:**
  - **State Synchronization:** All changes (add, delete, update) are synchronized with the API.
  - **Loading and Error Handling:** A loader overlay is shown while waiting for an API response. The app provides clear notifications for update or deletion errors.
- **Bulk Actions:**
  - **"Toggle All" Checkbox:** A button to toggle the status of all visible to-dos. It is only active when all to-dos are already completed. The app intelligently sends requests only for the to-dos that have changed.
- **Usability:**
  - **Intuitive Controls:** The app supports hotkeys for saving (Enter) and canceling (Escape) edits, providing a seamless user experience.

## **Run locally**

1.  Clone the repository: git clone [link on repository]
2.  Open with VSCode: code todo-app
3.  Go to branch develop: git checkout develop
4.  Install the dependencies: npm install
5.  Run the project: npm start
6.  Open the address that the local server displays in your browser.
