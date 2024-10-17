import GitQR from "../../assets/githubV.png";
import LinQR from "../../assets/linkedinV.png";

function Links({ slideIndex, styles }) {
  return (
    <div
      className={styles.portfolio_content}
      style={{ translate: `${-100 * slideIndex}%` }}
    >
      <div className={styles.links_container}>
        <div className={styles.links_QR_container}>
          <img src={GitQR} alt="QR" />
        </div>
        <div className={styles.links_QR_container}>
          <img src={LinQR} alt="QR" />
        </div>
      </div>
    </div>
  );
}

export default Links;
