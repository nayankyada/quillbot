import { IIcons } from "./icons";

const AddIcon = ({ width, height, fillColor }: IIcons.IconProps) => {
  return (
    <svg
      width={width || "20"}
      height={height || "20"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 4H9V9H4V11H9V16H11V11H16V9H11V4Z" fill="#D4D7DD" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10Z"
        fill={fillColor || "#D4D7DD"}
      />
    </svg>
  );
};

export default AddIcon;
