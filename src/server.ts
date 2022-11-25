import app from "./app";

const init = async () => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
  });
}
init();