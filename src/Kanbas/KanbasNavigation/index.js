import './index.css';
import { FaNeos } from 'react-icons/fa';
import db from "../Database";
import IconItem from './icon';

function KanbasNavigation() {
  const icons = db.icons;
  return (
    <div className="container-fluid d-none d-sm-block wd-width-75px wd-center-text">
      <div className="wd-flex-col-container wd-darkbg-height">
        <div className="wd-paddingtop-10p wd-paddingbottom-10p">
          <FaNeos size={48} className="wd-fontcolor-darkred" />
        </div>
        {
          icons.map((icon, index) => {
            return(
              <IconItem key={index} iconIt={icon} />
            );
          })
        }
      </div>
    </div>
  );
}

export default KanbasNavigation;
