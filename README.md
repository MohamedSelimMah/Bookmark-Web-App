# Django Authentication API

This project implements a simple authentication system to manage **user registration** and **login** functionality using Django.

## Features

- **User Registration**: Allows users to register with necessary account details.
- **User Login**: Handles user authentication and login process.
- **API Driven**: Based on Django CBVs (Class-Based Views) for clean and modular code.

## Endpoints

The following endpoints are available:

1. **Register**
   - **URL**: `/register/`
   - **Method**: `POST`
   - **Description**: Allows users to register by sending their details (e.g., username, email, password).

2. **Login**
   - **URL**: `/login/`
   - **Method**: `POST`
   - **Description**: Authenticates a user and returns a session or token for further API interactions.

## Project Structure
my_project/ ├── my_project/ │ ├── settings.py # Django settings │ ├── urls.py # Global URL configuration │ └── wsgi.py # WSGI application entry point ├── app_name/ │ ├── views.py # Contains RegisterView and LoginView │ ├── urls.py # App-specific URL configuration (register and login routes) │ ├── models.py # Database models for user management │ ├── serializers.py # (Optional) Handles API data validation and serialization │ └── tests.py # Unit tests for the application └── manage.py # Django management script

## Installation

### 1. Clone the Repository
```bash
git clone https://github.com/username/repo-name.git
cd repo-name
```

### 2. Create and Activate a Virtual Environment
```bash
python -m venv env
source env/bin/activate    # On Windows use: `env\Scripts\activate`
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Run Migrations
```bash
python manage.py migrate
```

### 5. Start the Development Server
```bash
python manage.py runserver
```

### 6. Test the Endpoints
Use tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to test the `/register/` and `/login/` endpoints.

## Usage

- The **RegisterView** and **LoginView** are imported into `urls.py` and mapped directly to the respective endpoints to handle user actions.
- Customize or extend the views to include token-based authentication or additional fields based on your project requirements.

## Contributions

Contributions are welcome! Feel free to fork the repository and submit pull requests.
