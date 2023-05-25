import { Router } from "express";

import { shopsRoute } from "./shops.route.js";

export const appRouter = Router();

shopsRoute(appRouter);
