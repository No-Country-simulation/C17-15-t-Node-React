import styles from "./ProfileCard.module.css";
import { useState, useEffect } from "react";
import API_URL from "../../config/Config.js";
const ProfileCard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/users/661d4a9c508efaae74404493`)
      .then((response) => response.json())
      .then((data) => setUserData(data.response))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);
  return (
    <div className={styles.container}>

      <div className={styles.imgAndInfo}>
        <div className={`${styles.card} ${styles.textCenter}`}>
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
            alt="avatar"
            className={styles.profileImg}
          />
          <p className={`${styles.textMuted} ${styles.mb1}`}>
            {userData?.role}
          </p>
        </div>
        <div className={styles.tablaContainer}>
          <table>
            <tbody>
              <tr>
                <td className={styles.nombre}>Full Name</td>
                <td className={styles.valor}>
                  {userData?.name} {userData?.lastName}
                </td>
              </tr>
              <tr>
                <td className={styles.nombre}>Email</td>
                <td className={styles.valor}>{userData?.email}</td>
              </tr>
              <tr>
                <td className={styles.nombre}>Country</td>
                <td className={styles.valor}>{userData?.country}</td>
              </tr>
              <tr>
                <td className={styles.nombre}>City</td>
                <td className={styles.valor}>{userData?.city}</td>
              </tr>
              <tr>
                <td className={styles.nombre}>Educational Level</td>
                <td className={styles.valor}>{userData?.educational_level}</td>
              </tr>
              <tr>
                <td className={styles.nombre}>Language</td>
                <td className={styles.valor}>{userData?.Language}</td>
              </tr>
              <tr>
                <td className={styles.nombre}>Timezone</td>
                <td className={styles.valor}>{userData?.timezone}</td>
              </tr>
              <tr>
                <td className={styles.nombre}>Interests</td>
                <td className={styles.valor}>
                  {userData?.interests?.map((interest) => interest + "")}
                </td>
              </tr>
              <tr>
                <td className={styles.nombre}>Specialties</td>
                <td className={styles.valor}>
                  {userData?.specialties?.map((specialties) =>
                    specialties + ""
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
        <p>Biography:   {userData?.biography}</p>

    </div>
  );
};

export default ProfileCard;
