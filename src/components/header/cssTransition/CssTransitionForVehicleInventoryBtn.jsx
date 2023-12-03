import { CSSTransition } from 'react-transition-group'
import styles from '../Header.module.css'

import jdmSports from '../../../pictures/jdmSports.jpg'
import jdmClassic from '../../../pictures/jdmClassic.jpg'
import nonJdm from '../../../pictures/nonJdm.jpg'
import { NavLink } from 'react-router-dom'

const CssTransitionForVehicleInventoryBtn = ({
  nodeRef,
  state,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={state.isMenuOpen}
      timeout={300}
      classNames="absoluteInventory"
      mountOnEnter
      unmountOnExit>
      <div
        ref={nodeRef}
        className={styles.absoluteInventory}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <NavLink
          to="/vehicle-inventory/jdm-sports"
          onClick={() => window.scrollTo(0, 0)}
          className={styles.sectionInventory}>
          <img src={jdmSports} alt="jdm-sports" />
          <p className={styles.textInSection}>JDM SPORTS</p>
        </NavLink>
        <NavLink
          to="/vehicle-inventory/jdm-classic"
          onClick={() => window.scrollTo(0, 0)}
          className={`${styles.sectionInventory} ${styles.borderSection}`}>
          <img src={jdmClassic} alt="jdm-classic" />
          <p className={styles.textInSection}>JDM CLASSIC</p>
        </NavLink>
        <NavLink
          to="/vehicle-inventory/non-jdm"
          onClick={() => window.scrollTo(0, 0)}
          className={styles.sectionInventory}>
          <img src={nonJdm} alt="non-jdm" />
          <p className={styles.textInSection}>NON JDM</p>
        </NavLink>
      </div>
    </CSSTransition>
  )
}

export default CssTransitionForVehicleInventoryBtn