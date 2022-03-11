import React from "react";
import {Button, Hidden, IconButton, Typography} from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import EmailIcon from "@material-ui/icons/Email";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ChatIcon from "@material-ui/icons/Chat";
import CreateIcon from '@material-ui/icons/Create';
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import {useHomeStyles} from "../pages/Home/theme";
import {ModalBlock} from "./ModalBlock";
import {AddPostForm} from "./AddPostForm";

interface SideMenuProps {
    classes: ReturnType<typeof useHomeStyles>;
}

export const SideMenu: React.FC<SideMenuProps> = ({classes}: SideMenuProps): React.ReactElement => {
    const [visibleAddPost, setVisibleAddPost] = React.useState<boolean>(false);

    const onClickOpenAddPost = () => {
        setVisibleAddPost(true);
    };

    const onCloseAddPost = () => {
        setVisibleAddPost(false);
    };


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
                    <Hidden smDown>
                        <Typography className={classes.sideBarListItemLabel}>Поиск</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideBarListItem}>
                <div>
                    <NotificationsIcon/>
                    <Hidden smDown>
                        <Typography className={classes.sideBarListItemLabel}>Уведомления</Typography>
                    </Hidden>

                </div>
            </li>
            <li className={classes.sideBarListItem}>
                <div>
                    <EmailIcon/>
                    <Hidden smDown>
                        <Typography className={classes.sideBarListItemLabel}>Сообщения</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideBarListItem}>
                <div>
                    <BookmarkIcon/>
                    <Hidden smDown>
                        <Typography className={classes.sideBarListItemLabel}>Закладки</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideBarListItem}>
                <div>
                    <ChatIcon/>
                    <Hidden smDown>
                        <Typography className={classes.sideBarListItemLabel}>Список</Typography>
                    </Hidden>
                </div>
            </li>
            <li className={classes.sideBarListItem}>
                <div>
                    <AccountBoxIcon/>
                    <Hidden smDown>
                        <Typography className={classes.sideBarListItemLabel}>Профиль</Typography>
                    </Hidden>
                </div>
                <Button onClick={onClickOpenAddPost} className={classes.sideMenuButton} variant="contained"
                        color="primary" fullWidth>
                    <Hidden smDown>Опубликовать</Hidden>
                    <Hidden mdUp>
                        <CreateIcon/>
                    </Hidden>
                </Button>
                <ModalBlock onClose={onCloseAddPost} visible={visibleAddPost} title="">
                    <div style={{width: 500}}>
                        <AddPostForm maxRows={10} classes={classes}/>
                    </div>

                </ModalBlock>
            </li>
        </ul>
    )
};


