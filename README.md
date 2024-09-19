This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Car Dealer Application

This is a car dealer application built with Next.js and TypeScript. The application allows users to filter vehicles by type and model year and view the results on a separate page.

## Structure

- **Filter Page:** Users can select a vehicle make and model year to filter vehicles.

- **Result Page:** Displays a list of vehicle models based on the selected make and model year.

## Installation

1. Clone the repository:
2. Install dependencies:

```bash
npm install
```

3.Create a `.env.local` file in the root directory with the following content:

    NEXT_PUBLIC_API_BASE_URL=https://vpic.nhtsa.dot.gov/api/

4.Run the development server:

```bash
npm run dev
```

5.Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
