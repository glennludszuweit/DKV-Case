# DKV Case - Angular 17 Vehicle Management Application

This project is an Angular 17 application designed to manage a list of vehicles. It utilizes modern Angular features, Tailwind CSS 4 for styling, and NgRx for state management.

## Technologies Used

* **Angular 17:**
    * Standalone Components: The application is built using Angular 17's standalone component architecture, eliminating the need for traditional NgModules.
    * `app.config.ts`: Configuration is managed through `app.config.ts`, simplifying provider setup.
    * `inject()`: Dependency injection is handled using the `inject()` function, providing a concise way to access services and other dependencies.
    * Signals: Signals are used for reactive state management within components, enabling efficient change detection and data flow.
    * Reactive Forms: Angular's Reactive Forms are used for managing form inputs, providing a robust and flexible way to handle user input.
    * FormBuilder: The `FormBuilder` service is used to create form groups and controls, simplifying form setup.
    * Reactive Data Passing: Data is passed reactively throughout the application using signals and observables, ensuring that changes are reflected in the UI.
* **Tailwind CSS 4:**
    * Utility-First Styling: Tailwind CSS 4 is used for styling the application, providing a utility-first approach that promotes rapid UI development.
    * JIT Engine: Tailwind CSS 4's Just-in-Time (JIT) engine is used for on-demand CSS generation, optimizing performance.
* **NgRx:**
    * State Management: NgRx is used for centralized state management, providing a predictable and scalable way to manage application state.
    * Actions, Reducers, Effects: NgRx actions, reducers, and effects are used to manage data flow and side effects.
    * NgRx Entity: NgRx Entity is used to manage collections of entities, simplifying data manipulation.
    * Selectors: NgRx selectors are used to retrieve data from the store, providing efficient data access.
* **Other:**
    * Typescript: Used for strongly typed code.
    * RxJS: Used for reactive programming.

## Project Structure

* `src/app/`: Contains the application's components, services, and NgRx store.
    * `src/app/components/`: Contains the application's components.
    * `src/app/models/`: Contains the application's data models.
    * `src/app/store/`: Contains the NgRx store modules.
    * `src/app/services/`: Contains the services for api calls.
    * `src/app/toast/`: custom toast component.
* `src/assets/`: Contains static assets such as images.
* `src/styles.css`: Contains global styles.
* `tailwind.config.js`: Tailwind CSS configuration file.
* `postcss.config.js`: PostCSS configuration file.
* `app.config.ts`: Angular 17 application configuration.

## Setup Instructions

1.  **Clone the Repository:**

    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

3.  **Run the Application:**

    ```bash
    ng serve
    ```

4.  **Open in Browser:**

    * Open your browser and navigate to `http://localhost:4200/`.

## Key Features

* **Vehicle List:** Displays a list of vehicles, sorted alphabetically by name.
* **Vehicle Details:** Displays detailed information for a selected vehicle.
* **Add Vehicle:** Allows users to add new vehicles to the list.
* **Error Handling:** Implements robust error handling for API calls and other operations.
* **Toast Notifications:** Provides user feedback through toast notifications for successful and failed operations.
* **Reactive State Management:** Uses signals and NgRx for reactive state management.
* **Responsive Design:** Uses Tailwind CSS for a responsive and visually appealing user interface.

## NgRx State Management

* The application uses NgRx to manage the state of the vehicle list and vehicle details.
* Actions are dispatched to trigger state changes.
* Reducers update the state based on the actions.
* Effects handle side effects such as API calls.
* Selectors retrieve data from the store.

## Signal Usage

* Signals are used for reactive state management within components.
* Signals are used to manage the state of the vehicle list, vehicle details, and toast notifications.
* Signals are used to pass data between components.

## Reactive Forms

* Reactive Forms are used to manage form inputs for adding vehicles.
* The `FormBuilder` service is used to create form groups and controls.
* Reactive Forms provide a robust and flexible way to handle user input.

## Tailwind CSS 4

* Tailwind CSS 4 is used for styling the application.
* Utility classes are used to style the components.
* Tailwind CSS 4 provides a responsive and visually appealing user interface.

## Future Enhancements

* Implement search and filtering functionality.
* Add unit and integration tests.
* Improve accessibility.
* Add more detailed vehicle information.