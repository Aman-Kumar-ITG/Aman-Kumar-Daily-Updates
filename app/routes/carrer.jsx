// app/routes/api.carrier.js (Remix route)
import { json } from "@remix-run/node";

export async function loader() {
  return null;
}

export async function action({ request }) {
  const body = await request.json();
  console.log("Shipping request:", body);

  // Example: cart weight/price dekh ke shipping calculate karo
  const rates = [
    {
      service_name: "Standard Shipping",
      service_code: "standard",
      total_price: "5000", // paisa (5000 = ₹50.00)
      currency: "USD",
    },
    {
      service_name: "Express Shipping",
      service_code: "express",
      total_price: "10000", // paisa (₹100.00)
      currency: "USD",
    },
  ];

  return json({ rates });
}
