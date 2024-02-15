import { ExammpleProps } from "./exammple";
import  "./exammple.css";

const exammple = ({ className="" }:ExammpleProps) => {

  return (
    <div className={`exammple ${className}`}>
      exammple component
    </div>
  );
};

export default exammple;
