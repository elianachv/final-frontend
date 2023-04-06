import { useContext } from "react";
import Form from "../../Components/Form/Form";
import GlobalContext from "../../Context/global.context";
import "./Contact.css"

const Contact = () => {
  const { theme } = useContext(GlobalContext);

  return (
    <div className={`contact contact-${theme.id}`}>
      <h1>Contact us</h1>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
