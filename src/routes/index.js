import Home from '~/Pages/Home';
import Loggin from '~/Pages/Loggin';
const publicRoute = [{ path: '/', element: Home }];

const privateRoute = [{ path: '/loggin', element: Loggin }];

export { publicRoute, privateRoute };
