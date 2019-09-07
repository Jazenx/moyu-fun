import React from 'react'
import styled from 'styled-components'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import FolderIcon from '@material-ui/icons/Folder'
import RestoreIcon from '@material-ui/icons/Restore'
import FavoriteIcon from '@material-ui/icons/Favorite'
import LocationOnIcon from '@material-ui/icons/LocationOn'

const FooterNav = styled(BottomNavigation)`
  width: 500;
`

const Footer: React.FC = () => {
  const [value, setValue] = React.useState('recents')

  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue)
  }
  return (
    <FooterNav value={value} onChange={handleChange}>
      <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
      <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
    </FooterNav>
  )
}

export default Footer
