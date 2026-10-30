import { useNavigate } from "react-router-dom";

function Order(props) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    props.setToken(null);
    navigate("/");
  };
  return (
    <>
      "Order Component works !!",
      <br />
      <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
}
export default Order;
