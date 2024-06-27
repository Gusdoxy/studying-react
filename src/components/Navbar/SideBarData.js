import HomeIcon from '@mui/icons-material/Home';
import BookIcon from '@mui/icons-material/Book';
import SettingsIcon from '@mui/icons-material/Settings';
import Router from '../Router'




export const SideBarData = [
    {
        title: "Home",
        icon: <HomeIcon/>,
        link: "./home"
    },
    {
        title: "Biblioteca",
        icon: <BookIcon/>,
        link: <library/>
    },
    {
        title: "Configurações",
        icon: <SettingsIcon/>,
        link: "./conf"
    }
]