import { useState } from 'react'
import {
  Container,
  Box,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  AppBar,
  Toolbar,
  List,
  ListItem,
  Typography,
} from '@mui/material'

import SearchIcon from '@mui/icons-material/Search'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'

import headerLogo from '../../pictures/head-logo.png'
import jdmSports from '../../pictures/jdmSports.jpg'
import jdmClassic from '../../pictures/jdmClassic.jpg'
import nonJdm from '../../pictures/nonJdm.jpg'

import styles from './Header.module.css'

const Header = () => {
  const [searchCategory, setSearchCategory] = useState('Maker')
  const [searchInput, setSearchInput] = useState('')

  const [isMenuOpen, setMenuOpen] = useState(false)
  const [isMenuTwoOpen, setMenuTwoOpen] = useState(false)
  const [isMenuThreeOpen, setMenuThreeOpen] = useState(false)

  const handleMouseEnter = () => {
    setMenuOpen(true)
  }

  const handleMouseLeave = () => {
    setMenuOpen(false)
  }
  const handleMouseEnterTwo = () => {
    setMenuTwoOpen(true)
  }

  const handleMouseLeaveTwo = () => {
    setMenuTwoOpen(false)
  }
  const handleMouseEnterThree = () => {
    setMenuThreeOpen(true)
  }

  const handleMouseLeaveThree = () => {
    setMenuThreeOpen(false)
  }

  // Функции для обновления состояний при изменении ввода
  const handleCategoryChange = (e) => {
    setSearchCategory(e.target.value)
  }

  const handleInputChange = (e) => {
    setSearchInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ваши действия при отправке формы
    console.log('Категория:', searchCategory)
    console.log('Поиск:', searchInput)
  }

  const handleSearchButtonClick = () => {
    // Ваши действия при нажатии кнопки поиска
    console.log('Категория:', searchCategory)
    console.log('Поиск:', searchInput)
  }
  return (
    <Box className={styles.headerOverflow}>
      <Box className={styles.headerRegisterOverflow}>
        <Container>
          <Box className={styles.registration}>
            <p>Log in</p>
          </Box>
        </Container>
      </Box>
      <Container>
        <Box className={styles.mainHeaderBg}>
          <Box className={styles.headerLogoContainer}>
            <img src={headerLogo} alt="JDMexpoLogo" />
          </Box>

          <Box className={styles.infoAndSearchContainer}>
            <Box className={styles.facebookContainer}>
              <Button variant="contained">
                <span>
                  <ThumbUpIcon sx={{ width: 15 }} />
                </span>
                <span>Follow</span>
                <span className={styles.textInSpanFacebook}>125K</span>
              </Button>
              <Button variant="contained" className={styles.shareFacebook}>
                <span>Share</span>
              </Button>
            </Box>
            <Box className={styles.contactContainer}>
              <Box className={styles.phone}>
                <p>+81-573-66-5670</p>
              </Box>
              <Box className={styles.email}>
                <p>info@jdm-expo.com</p>
              </Box>
            </Box>
            <Box className={styles.formAndBtnContainer}>
              <Box className={styles.containerSearch}>
                <form onSubmit={handleSubmit}>
                  <FormControl className={styles.formController}>
                    <Select
                      className="selectionOpt"
                      name="filter_type"
                      value={searchCategory}
                      onChange={handleCategoryChange}>
                      <MenuItem value="Maker">Maker</MenuItem>
                      <MenuItem value="HONDA">HONDA</MenuItem>
                      <MenuItem value="MAZDA">MAZDA</MenuItem>
                      <MenuItem value="MITSUBISHI">MITSUBISHI</MenuItem>
                      <MenuItem value="NISSAN">NISSAN</MenuItem>
                      <MenuItem value="SUBARU">SUBARU</MenuItem>
                    </Select>
                  </FormControl>
                  <input
                    name="searchInput"
                    value={searchInput}
                    onChange={handleInputChange}
                    placeholder="I am looking for..."
                  />
                </form>
              </Box>
              <Box className={styles.afterContainer}>
                <Box
                  className={styles.submitBtn}
                  onClick={handleSearchButtonClick}>
                  <SearchIcon className={styles.searchIco} />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <AppBar position="static" className={styles.appBar}>
          <Toolbar className={styles.toolbarContainer}>
            <List className={styles.lists}>
              <ListItem className={styles.listItem}>
                <HomeRoundedIcon className={styles.homeBtn} />
                HOME
              </ListItem>
              <ListItem
                className={`${styles.listItem} ${
                  isMenuOpen ? styles.openMenu : ''
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                VEHICLE INVENTORY
              </ListItem>
              <ListItem className={styles.listItem}>JAPAN CAR AUCTION</ListItem>
              <ListItem
                className={`${styles.listItem} ${
                  isMenuTwoOpen ? styles.openMenu : ''
                }`}
                onMouseEnter={handleMouseEnterTwo}
                onMouseLeave={handleMouseLeaveTwo}>
                COMPANY PROFILE
              </ListItem>
              <ListItem className={styles.listItem}>USA JDM IMPORTS</ListItem>
              <ListItem className={styles.listItem}>HOW TO BUY?</ListItem>
              <ListItem
                className={`${styles.listItem} ${
                  isMenuThreeOpen ? styles.openMenu : ''
                }`}
                onMouseEnter={handleMouseEnterThree}
                onMouseLeave={handleMouseLeaveThree}>
                SOCIAL MEDIA
              </ListItem>
              <ListItem className={styles.listItem}>CONTACT US</ListItem>
              <ListItem className={styles.listItem}>FAQ</ListItem>
            </List>
          </Toolbar>
          {isMenuOpen && (
            <Box
              className={styles.absoluteInventory}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <Box className={styles.sectionInventory}>
                <img src={jdmSports} alt="jdm-sports" />
                <Typography className={styles.textInSection}>
                  JDM SPORTS
                </Typography>
              </Box>
              <Box
                className={`${styles.sectionInventory} ${styles.borderSection}`}>
                <img src={jdmClassic} alt="jdm-classic" />
                <Typography className={styles.textInSection}>
                  JDM CLASSIC
                </Typography>
              </Box>
              <Box className={styles.sectionInventory}>
                <img src={nonJdm} alt="non-jdm" />
                <Typography className={styles.textInSection}>
                  NON JDM
                </Typography>
              </Box>
            </Box>
          )}
          {isMenuTwoOpen && (
            <Box
              className={styles.companyProfile}
              onMouseEnter={handleMouseEnterTwo}
              onMouseLeave={handleMouseLeaveTwo}>
              <Box className={styles.companySection}>
                <Typography className={styles.textInCompany}>
                  ABOUT US
                </Typography>
              </Box>
              <Box
                className={`${styles.companySection} ${styles.borderCompanySectionOne}`}>
                <Typography className={styles.textInCompany}>
                  OUR SERVICES
                </Typography>
              </Box>
              <Box
                className={`${styles.companySection} ${styles.borderCompanySectionTwo}`}>
                <Typography className={styles.textInCompany}>
                  WHY CHOOSE US
                </Typography>
              </Box>
              <Box className={styles.companySection}>
                <Typography className={styles.textInCompany}>
                  TESTIMONIALS
                </Typography>
              </Box>
            </Box>
          )}

          {isMenuThreeOpen && (
            <Box
              className={styles.companyProfile}
              onMouseEnter={handleMouseEnterThree}
              onMouseLeave={handleMouseLeaveThree}>
              <Box className={styles.companySection}>
                <Typography className={styles.textInCompany}>MEDIA</Typography>
              </Box>
              <Box
                className={`${styles.companySection} ${styles.borderCompanySectionOne}`}>
                <Typography className={styles.textInCompany}>BLOG</Typography>
              </Box>
              <Box
                className={`${styles.companySection} ${styles.borderCompanySectionTwo}`}>
                <Typography className={styles.textInCompany}>
                  FACEBOOK
                </Typography>
              </Box>
              <Box className={styles.companySection}>
                <Typography className={styles.textInCompany}>FORUM</Typography>
              </Box>
            </Box>
          )}
        </AppBar>
      </Container>
      <Box className={styles.underHeader} />
    </Box>
  )
}

export default Header