import React from "react";

type ButtonProps = {
    onClick: () => void;
    label: string;
    className?: string;
};

const Button: React.FC<ButtonProps> = ({onClick, label, className="btn btn-primary"}) => {
    return (
        <button className={className} onClick={onClick}>{label}</button>
    );
};

export default Button;