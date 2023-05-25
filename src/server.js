import express from "express";

import { mongoConnect } from "./config/mongoConnect.config.js";
import { appConfig } from "./config/app.config.js";

import { appRouter } from "./routes/app.route.js";

const app = express();
const PORT = appConfig.PORT;
const HOST = appConfig.HOST;

app.use("/api", appRouter);

mongoConnect().then(() => {
	app.listen(PORT, () => {
		console.log(`Server running at http://${HOST}:${PORT}`);
	});
});
