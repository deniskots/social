import React from "react";
import {Button, IconButton, Typography} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EmailIcon from "@material-ui/icons/Email";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ChatIcon from "@material-ui/icons/Chat";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import {useHomeStyles} from "../pages/Home";

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>;

}

export const SideMenu: React.FC<SideMenuProps> = ({classes}:SideMenuProps): React.ReactElement => {
    return (
        <ul className={classes.sideBarList}>
            <li className={classes.sideBarListItem}>
                <IconButton aria-label="delete" color="primary">
                    <ArrowBackIosIcon/>
                </IconButton>
            </li>
            <li className={classes.sideBarListItem}>
                <div>
                        <SearchIcon/>
                    <Typography className={classes.sideBarListItemLabel}>Поиск</Typography>
                </div>
            </li>
            <li className={classes.sideBarListItem}>
                <div>
                        <NotificationsIcon/>
                    <Typography className={classes.sideBarListItemLabel}>Уведомления</Typography>
                </div>
            </li>
            <li className={classes.sideBarListItem}>
                <div>
                        <EmailIcon/>
                    <Typography className={classes.sideBarListItemLabel}>Сообщения</Typography>
                </div>
            </li>
            <li className={classes.sideBarListItem}>
                <div>
                        <BookmarkIcon/>
                    <Typography className={classes.sideBarListItemLabel}>Закладки</Typography>
                </div>
            </li>
            <li className={classes.sideBarListItem}>
                <div>
                        <ChatIcon/>
                    <Typography className={classes.sideBarListItemLabel}>Список</Typography>
                </div>
            </li>
            <li className={classes.sideBarListItem}>
                <div>
                        <AccountBoxIcon/>
                    <Typography className={classes.sideBarListItemLabel}>Профиль</Typography>
                </div>
                <Button className={classes.sideMenuButton} variant="contained" color="primary" fullWidth>
                    Опубликовать
                </Button>
            </li>
        </ul>
    )
};


