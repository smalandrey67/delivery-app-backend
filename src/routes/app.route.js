import { Router } from "express";

import { shopsRoute } from "./shops.route.js";
import { orderRoute } from "./order.route.js";

export const appRouter = Router();

shopsRoute(appRouter);
orderRoute(appRouter);
