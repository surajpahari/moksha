import ContentSection from "../ContentSection";
import { LeadershipConfig } from "../../../configs/Home/LeaderShipConfig";
import { LeadershipContent } from "./LeadershipContent";


export const LeaderShip = () => {
  return (
    <div>
      <ContentSection title={LeadershipConfig.title} subTitle={LeadershipConfig.subTitle} tagLine={LeadershipConfig.tagLine} content={<LeadershipContent />} />
    </div>
  )
}
export default LeaderShip 
