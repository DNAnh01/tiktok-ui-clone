import config from '~/config';

// Layouts
import { HeaderOnly } from '~/layouts';

// Pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

// Public routers
const publicRoutes = [
    { path: config.roures.home, component: Home },
    { path: config.roures.following, component: Following },
    { path: config.roures.profile, component: Profile },
    { path: config.roures.upload, component: Upload, layout: HeaderOnly },
    { path: config.roures.search, component: Search, layout: null },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
