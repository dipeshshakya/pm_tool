import React, { Component } from "react";
import Icon from "@material-ui/core/icon";
import { Card, IconButton } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddIcon from "@material-ui/icons/Add";
// import TextareaAutosize from "react-textarea-autosize";
import TextareaAutosize from "react-textarea-autosize";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
export default class TrelloActionButton extends Component {
  state = {
    formOpen: false,
    text: "",
  };
  renderForm = () => {
    const { list } = this.props;
    const placeholder = list
      ? "Enter the title"
      : "Enter the title for the card";
    const buttonTitle = list ? "Add list" : "Add card";
    return (
      <>
        <Card>
          <CardContent>
            <TextareaAutosize
              placeholder={placeholder}
              autoFocus
              onBlur={this.closeForm}
              value={this.state.text}
              onChange={this.handleInputChange}
              style={{
                resize: "none",
                width: "100%",
                outline: "none",
                border: "none",
              }}
            />
          </CardContent>
        </Card>
        <div>
          <Button
            variant="contained"
            style={{ color: "white", backgroundColor: "#5aac44" }}
          >
            {buttonTitle}
          </Button>
          <CloseIcon />
        </div>
      </>
    );
  };
  handleInputChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  openForm = () => {
    this.setState({
      formOpen: true,
    });
  };

  closeForm = (e) => {
    this.setState({
      formOpen: false,
    });
  };
  renderAddButton = () => {
    const { list } = this.props;
    const buttonText = list ? "Add another list" : "Add another card";
    return (
      <List component="nav" aria-labelledby="nested-list-subheader">
        <ListItem button>
          <ListItemIcon>
            <AddIcon />
          </ListItemIcon>
          <ListItemText
            style={{ display: "flex", flexDirection: "column" }}
                primary={buttonText}
            onClick={this.openForm}
          />
        </ListItem>
      </List>
    );
  };
  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}
