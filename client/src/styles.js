import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    appBar: {
        display: 'flex',
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '30px 0',
        borderRadius: 15,
    },
    heading: {
        color: 'rgb(0 81 112)',
        fontFamily: 'Dongle, sans-serif',
        fontFamily: 'Orelega One, cursive',
        fontFamily: 'Roboto Mono, monospace',
        fontFamily: 'Rowdies, cursive',
    },
    image: {
        marginLeft: '15px'
    },
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: 'column-reverse'
        }
    }
}))