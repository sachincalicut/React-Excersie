import './App.css';
import { Button, Container, Input, Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import theme from './components/Layout/theme';
import MyButton from './components/Layout/button';
import Header from './components/Header/Header'
function App() {
    return (
            <div>
                <ThemeProvider theme={theme}>
      <Container
        sx={{
          maxWidth: "400px",
        }}
      >
        <Paper
          sx={{
            marginTop: "2rem",
            padding: "1rem",
          }}
        >
          <Input fullWidth placeholder="First Name" />
          <Input fullWidth placeholder="Last Name" />
          <Input fullWidth placeholder="Email" />
          <Input fullWidth placeholder="Website" />
          <Button
            sx={{
              marginTop: "2px",
            }}
            variant="contained"
          >
            Submit
          </Button>
          
        </Paper>
      </Container>
    </ThemeProvider>
            </div>
        
    );
}

export default App;
