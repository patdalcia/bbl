export { renderers } from '../renderers.mjs';

const page = () => import('../chunks/prerender_bp-k4zyh.mjs').then(n => n.C);

export { page };
