# Mini E-Commerce Platform

A full-stack e-commerce platform built with Next.js, React, Node.js, Express, and MongoDB. Features product listings, shopping cart, user authentication, and order management.

## Features

- ✅ Product listing with filtering and search
- ✅ Shopping cart with quantity control
- ✅ User authentication (login/register)
- ✅ Checkout process with form validation
- ✅ Order history and tracking
- ✅ Responsive design with Tailwind CSS
- ✅ State management with React Context
- ✅ RESTful API with Express.js
- ✅ MongoDB database with Mongoose

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT tokens
- **Form Validation**: React Hook Form with Zod
- **State Management**: React Context API
- **Styling**: Tailwind CSS

## Prerequisites

- Node.js 16+ 
- MongoDB (local or cloud instance)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mini-ecommerce-platform
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```
Edit `.env` with your MongoDB connection string and JWT secret.

4. Start MongoDB (if using local instance):
```bash
mongod
```

5. Seed the database with sample products:
```bash
node server/seedData.js
```

6. Start the development servers:

Terminal 1 - Backend:
```bash
npm run dev:server
```

Terminal 2 - Frontend:
```bash
npm run dev
```

7. Open your browser and navigate to:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Project Structure

```
├── app/                 # Next.js app directory
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   ├── products/        # Products page
│   ├── checkout/        # Checkout page
│   └── orders/          # Orders page
├── components/          # React components
│   ├── Header.tsx       # Navigation header
│   ├── AuthModal.tsx    # Login/register modal
│   ├── CartSidebar.tsx  # Shopping cart sidebar
│   └── SearchBar.tsx    # Product search component
├── context/             # React context providers
│   ├── AuthContext.tsx  # Authentication context
│   └── CartContext.tsx  # Shopping cart context
├── server/              # Backend server
│   ├── index.js        # Express server setup
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   ├── middleware/     # Custom middleware
│   └── seedData.js     # Database seeding script
└── Configuration files  # package.json, tsconfig.json, etc.
```

## API Endpoints

- `GET /api/products` - Get all products (with optional filtering)
- `GET /api/products/:id` - Get single product
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/verify` - Verify JWT token
- `GET /api/cart` - Get user's cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update/:id` - Update cart item quantity
- `DELETE /api/cart/remove/:id` - Remove item from cart
- `GET /api/orders` - Get user's orders
- `POST /api/orders` - Create new order
- `GET /api/users/profile` - Get user profile

## Sample Data

The database comes pre-seeded with 12 sample products across different categories:
- Electronics (headphones, smartphones, mouse)
- Clothing (t-shirts, backpack)
- Sports (running shoes, yoga mat)
- Books (coffee table book)
- Home (coffee mug, desk lamp, water bottle)
- Beauty (skincare set)

## Usage

1. **Browse Products**: Visit the products page to see all available items
2. **Search & Filter**: Use the search bar and filters to find specific products
3. **Add to Cart**: Click "Add to Cart" on any product
4. **View Cart**: Click the cart icon to review your items
5. **Checkout**: Proceed to checkout (requires login)
6. **Create Account**: Register or login to complete purchase
7. **View Orders**: After purchase, view your order history

## Development

To add new features:

1. Create new components in `/components`
2. Add API routes in `/server/routes`
3. Update database models in `/server/models`
4. Add context providers in `/context`

## Deployment

### Frontend (Vercel):
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Backend (Railway/Render):
1. Connect your repository
2. Set environment variables
3. Set build command: `npm install`
4. Set start command: `npm run server`

### Database (MongoDB Atlas):
1. Create free cluster on MongoDB Atlas
2. Get connection string
3. Update `.env` file

## Environment Variables

```env
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your-super-secret-jwt-key
PORT=5000
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for learning and development purposes.
# my-portfolio-task1-futureinterns-
