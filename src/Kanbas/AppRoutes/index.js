import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import KanbasNavigation from '../KanbasNavigation';
import HeadingNav from '../HeadingNav';
import './index.css';
import Dashboard from '../Dashboard';
import Courses from '../Courses';

function AppRoutes() {
    const { pathname } = useLocation();

    const shouldDashboardHeadingNav = pathname.startsWith('/dashboard/');
    const shouldCoursesHeadingNav = pathname.startsWith('/courses');

    return (
        <div>
            <div className="wd-flex-row-container">
                <KanbasNavigation />
                <div className="container.fluid wd-paddingtop-20px wd-padding-left-3p wd-padding-right-3p wd-width-100p">
                    <div className="wd-flex-col-container wd-width-100p">
                        {shouldDashboardHeadingNav && <HeadingNav />}
                        <Routes>
                            {shouldDashboardHeadingNav && (
                                <Route path="/dashboard/" element={<Dashboard />} />
                            )}
                            {shouldCoursesHeadingNav && (
                                <Route path="Courses/:courseId/*" element={<Courses />} />
                            )}
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppRoutes;
