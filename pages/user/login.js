import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {addUser} from '../../store/actions/user';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns';
import Button from '@mui/material/Button';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {styled} from '@mui/material/styles';
import {purple} from '@mui/material/colors';

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"'
    ].join(','),
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf'
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)'
    }
});
const ColorButton = styled(Button)(({theme}) => ({
    color: theme
        .palette
        .getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700]
    }
}));

export default function Login() {
    const [loginInfo, setLoginInfo] = useState({
        userid: '',
        password: ''
    })
    const dispatch = useDispatch()
    const handleChange = e => {
        e.preventDefault()
        const {name, value} = e.target;
        setLoginInfo({...loginInfo,[name]: value})
    }
    return (
        <form onSubmit={
            e => {
                e.preventDefault()
                alert(' 진행 1: 로그인 클릭 ')
                dispatch(login(loginInfo))
                setLoginInfo({
                    userid:'', password:''
                })
                window.location.href = "/"
            }
          }>
        <table>
        
        </table>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
        <TextField
        id="userid"
        label="USER ID"
        placeholder="아이디를 입력하세요."
        multiline
        variant="standard"
        onChange={handleChange}
      />
      <TextField
        id="password"
        label="PASSWORD"
        placeholder="비밀번호를 입력하세요."
        multiline
        variant="standard"
        onChange={handleChange}
      />
        </Stack>
        <Stack spacing={2} direction="row" style={{marginTop:"20px", float: "right"}}>
            <ColorButton variant="contained" style={{width:"200px"}} type="submit">로그인</ColorButton>
            <BootstrapButton variant="contained" disableRipple="disableRipple" style={{width:"200px"}}>
                취소
            </BootstrapButton>
        </Stack>
    </LocalizationProvider>
        </form>
       
    );
}