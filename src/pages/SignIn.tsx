import React from "react";
import {Button, FormControl, FormGroup, makeStyles, TextField, Typography} from "@material-ui/core";
import {ModalBlock} from "../components/ModalBlock";




export const useStylesSignIn = makeStyles( (theme) => ({
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A9F16C',
        height: '100vh',
    },
    loginBlock: {
        display: 'block',
        textAlign: 'center',
        margin: ' auto',

    },
    loginBlockWrapper: {
        width: 380
    },
    loginBlockTitle: {
        fontWeight: 700,
        fontSize: 32,
        marginBottom: 35,
        marginTop: 20,
    },
    LoginBlockField: {
        marginBottom: 20
    },
    LoginSpaceInterval: {
        marginBottom: theme.spacing(3)
    }
}));


 export const SignIn: React.FC = (): React.ReactElement => {
     const classes = useStylesSignIn();
     const [visibleModal, setVisibleModal] = React.useState<'signIn'| 'signUp'>();

     const handleClickOpenSignIn = (): void => {
         setVisibleModal("signIn");
     };

     const handleClickOpenSignUp = (): void => {
         setVisibleModal("signUp");
     };

     const handleCloseModal = (): void => {
         setVisibleModal(undefined);
     };


     return (
         <div className={classes.wrapper}>
             <div className={classes.loginBlockWrapper}>
                 <div className={classes.loginBlock}>
                     <Typography className={classes.loginBlockTitle} variant="h4"> Hello World!</Typography>
                     <Typography> <b>Присойденяйтесь к нашей сети прямо сейчас!</b></Typography>
                     <br />
                     <Button onClick={handleClickOpenSignUp} style={{marginBottom: 10}} variant="contained" color="primary" fullWidth >
                         Зарегистрироваться
                     </Button>
                     <Button onClick={handleClickOpenSignIn} variant="outlined" color="primary" fullWidth >
                         Войти
                     </Button>
                     <ModalBlock visible={visibleModal =='signIn'}
                                 onClose={handleCloseModal}
                                 classes={classes}
                                 title="Войти в аккаунт">
                         <FormControl className={classes.LoginSpaceInterval}  component="fieldset" fullWidth>
                             <FormGroup aria-label="position" row>
                                 <TextField
                                     className={classes.LoginBlockField}
                                     autoFocus
                                     id="email"
                                     label="E-Mail"
                                     InputLabelProps={{
                                         shrink: true,
                                     }}
                                     variant="filled"
                                     type="email"
                                     fullWidth
                                 />
                                 <TextField
                                     className={classes.LoginBlockField}
                                     autoFocus
                                     id="password"
                                     label="Пароль"
                                     InputLabelProps={{
                                         shrink: true,
                                     }}
                                     variant="filled"
                                     type="password"
                                     fullWidth
                                 />
                                 <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth>
                                     Войти
                                 </Button>
                             </FormGroup>
                         </FormControl>
                     </ModalBlock>
                     <ModalBlock visible={visibleModal =='signUp'}
                                 onClose={handleCloseModal}
                                 classes={classes}
                                 title="Создание учетной записи">
                         <FormControl className={classes.LoginSpaceInterval} component="fieldset" fullWidth>
                             <FormGroup aria-label="position" row>
                                 <TextField
                                     className={classes.LoginBlockField}
                                     autoFocus
                                     id="name"
                                     label="Имя"
                                     InputLabelProps={{
                                         shrink: true,
                                     }}
                                     variant="filled"
                                     type="name"
                                     fullWidth
                                 />
                                 <TextField
                                     className={classes.LoginBlockField}
                                     autoFocus
                                     id="email"
                                     label="E-Mail"
                                     InputLabelProps={{
                                         shrink: true,
                                     }}
                                     variant="filled"
                                     type="email"
                                     fullWidth
                                 />
                                 <TextField
                                     className={classes.LoginBlockField}
                                     autoFocus
                                     id="password"
                                     label="Пароль"
                                     InputLabelProps={{
                                         shrink: true,
                                     }}
                                     variant="filled"
                                     type="password"
                                     fullWidth
                                 />
                                 <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth>
                                     Далее
                                 </Button>
                             </FormGroup>
                         </FormControl>
                     </ModalBlock>
                 </div>
             </div>
         </div>
     )
};


