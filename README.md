# TahananCrafts - E-commerce Website

A modern e-commerce website built with Django REST Framework backend and React.js frontend for artisan product management.

## Features

- **Product Management**: Add, edit, and manage artisan products
- **Image Gallery**: Upload and manage product images with drag-and-drop functionality
- **Category Management**: Organize products by categories
- **Responsive Design**: Modern, clean UI that works on all devices
- **RESTful API**: Django REST Framework backend with proper API endpoints

## Tech Stack

### Backend
- Django 4.2.7
- Django REST Framework 3.14.0
- SQLite (development)
- Pillow (image handling)

### Frontend
- React 18.2.0
- React Router DOM 6.8.1
- Axios (HTTP client)
- CSS3 (custom styling)

## Project Structure

```
tahanan-crafts/
├── backend/                 # Django backend
│   ├── tahanan_crafts/     # Main Django project
│   ├── products/           # Products app
│   ├── manage.py
│   └── requirements.txt
├── frontend/               # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
└── README.md
```

## Setup Instructions

### Prerequisites
- Python 3.8+
- Node.js 16+
- pip (Python package manager)
- npm (Node package manager)

### Backend Setup (Django)

1. **Navigate to the project directory:**
   ```bash
   cd "C:\COMPUTER SCIENCE\Thesis\THESIS WEBSITE\Front End\Artisan - Product Page"
   ```

2. **Create and activate a virtual environment:**
   ```bash
   python -m venv venv
   venv\Scripts\activate  # On Windows
   ```

3. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run database migrations:**
   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create a superuser (optional):**
   ```bash
   python manage.py createsuperuser
   ```

6. **Start the Django development server:**
   ```bash
   python manage.py runserver
   ```

   The backend will be available at `http://localhost:8000`

### Frontend Setup (React)

1. **Install Node.js dependencies:**
   ```bash
   npm install
   ```

2. **Start the React development server:**
   ```bash
   npm start
   ```

   The frontend will be available at `http://localhost:3000`

## API Endpoints

### Products
- `GET /api/products/` - List all products
- `POST /api/products/` - Create a new product
- `GET /api/products/{id}/` - Get product details
- `PUT /api/products/{id}/` - Update product
- `DELETE /api/products/{id}/` - Delete product
- `POST /api/products/{id}/upload_images/` - Upload product images
- `POST /api/products/{id}/set_primary_image/` - Set primary image

### Categories
- `GET /api/categories/` - List all categories
- `POST /api/categories/` - Create a new category

## Usage

1. **Access the Application:**
   - Open your browser and go to `http://localhost:3000`
   - You'll see the TahananCrafts product management interface

2. **Add a New Product:**
   - Fill in the product details in the left column
   - Upload images using the drag-and-drop area in the right column
   - Click "Save and Publish" to create the product

3. **Manage Images:**
   - Drag and drop images into the upload area
   - Images will appear as thumbnails below
   - Use the Delete/Cancel buttons to manage uploaded images

## Features Implemented

- Responsive layout with header, sidebar, and main content
- Product form with all required fields
- Image upload with drag-and-drop functionality
- Image gallery with thumbnail previews
- Modern, clean UI matching the design
- Django REST API with proper endpoints
- CORS configuration for frontend-backend communication

## Development Notes

- The project uses SQLite for development (easy to set up)
- Images are stored in the `media/products/` directory
- CORS is configured to allow requests from `localhost:3000`
- The React app proxies API requests to `localhost:8000`

## Next Steps

- Add user authentication
- Implement product listing and editing pages
- Add order management functionality
- Deploy to production with PostgreSQL
- Add image optimization and resizing
- Implement search and filtering

## Troubleshooting

- **CORS errors**: Make sure both servers are running and CORS is properly configured
- **Image upload issues**: Check that the `media` directory exists and has proper permissions
- **Database errors**: Run migrations with `python manage.py migrate`
- **Port conflicts**: Change ports in the respective configuration files if needed

