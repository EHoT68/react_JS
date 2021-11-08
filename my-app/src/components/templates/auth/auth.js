import { makeStyles } from "@mui/styles";

export const AuthTemplate = ({ children, link }) => {
  const styles = useStyles();
  return (
    <div className={styles.wrapper}>
      {children}
      <div className={styles.link}>{link}</div>
    </div>
  );
};

const useStyles = makeStyles((theme) => {
  return {
    link: {
      display: "flex",
      justifyContent: "center",
      marginTop: 30,
      color: "#000",
    },
    wrapper: {
      width: 500,
      margin: "0 auto",
      marginTop: "10%",
    },
  };
});
