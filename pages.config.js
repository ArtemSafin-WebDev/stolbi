import contacts from "./pages-data/contacts";
import home from "./pages-data/home";
import houses from "./pages-data/houses";
import notFound from "./pages-data/not-found";
import success from "./pages-data/success";
import actual from "./pages-data/actual";
import event from "./pages-data/event";
import house from "./pages-data/house";

const pagesConfig = {
  ...home,
  ...houses,
  ...success,
  ...notFound,
  ...contacts,
  ...actual,
  ...event,
  ...house,
};

export default pagesConfig;
