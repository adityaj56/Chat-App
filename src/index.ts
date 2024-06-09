import { initApp } from "./app";
import config from "./config";

const start = async () => {
    const app = await initApp()
    const port = config.port
    try {
        await app.listen({ port: port})
        console.info(`server started at ${port}`)
    } catch (error) {
        console.error(error)
    }
}

start()
