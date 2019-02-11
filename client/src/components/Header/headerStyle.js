const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    nav: {
        backgroundColor: '#2196F3',
        marginBottom: '40px',
    },
    link: {
        textDecoration: 'none',
        color: '#fff',
        marginRight: '10px',
    },
    mobileLink: {
        textDecoration: 'none',
        color: 'inherit'
    },
    ul: {
        listStyleType: 'none',
    },
    li:{
        marginBottom: '15px',
        marginRight: "10px",
    },
    icon: {
        color: '#fff',
        margin: '10px  0px 0px 10px',
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
})

export default styles;