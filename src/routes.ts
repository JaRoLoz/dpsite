import Index__SvelteComponent_ from "./pages/index.svelte";
import Media__SvelteComponent_ from "./pages/media.svelte";
import Tools__SvelteComponent_ from "./pages/tools.svelte";

const routes = {
    '/': Index__SvelteComponent_,
    "/media": Media__SvelteComponent_,
    "/tools": Tools__SvelteComponent_
}

export default routes;