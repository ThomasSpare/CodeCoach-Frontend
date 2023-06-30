import React, { Component } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid"; // Grid version 1
import Box from "@material-ui/core/Box";
import EmojiPicker from "emoji-picker-react";
// import "./api/axiosDefault";
// import SignInForm from "./pages/auth/SignInForm";
// import SignUpForm from "./pages/auth/SignUpForm";
import NavBar from "./components/NavBar";
import EmptyTextarea from "./components/TextArea";
import { withStyles } from "@material-ui/core/styles";
import HomePage from "./containers/HomePage";
import registerPage from "./containers/RegisterPage";
import loginPage from "./containers/LoginPage";
import Dashboard from "./containers/DashboardPage";
import profilePage from "./containers/ProfilePage";

//import '@fontsource/roboto/300.css';
//import '@fontsource/roboto/400.css';
//import '@fontsource/roboto/500.css';
//import '@fontsource/roboto/700.css';



const useStyles = (theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

class App extends Component {
  state = {
    filledForm: false,
    messages: [],
    tutorMessages: [],
    value: "",
    name: "",
    room: "test",
  };

  client = new W3CWebSocket("ws://127.0.0.1:8080/ws/" + this.state.room + "/");

  onButtonClicked = (e) => {
    this.client.send(
      JSON.stringify({
        type: "message",
        text: this.state.value,
        sender: this.state.name,
      })
    );
    this.state.value = "";
    e.preventDefault();
  };
 
  connect = () => {
    this.client = new W3CWebSocket(
      "ws://127.0.0.1:8080/ws/" + this.state.room + "/"
    );

    this.client.onopen = () => {
      console.log("WebSocket Client Connected");
    };

    this.client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data);
      if (dataFromServer) {
        this.setState((state) => ({
          messages: [
            ...state.messages,
            {
              msg: dataFromServer.text,
              name: dataFromServer.sender,
            },
          ],
        }));
      }
    };

    this.client.onclose = () => {
      console.log("WebSocket Client Disconnected");
    };
  };

  componentDidMount() {
    this.connect();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.room !== this.state.room) {
      this.client.close();
      this.connect();
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Box sx={{ width: "100%" }}>
        <NavBar />
        <BrowserRouter>
        <Switch>
      
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/" element={<loginPage/>} />
        <Route path="/" element={<registerPage />} />
        <Route path="/" element={<profilePagePage />} />

        </Switch>
        </BrowserRouter>

        <Grid container>
          <Grid item xs={6}>
            {/* Tutor Text Area  */}
            <EmptyTextarea />
          </Grid>
          <Grid item xs={3} component="main">
            {this.state.filledForm ? (
              <div style={{ marginTop: 50 }}>
                Room Name: {this.state.room}
                <Paper
                  style={{
                    height: 500,
                    maxHeight: 500,
                    overflow: "auto",
                    boxShadow: "none",
                  }}>
                  {this.state.messages.map((message) => (
                    <>
                      <Card className={classes.root}>
                        <CardHeader
                          title={message.name}
                          subheader={message.msg}
                        />
                      </Card>
                    </>
                  ))}
                </Paper>
                <form
                  className={classes.form}
                  noValidate
                  onSubmit={this.onButtonClicked}>
                  <TextField
                    id="outlined-helperText"
                    label="Write text"
                    defaultValue="Default Value"
                    variant="outlined"
                    value={this.state.value}
                    fullWidth
                    onChange={(e) => {
                      this.setState({ value: e.target.value });
                      this.value = this.state.value;
                    }}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}>
                    Send Message
                  </Button>
                </form>
              </div>
            ) : (
              <div>
                <CssBaseline />
                <div className={classes.paper}>
                  <form
                    className={classes.form}
                    noValidate
                    onSubmit={(value) => this.setState({ filledForm: true })}>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      label="Specify what you need to learn"
                      name="Room"
                      autoFocus
                      value={this.state.room}
                      onChange={(e) => {
                        this.setState({ room: e.target.value });
                        this.value = this.state.room;
                      }}
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="sender"
                      label="sender"
                      type="sender"
                      id="sender"
                      value={this.state.name}
                      onChange={(e) => {
                        this.setState({ name: e.target.value });
                        this.value = this.state.name;
                      }}
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="primary"
                      className={classes.submit}>
                      Submit
                    </Button>
                  </form>
                </div>
              </div>
            )}
          </Grid>
          <div>
            <EmojiPicker height={400} width={200} />
          </div>
        </Grid>
      </Box>
    );
  }
}

export default withStyles(useStyles)(App);