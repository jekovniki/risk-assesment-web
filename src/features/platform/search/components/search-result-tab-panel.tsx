
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

export const SearchResultTabs = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
        style={{backgroundColor: "#fff"}}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography  color="#445372">{children}</Typography>
          </Box>
        )}
      </div>
    );
  }