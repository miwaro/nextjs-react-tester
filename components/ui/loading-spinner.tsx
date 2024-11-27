import { BeatLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center mt-3">
      <BeatLoader size={15} color={"#edeef2"} />
    </div>
  );
};

export default LoadingSpinner;
