import './index.css';
import { Link, useLocation } from 'react-router-dom';
import { FaUserNinja, FaTachometerAlt, FaBookDead, FaCalendarAlt, FaInbox, FaHistory, FaYoutube, FaArrowCircleRight, FaQuestion } from 'react-icons/fa';

const iconMapping = {
    FaUserNinja,
    FaTachometerAlt,
    FaBookDead,
    FaCalendarAlt,
    FaInbox,
    FaHistory,
    FaYoutube,
    FaArrowCircleRight,
    FaQuestion
};

const IconItem = ({
    iconIt = {
        link: "/account/",
        icon: "FaUserNinja",
        name: "Account"
    }
}) => {
    const { pathname } = useLocation();
    const isActive = pathname.includes(iconIt.link);
    const IconComponent = iconMapping[iconIt.icon];
    const linkClasses = `${isActive ? 'wd-lightbg' : 'wd-link-white'}`;
    const iconClasses = `wd-paddingtop-6p ${isActive ? 'wd-fontcolor-black' : 'wd-fontcolor-darkred'}`;
    
    return (
        <Link to={iconIt.link} className={linkClasses}>
            <div className={`wd-paddingtop-6p wd-paddingbottom-6p ${linkClasses}`}>
                <IconComponent size={32} className={iconClasses} />
                <br />
                <span className="wd-leftnav-fontsize-12_5px wd-word-wrap">{iconIt.name}</span>
            </div>
        </Link>
    );
} 

export default IconItem;
