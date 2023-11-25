import { ContentSection } from "../ContentSection";
import { ApproachConfig } from "../../../configs/Home/ApproachConfig";
import { ApproachContent } from "./ApproachContent";


export const Approach = () => {
  return (
    <div className="bg-dotted-pattern">
      <ContentSection
        title={ApproachConfig.title}
        subTitle={ApproachConfig.subTitle}
        tagLine={ApproachConfig.tagLine}
        content={<ApproachContent />}
      />

    </div>
  )
}
export default Approach
