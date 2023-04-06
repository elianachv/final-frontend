/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../Constants/context";
import GlobalContext from "../../Context/global.context";
import "./Detail.css";

const Detail = () => {
  const [dentist, setDentist] = useState({});
  const params = useParams();
  const { theme } = useContext(GlobalContext);
  
  useEffect(() => {
    axios.get(`${apiUrl}/users/${params.id}`).then((data) => {
      setDentist(data.data);
    });
  }, []);

  return (
    <div className={`detail detail-${theme.id}`}>
      <h1>Detail Dentist {dentist.id} </h1>
      <br />
      <h2>{dentist.name}</h2>
      <br />
      <table class="detail-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{dentist.username}</td>
            <td>{dentist.phone}</td>
            <td>{dentist.email}</td>
            <td>
              <a
                href={`https://${dentist.website}`}
                target="_blank"
                rel="noreferrer"
              >
                {dentist.website}
              </a>
            </td>
          </tr>
        </tbody>
      </table>

        </div>
  );
};

export default Detail;
