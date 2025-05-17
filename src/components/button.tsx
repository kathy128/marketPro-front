import React from 'react';
interface ButtonIconsProps {
    href?: string;
    icon: React.ReactNode;
    text?: string;
    width?: string;
    className?: string;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

const ButtonWithIcon: React.FC<ButtonIconsProps> = ({
   href = "",
   icon,
   text = "Text",
   width = "w-fit",
   className = "",
    type = "button",
    buttonType = "button",
    onClick
   }) => {
    const baseClass = `cursor-pointer px-4 py-2 bg-sky-700 justify-center items-center text-white text-sm font-medium rounded-lg hover:bg-sky-800 transition flex items-center gap-2 ${width} ${className}`
    const textButtonClass = `cursor-pointer py-2 justify-center items-center text-sm font-medium rounded-lg transition flex items-center gap-2 ${width} ${className}`
    if (href) {
        return (
            <a href={href} className={buttonType === "button" ? baseClass : textButtonClass}>
                {icon}
                <span>{text}</span>
            </a>
        );
    }
    return (
        <button type={type} onClick={onClick} className={buttonType === "button" ? baseClass : textButtonClass}>
            {icon}
            <span>{text}</span>
        </button>
    );
};

export default ButtonWithIcon;
