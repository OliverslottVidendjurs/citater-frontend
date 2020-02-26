import Home from "./components/Home";
import CitaterByCategori from "./components/CitaterByCategori";
import AddCitat from "./components/AddOrEditCitat";

export default [
    {path: "/", component: Home},
    {path: "/kategori/:id", component: CitaterByCategori},
    {path: "/citat/add", component: AddCitat},
    {path: "/citat/edit/:id", component: AddCitat}
]