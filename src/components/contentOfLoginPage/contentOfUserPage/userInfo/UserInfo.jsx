import { useDispatch, useSelector } from '../../../shared/utils/reactImports'
import { setEdit } from '../../createAccountAndRegisteredAccount/alreadyRegisteredAccountSlice'
import swal from '../../../shared/utils/swalImports'

import userLogo from '../../../../assets/pictures/userLogo.jpg'

import styles from '../ContentOfUserPage.module.scss'

const stylesForTextAndButton = {
  text: {
    marginTop: '20px',
    width: '125px',
    fontFamily: 'Open Sans, sans-serif',
    fontSize: '15px',
  },
  btn: {
    marginTop: '10px',
    width: '100px',
    background: '#b90000',
    color: '#fff',
    padding: '5px 10px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontFamily: 'Pathway Gothic One, sans-serif',
    fontSize: '15px',
  },
}

const UserInfo = () => {
  const { accountInfo, activeUser } = useSelector(
    (store) => store.registeredAccount
  )

  const dispatch = useDispatch()

  return (
    <div className={styles.userInfo}>
      <div className={styles.userAvatarContainer}>
        <img src={userLogo} alt="user-avatar" />
      </div>

      <p style={stylesForTextAndButton.text}>
        {accountInfo.nameAccount} {accountInfo.secondName}
      </p>
      <p style={{ fontFamily: 'Open Sans, sans-serif', fontSize: '15px' }}>
        {accountInfo.emailAddress}
      </p>
      {activeUser ? (
        <button
          onClick={() => {
            dispatch(setEdit(true))
          }}
          style={stylesForTextAndButton.btn}
        >
          Edit Profile
        </button>
      ) : (
        <button
          onClick={() =>
            swal({
              title: 'Oops...',
              text: 'You are not registered or not logged in.',
            })
          }
          style={stylesForTextAndButton.btn}
        >
          Edit Profile
        </button>
      )}
    </div>
  )
}

export default UserInfo
