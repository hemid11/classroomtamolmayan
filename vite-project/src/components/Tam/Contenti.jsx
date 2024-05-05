
import Main from "../Main/Main";
import Register from "../Register/Register";



const Contenti = ({ id }) => {
  return <>{id == 1 ? <Main/> : id == 2 ? <LoginTab /> : <Register />}</>;
};

export default Contenti;