import { MotionDiv, MotionP } from "../MotionDiv";

export default function LoadingImagesRotates() {
  return (
    <MotionDiv
      className="loading w-full h-full absolute z-10"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex w-full h-full justify-center items-center animate-pulse gap-5">
        <MotionP
          initial={{ opacity: 1, rotate: -10 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          className="w-[150px] h-[200px] lg:w-[250px] lg:h-[300px] bg-white/10 rounded-md"
        ></MotionP>
        <MotionP
          initial={{ opacity: 1, rotate: 10 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          className="w-[150px] h-[200px] lg:w-[250px] lg:h-[300px] bg-white/10 rounded-md"
        ></MotionP>
      </div>
    </MotionDiv>
  );
}
