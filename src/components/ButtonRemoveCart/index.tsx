import React from "react";
import { To, useNavigate } from "react-router-dom";
import { ActionInterface } from "../../globalTypes";


interface ButtonRemoveCartProps {
    dependencies?: string | number;
    to?: To;
    from?: string;
    onclick?: React.MouseEventHandler<HTMLButtonElement>;
    isCTA?: boolean;
    dispatch?: React.Dispatch<ActionInterface>;
}

export const ButtonRemoveCart: React.FC<ButtonRemoveCartProps> = ({
    dependencies,
    to,
    from,
    onclick,
    isCTA,
    dispatch
}): JSX.Element => {
    const navigate = useNavigate()
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if(onclick) onclick(e)
      if(to){
        dispatch && dispatch({ 
          type: "MOVING",
          payload: {current: to as string, history: from as string}
        })
        navigate(to)
      }
    }
  
    console.log("dependencies",dependencies)

    return(
      <button onClick={handleClick} className={`Button-small ${isCTA && "cta"}`}>
        {dependencies ? (
          <React.Fragment>
            {dependencies > 0 && (
              <span className="Button-small__notification"></span>
            )}
          </React.Fragment>
        ) : (
          null
        )}
        DELETE
      </button>
    )
}