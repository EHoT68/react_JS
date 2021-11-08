import { Link } from "react-router-dom";
import { AuthTemplate, AuthForm } from "../components";
import { firebaseApp } from "../api/firebase";

const onSubmit = (email, password) => {
  return firebaseApp.auth().createUserWithEmailAndPassword(email, password);
};

export const SignUpPage = () => {
  return (
    <AuthTemplate link={<Link to="login">Войти</Link>}>
      <AuthForm
        title="Регистрация"
        submitButtonTitle="Зарегистрироваться"
        onSubmit={onSubmit}
      />
    </AuthTemplate>
  );
};
