import {useNavigate} from 'react-router-dom';
interface ButtonIconsProps {
    href?: string;
    icon: React.ReactNode;
    text?: string;
    width?: string;
    buttonColor?: string
    className?: string;
    buttonType?: string
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

const ButtonWithIcon: React.FC<ButtonIconsProps> = ({
    href = "",
    icon,
    text = "Text",
    width = "w-fit",
    buttonColor = "bg-sky-700 hover:bg-sky-800",
    className = "",
    type = "button",
    buttonType = "button",
    onClick
   }) => {
    const navigate = useNavigate();
    const baseClass = `${buttonColor} cursor-pointer px-4 py-2 b justify-center items-center text-white text-sm font-medium rounded-lg  transition flex items-center gap-2 ${width} ${className}`
    const textButtonClass = `cursor-pointer py-2 justify-center items-center text-sm font-medium rounded-lg transition flex items-center gap-2 ${width} ${className}`
    if (href) {
        return (
            <a onClick={() => {
                if (onClick) {
                    onClick();
                }
                navigate(`${href}`);
            }} className={buttonType === "button" ? baseClass : textButtonClass}>
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
