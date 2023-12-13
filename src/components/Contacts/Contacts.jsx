import { Link } from "react-router-dom";
import { SlSocialInstagram } from "react-icons/sl";
import { SiWhatsapp } from "react-icons/si";
import styles from "./Contacts.module.css";

export const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles.links}>
        <div className={styles.phone}>
          <span className="title">Phone</span>
          <p to="tel:+49 999 999 99 99">+49 999 999 99 99</p>
        </div>

        <ul className={styles.media_list}>
          <li>
            <Link
              className={styles.media_item}
              to="https://www.linkedin.com/school/tel-ran-de/"
              target="_blank"
            >
              <SlSocialInstagram />
              <p>instagram</p>
            </Link>
          </li>
          <li>
            <Link
              className={styles.media_item}
              to="https://wa.me/+499999999999"
              target="_blank"
            >
              <SiWhatsapp />
              <p>WhatsApp</p>
            </Link>
          </li>
        </ul>
      </div>

      <div className={styles.address}>
        <span className="title">Address</span>
        <address className={styles.address_wrapper}>
          <p className={styles.address_link}>Linkstraße 2, 8 OG, 10785,</p>
          <span className={styles.address_link}>Berlin, Deutschland</span>
        </address>
      </div>

      <div className={styles.working_time}>
        <p className="working_schedule">Working Hours:</p>
        <p>24 hours a day</p>
      </div>
    </section>
  );
};
