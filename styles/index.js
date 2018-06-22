const drawerWidth = 240;
let scrollbar = theme => ({
  overflowY: 'auto',
  height: '100vh',
  ['&::-webkit-scrollbar']: {
      height: 12,
      width: 12,
      overflow: 'visible',
    },
    ['&::-webkit-scrollbar-button']: {
      height: 0,
      width: 0,
    },

    ['&::-webkit-scrollbar-track']: {
      backgroundClip: 'padding-box',
      border: 'solid transparent',
      borderWidth: 3,
      borderRadius: 100,
      backgroundColor: theme.palette.grey[200],
    },

    ['&::-webkit-scrollbar-thumb']: {
      borderRadius: 100,
      backgroundClip: 'padding-box',
      border: 'solid transparent',
      borderWidth: 3,
      backgroundColor: theme.palette.grey[400],
    },

    ['&::-webkit-scrollbar-corner']: {
      background: 'rgba(255, 0, 0, 0)',
    },
});

export default theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  title: {
    flex: 1,
    marginLeft: 36,
  },
  headerButtons: {
    display: 'flex',
    flexWrap: 'warp',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    height: '100vh',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: -12,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px', ...theme.mixins.toolbar,
  },
  account: {
    display: 'flex',
    flexDirection: 'column',
    //justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    paddingTop: '100px',
    paddingBottom: '100px',
    ...scrollbar(theme),
  },
  accountForm: {
    width: '500px',
  },
  accountFormItem: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    width: 500,
  },
  checked: {
    ['&:hover']: {
      backgroundColor: theme.palette.action.hover,
    },
    backgroundColor: theme.palette.action.hover,
  },
  searchBar: {
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.secondary[500],
    paddingLeft: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    marginRight: 2 * theme.spacing.unit,
  },
  wordTitleWord: {
    marginBottom: theme.spacing.unit,
    fontSize: 40,
  },
  mainPaper: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    alignItems: 'stretch',
    height: '100vh',

  },
  wordCard: {
    ...scrollbar(theme),
  },
  learningState: {
    marginLeft: 5 * theme.spacing.unit,
  },
  errorSnackBar: {
    backgroundColor: theme.palette.error.main,
  },
  errorMessage: {
    display: 'flex',
    alignItems: 'center',
  },
  errorIcon: {
    marginRight: theme.spacing.unit,
  },
  home: {
    ...scrollbar(theme),
    display: 'flex',
    flexDirection: 'column',
  },
  banner: {
    height: '38vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    flexDirection: 'column',
    //backgroundColor: theme.palette.primary.dark,
  },
  bannerTitle: {
    color: theme.palette.primary.dark,
    textShadow: 'rgba(0,0,0,0.4) 0em 0.05em 0.1em',
    fontSize: '15vh',
  },
  bannerDescription: {
    color: theme.palette.primary.main,
    fontSize: '3vh',
    textShadow: 'rgba(0,0,0,0.2) 0em 0.05em 0.1em',
  },
  homeCards:{
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexGrow: 1,
    paddingLeft: '15vh',
    paddingRight: '15vh',
  },
  homeCard: {
    height: '30vh',
    width: '16vw',

  }
})
;
