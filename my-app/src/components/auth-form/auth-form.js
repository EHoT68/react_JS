import { makeStyles } from "@mui/styles";
import { Button, Input } from "@mui/material";
import { useState } from "react";

export const AuthForm = ({ title, onSubmit, submitButtonTitle }) => {
  const styles = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      if (email && password) {
        await onSubmit(email, password);
      }
    } catch (e) {
      console.log("ayth error", e);
    }
  };

  return (
    <div className={styles.root}>
      <h1>{title}</h1>

      <Input
        autoComplete="new-password"
        placeholder="Email"
        fullWidth
        className={styles.input}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        autoComplete="new-password"
        placeholder="Password"
        fullWidth
        className={styles.input}
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button variant="text" onClick={handleSubmit} fullWidth>
        {submitButtonTitle}
      </Button>
    </div>
  );
};

const useStyles = makeStyles(() => {
  return {
    input: {
      color: "#9a9fa1",
      padding: "10px 15px",
      fontSize: "15px",
      marginBottom: 15,
    },
    root: {
      "& h1": {
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 50,
      },
    },
  };
});
