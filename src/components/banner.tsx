import globe from "../../public/globe.svg";
import Image from "next/image";
import styles from './banner.module.css';

const Banner = () => {
    return (
        <header className="row">
            <div className="col-5">
                <Image src={globe} alt="logo" className={styles.logo} />
            </div>
            <div className="col-7">
                Providing houses
            </div>
        </header>
    );
};

export default Banner;