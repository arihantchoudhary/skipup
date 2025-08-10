# SkipUp Frontend

A multi-tenant blog platform that allows organizations to create and manage their content with secure authentication and organization-based access control.

## Features

- **Multi-tenant Architecture**: Users can belong to multiple organizations
- **Organization-based Content**: Each organization has its own isolated blog space
- **User Authentication**: Complete auth flow powered by Clerk
- **Modern UI**: Built with Radix UI components and Tailwind CSS
- **Type-safe Database**: PostgreSQL with Drizzle ORM
- **Real-time Development**: Fast refresh with Turbopack

## Tech Stack

- **Framework**: Next.js 15.4.6 with App Router
- **Frontend**: React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI
- **Authentication**: Clerk
- **Database**: PostgreSQL with Drizzle ORM
- **Development**: Turbopack

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended)
- Docker and Docker Compose

### Installation

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Add your Clerk API keys and database connection string.

3. Start the database:
   ```bash
   docker-compose up -d
   ```

4. Push database schema:
   ```bash
   pnpm db:push
   ```

5. Run the development server:
   ```bash
   pnpm dev
   ```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production  
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm db:studio` - Open Drizzle Studio
- `pnpm db:push` - Push schema changes to database

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── component/         # Shared components
│   ├── org/[slug]/        # Organization-specific pages
│   └── page.tsx           # Landing page
├── components/            # UI components
│   └── ui/               # Radix UI components
├── db/                   # Database configuration
│   ├── index.ts          # Database connection
│   └── schema.ts         # Drizzle schema
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── docker-compose.yml    # Local PostgreSQL setup
```

## Database

The application uses PostgreSQL with a simple blog schema:

- **blog** table: `id`, `title`, `body`, `orgId`

Each blog post is associated with an organization, ensuring content isolation between different organizations.

## Authentication

Authentication is handled by Clerk, providing:

- User sign-up/sign-in
- Organization management
- Organization switching
- Protected routes

## Development

### Database Management

- View your database: `pnpm db:studio`
- Update schema: `pnpm db:push`
- Local database runs on port 5432

### Code Style

- ESLint configuration included
- TypeScript strict mode enabled
- Tailwind CSS for styling

## Deployment

This is a Next.js application that can be deployed on:

- Vercel (recommended)
- Netlify
- Any Node.js hosting platform

Make sure to:
1. Set up your production database
2. Configure environment variables
3. Run database migrations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

[Add your license information here]