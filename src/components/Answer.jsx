import { useEffect, useState } from "react";
import { checkHeading, replaceHeadingStars } from "../helper";

const Answer = ({ ans, totalResult, index, type }) => {

    const [heading,setHeadig] = useState(false)
    const [answer,setAnswer] = useState(ans)
    useEffect(() => {
        const clean = replaceHeadingStars(ans);
        if (checkHeading(clean)) {
            setHeadig(true);
        }
        setAnswer(clean);
    }, []);
      
      

    return (
      <>
        {index== 0 && totalResult > 1 ? (
          <span className="pt-2 italic font-semibold text-xl block">
            {answer}
          </span>
        ) : heading ? (
          <span className={"pt-2 italic font-semibold text-lg block"}>
            {answer}
          </span>
        ) : (
          <span className={type=='q'?'pl-1':'pl-5'}>{answer}</span>
        )}
      </>
    );
      
};

export default Answer;
