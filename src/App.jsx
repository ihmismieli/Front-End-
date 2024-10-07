import TodoList from './TodoList'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';


import { useState } from 'react';




function App() {

  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Container maxWidth="lg">
      <CssBaseline />
      <Box sx={{ width: '100%' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange}>
              <Tab label="HOME" value="1" />
              <Tab label="TODOS" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Typography variant='h2'>Welcome to the Todo list</Typography>
            <Typography variant='body1'>Save your todos in the Todos tab.</Typography>
          </TabPanel>
          <TabPanel value="2">
            <TodoList />
          </TabPanel>
        </TabContext>
      </Box>
    </Container>


  )
};

export default App;
