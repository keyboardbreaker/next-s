import globe from "../../public/globe.svg";
import Image from "next/image";
import styles from './banner.module.css';
import { useNavigate } from "react-router";
import { ReactNode } from "react";

interface BannerProps {
    children?: ReactNode;
}

const Banner = ({ children }: BannerProps) => {
    const navigate = useNavigate();
    return (
        <header className="row">
            <div className="col-5">
                <Image src={globe} alt="logo" className={styles.logo}
                    onClick={() => navigate("/")} />
            </div>
            <div className="col-7">
                {children}
            </div>
        </header>
    );
};

export default Banner;