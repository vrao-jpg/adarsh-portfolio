import React, { useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 30,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: "#565656",
  },
}));

function ProgressBar(props) {
  const { value } = props;
  const [progress, setProgress] = useState(value);
  let timer = useRef(null);
  const loadValueFromStart = () => {
    setProgress(0);
    clearInterval(timer);
    timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === value) {
          clearInterval(timer);
          return prevProgress;
        }
        console.log(prevProgress + 10);
        return prevProgress + 10;
      });
    }, 100);
  };

  return (
    <div onMouseEnter={loadValueFromStart}>
      <BorderLinearProgress variant="determinate" value={progress} />
    </div>
  );
}

export default ProgressBar;
