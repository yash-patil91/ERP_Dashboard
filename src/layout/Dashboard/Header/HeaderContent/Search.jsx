// material-ui
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import { CircularProgress, Box } from '@mui/material';
import React, { useContext } from 'react';
import { DarkModeContext } from '../../../../components/DarkModeContext';
// import SearchIcon from "@mui/icons-material/Search";

// assets
import SearchOutlined from '@ant-design/icons/SearchOutlined';

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

export default function Search() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Box sx={{ width: '100%', ml: { xs: 0, md: 1 } }}>
      <Box
        sx={{
          display: "flex",
          width: "60%",
          // border: `1px solid white`,
          height:"1.4rem",
          borderRadius: 10,
          overflow: "hidden",
          background:darkMode ? '#3A3A5A' : 'radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%)',
          boxShadow: "4px 4px 10px 2px #00000040"
        }}
      >
        <input
          style={{
            width: "100%",
            outline: "none",
            border: "none",
            marginLeft: "20px",
            background:darkMode ? '#3A3A5A' : 'radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%)',
            color: "black",
          }}
          type="text"

          placeholder='Search...'
        />
        <button
          style={{
            padding: "5px 10px 5px 5px",
            cursor: "pointer",
            right: "12px",
            border: "none",
            background: "none",

          }}
        >
          <SearchOutlined style={{ color: "grey" }} />
        </button>
              
      </Box>
    </Box>
  );
}
