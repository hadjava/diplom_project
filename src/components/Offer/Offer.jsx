import { PhoneForm } from "../PhoneForm/PhoneForm";
import imageInstrument from "../../media/images/disc_form.png";
import styles from "./Offer.module.css";

export const Offer = () => {
  return (
    <section className={styles.offer}>
      <div className={styles.offer_wrapper}>
        <h4 className={styles.offer_title}>5% off on the first order</h4>
        <div className={styles.content_wrapper}>
          <div className={styles.image_wrapper}>
            <img src={imageInstrument} alt="garden instrument" />
          </div>
          <div className={styles.phone_form_wrapper}>
            <PhoneForm
              contentInput="sale"
              placeholderInput="Phone number"
              contentButton="sale_ofer"
              textButton="Get a discount"
              message="You have 5% discount for this phone number"
              content="sale"
              alertText="Get it"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
