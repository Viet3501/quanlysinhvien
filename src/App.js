import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoute, privateRoute } from '~/routes';
import { DefaultLayout } from '~/Components/Layout';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoute.map((route, index) => {
                        let Page = route.element;
                        let Layout = DefaultLayout;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
