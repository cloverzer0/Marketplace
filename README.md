# Candle (Vehicle Marketplace)

A car marketplace verification platform with buyer and seller roles. Sellers can list cars and request inspections. Based on the inspection outcome, the system automatically marks a car as verified or unverified. Buyers can browse listings and use the verification status to make more informed decisions, with inspection details available for inspected vehicles.

## What the Application Allows

- Sellers register cars they want to list
- Sellers can request an inspection
- The system processes and stores the inspection outcome
- Cars get a verified or unverified status
- Buyers can browse cars
- Buyers can view inspection results for verified cars

## Product Flow

### Seller Side

A seller:

1. Creates an account
2. Adds a car listing
3. Enters car details
4. Optionally requests an inspection

### Inspection Logic

- Inspection requested and car passes: Verified
- Inspection requested and car fails: Unverified
- No inspection requested: Unverified

### Buyer Side

A buyer:

1. Browses listed cars
2. Sees whether a car is verified or unverified
3. Opens a car page
4. Views inspection details (only when applicable)

## Main Features

### Seller Features

- Register / login
- Create a car listing
- Request an inspection
- View their cars and statuses

### Buyer Features

- Browse all cars
- Filter by verified / unverified
- View car details
- See inspection result for verified cars

### System Behavior

- Evaluates a car and decides whether it qualifies for verification
- Automatically assign verification badge
- Only show inspection report when one exists
- Update car verification status based on inspection result

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.