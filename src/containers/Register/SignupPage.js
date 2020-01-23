/*eslint-disable*/
import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";

import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Slider from "@material-ui/core/Slider";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Timeline from "@material-ui/icons/Timeline";
import Code from "@material-ui/icons/Code";
import Group from "@material-ui/icons/Group";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";
import Check from "@material-ui/icons/Check";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Footer from "../../components/Footer/Footer.js";
import GridContainer from "../../components/Grid/GridItem";
//import GridItem from "../../../components/Grid/GridItem.js";
import GridItem from "../../components/Grid/GridItem";
//import Button from "components/CustomButtons/Button.js";
import Button from "../../components/CustomButtons/Button";
// import Card from "components/Card/Card.js";
import Card from "../../components/Card/Card";
//import CardBody from "components/Card/CardBody.js";
import CardBody from "../../components/Card//CardBody";
import InfoArea from "../../components/InfoArea/InfoArea";
import CustomInput from "../../components/CustomInput/CustomInput.js";

// import signupPageStyle from "assets/jss/material-kit-pro-react/views/signupPageStyle.js";
import signupPageStyle from "../../assets/jss/material-kit-pro-react/views/signupPageStyle";

//this is the BACKGROUND image....
import image from "../../assets/img/bgRedRoad.png";

import { Input, TextField } from "@material-ui/core";
const useStyles = makeStyles({
    regBox: {
        border: "1px solid rgb(109, 84, 84)",
        boxShadow: "0 3px 6px rgb(216, 146, 146)",
        marginBottom: "10px",
        marginRight: "10px",
        maxWidth: "400px",
        paddingLeft: "10px",
        paddingTop: "10px"
        // paddingBottom: "20px"
    },
    regIntro: {
        fontSize: "14px"
        // paddingBottom: "20px"
    },
    textField200: {
        width: "200px"
    },
    textField320: {
        width: "320px"
    }
});

export default function SignUpPage({ ...rest }) {
    const classes = useStyles();
    const [crState, setCRState] = React.useState("GA");
    const [open, setOpen] = React.useState(false);
    const [openRole, setOpenRole] = React.useState(false);
    const [crRole, setCRRole] = React.useState("VOL");
    //const [open, setOpen] = React.useState(false);
    const marks = [
        {
            value: 1,
            label: "1"
        },
        {
            value: 2,
            label: "2"
        },
        {
            value: 3,
            label: "3"
        },
        {
            value: 4,
            label: "4"
        },
        {
            value: 5,
            label: "5"
        },
        {
            value: 6,
            label: "6"
        },
        {
            value: 7,
            label: "7"
        },
        {
            value: 8,
            label: "8"
        },
        {
            value: 9,
            label: "9"
        },
        {
            value: 10,
            label: "10"
        },
        {
            value: 11,
            label: "11"
        },
        {
            value: 12,
            label: "12"
        },
        {
            value: 13,
            label: "13"
        },
        {
            value: 14,
            label: "14"
        },
        {
            value: 15,
            label: "15"
        },
        {
            value: 16,
            label: "16"
        },
        {
            value: 17,
            label: "17"
        },
        {
            value: 18,
            label: "18"
        },
        {
            value: 19,
            label: "19"
        },
        {
            value: 20,
            label: "20"
        }
    ];
    function valuetext(value) {
        return `{value}`;
    }

    const handleChange = event => {
        console.log(event.target.id);
        setCRState(event.target.value);
    };

    const handleChangeRole = event => {
        console.log(event.target.id);
        setCRRole(event.target.value);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    const handleOpenRole = () => {
        setOpenRole(true);
    };
    const handleCloseRole = () => {
        setOpenRole(false);
    };
    const handleButtonClick = () => {
        console.log("registering....");
    };
    return (
        <div className={classes.regBox}>
            <div className={classes.regIntro}>
                Please provide the following information for your registration
            </div>
            <TextField label='First Name' id='firstName' size='small' />
            <TextField label='Last Name' id='lastName' size='small' />
            <br />
            <TextField
                className={classes.textField320}
                label='Email Address'
                id='email'
                size='small'
                length='50'
            />
            <br />
            <Checkbox value='checked' />
            Subscribe to CR National Newsletter?
            <br />
            <TextField
                label='Telephone'
                id='telephone'
                size='small'
                // paddingBottom='15px'
            />
            <br />
            <p> </p>
            <br />
            <hr color='blue' width='350px' />
            <TextField
                id='standard-number'
                label='Number Registering'
                type='number'
                InputLabelProps={{
                    shrink: true
                }}
            />
            <TextField
                className={classes.textField320}
                label='Church Name'
                id='crChurchName'
                size='small'
                length='50'
            />
            <br />
            <TextField label='City' id='crCity' size='small' length='50' />
            <br />
            <br />
            <Select
                labelId='crState'
                label='State'
                id='crState'
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={crState}
                onChange={handleChange}
            >
                <MenuItem value={"AL"}>Alabama</MenuItem>
                <MenuItem value={"FL"}>Florida</MenuItem>
                <MenuItem value={"GA"} selected>
                    Georgia
                </MenuItem>
                <MenuItem value={"KY"}>Kentucky</MenuItem>
                <MenuItem value={"MS"}>Mississippi</MenuItem>
                <MenuItem value={"NC"}>North Carolina</MenuItem>
                <MenuItem value={"SC"}>South Carolina</MenuItem>
                <MenuItem value={"TN"}>Tennessee</MenuItem>
                <MenuItem value={"VA"}>Virginia</MenuItem>
            </Select>
            <p>What is your role at your CR?</p>
            <Select
                labelId='crRole'
                label='Role'
                id='crRole'
                open={openRole}
                onClose={handleCloseRole}
                onOpen={handleOpenRole}
                value={crRole}
                onChange={handleChangeRole}
            >
                <MenuItem value={"ML"}>Ministry Leader</MenuItem>
                <MenuItem value={"TEAM"}>T.E.A.M. member</MenuItem>
                <MenuItem value={"VOL"} selected>
                    Volunteer
                </MenuItem>
                <MenuItem value={"ALL"}>Everything</MenuItem>
                <MenuItem value={"TBD"}>To Be Determined</MenuItem>
            </Select>
            <br />
            <br />
            <Button
                id='btnSubmit'
                variant='contained'
                color='primary'
                onClick={handleButtonClick}
            >
                REGISTER
            </Button>
        </div>
    );
}
