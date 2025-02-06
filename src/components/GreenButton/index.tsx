import { PropsButton } from "../../interfaces";

const GreenButton = ({title, width, height, size}: PropsButton) => {
    return (
        <button className="bg-green-500 text-white rounded-[8px] px-4 py-2"
            style={{ 
                width: width ? `${width}px` : undefined, 
                height: height ? `${height}px` : undefined,
                fontSize: size ? `${size}px` : undefined
            }}
        >
            <b>{title}</b>

        </button>
    );
}

export default GreenButton;
