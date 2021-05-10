import { useContext, useEffect } from "react";
import styles from "../styles/Guides.module.css";
import AuthContext from "../store/authContext";

const Guides = () => {
  const { user, authReady } = useContext(AuthContext);

  useEffect(() => {
    if (authReady) {
      fetch(
        "/.netlify/functions/guides",
        user && {
          headers: {
            Authorization: `Bearer ${user.token.token_token}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  }, [user, authReady]);

  return (
    <div className={styles.guides}>
      <h2>All Guides</h2>
    </div>
  );
};

export default Guides;
