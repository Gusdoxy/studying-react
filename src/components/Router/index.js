import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Library from '../library/library'

function Directory () {
    return (
            <Router>
                <Routes>
                    <Route
                        path="../library/library",
                        element={<Library/>}
                    />
                </Routes>
            </Router>

    );
}

export default Directory;