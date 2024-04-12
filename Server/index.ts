import express, { Request, Response } from 'express';
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/checkout", (req: Request, res: Response) => {
  try {
    const order = req.body.order;
    const customer = req.body.customer;
    const paymentMethod = req.body.paymentMethod;

    if (!order || !customer || !paymentMethod) {
      return res.status(400).json({ message: "Invalid request." });
    }

    console.log(order, customer, paymentMethod);
    res.status(201).json({ message: "Order processed successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while processing the order." });
  }
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});