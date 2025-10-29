import contacts from "./pages-data/contacts";
import home from "./pages-data/home";
import houses from "./pages-data/houses";
import notFound from "./pages-data/not-found";
import success from "./pages-data/success";

const pagesConfig = {
  ...home,
  ...houses,
  ...success,
  ...notFound,
  ...contacts,
};

export default pagesConfig;
