import HeaderBar from "../components/header";
import { useLocation } from "react-router-dom";

const AnimalService = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <HeaderBar text={location?.state} />
    </div>
  );
};

export default AnimalService;
