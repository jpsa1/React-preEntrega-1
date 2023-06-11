import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import CategoryIcon from '@mui/icons-material/Category';
import ClassIcon from '@mui/icons-material/Class';
import AutoAwesomeMosaicIcon from '@mui/icons-material/AutoAwesomeMosaic';
import BookmarkIcon from '@mui/icons-material/Bookmark';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 'auto' }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Categoria 1"
        value="recents"
        icon={<CategoryIcon />}
      />
      <BottomNavigationAction
        label="Categoria 2"
        value="favorites"
        icon={<ClassIcon />}
      />
      <BottomNavigationAction
        label="Categoria 3"
        value="nearby"
        icon={<AutoAwesomeMosaicIcon />}
      />
      <BottomNavigationAction label="Categoria 4" value="folder" icon={<BookmarkIcon />} />
    </BottomNavigation>
  );
}