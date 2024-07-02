import { Formation } from "./FormationCard.style";
import { MdCalendarToday } from "react-icons/md";
import { IoSchool } from "react-icons/io5";

const FormationCard = ({course, school, date, situation}) => {
  return (
    <Formation>
      <IoSchool />
      <div>
        <h2>{course}</h2>
        <h3>{school}</h3>
      </div>
      <p>
        <MdCalendarToday /> {date}
      </p>
      <p>{situation}</p>
    </Formation>
  );
};

export default FormationCard;
