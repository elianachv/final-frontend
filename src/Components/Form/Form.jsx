import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [request, setRequest] = useState({
    name: "",
    email: "",
    question: "",
  });

  const [ok, setOk] = useState(false);
  const [result, setResult] = useState(false);

  const handleFormChange = (e) => {
    setResult(false);
    const { name, value } = e.target;
    setRequest({
      ...request,
      [name]: value,
    });
  };

  const validateRequest = () => {
    if (
      request.name.length > 0 &&
      request.email.includes("@") &&
      request.question.length > 0
    ) {
      return true;
    }
    return false;
  };

  const sendRequest = (e) => {
    e.preventDefault();
    if (validateRequest()) {
      setOk(true);
    } else {
      setOk(false);
    }

    setResult(true);
  };

  return (
    <div className="form">
      <form onSubmit={sendRequest}>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Full name"
          onChange={handleFormChange}
        />
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Email"
          onChange={handleFormChange}
        />
        <textarea
          id="question"
          name="question"
          type="text"
          placeholder="Question"
          onChange={handleFormChange}
          rows="7"
          cols="50"
        />
        <button>Send</button>
      </form>

      <div className={`request-state ${result ? "visible" : ""}`}>
        {ok ? (
          <p>
            {request.name} Your question has been send. We'll contact you soon.
          </p>
        ) : (
          <p>We are sorry. Please check the form and try again</p>
        )}
      </div>
    </div>
  );
};

export default Form;
