import app from "./app";

const main = () => {
    app.listen(app.get("port"));
    console.log(`Servidor en puerto: ${app.get("port")}`);
};

main();