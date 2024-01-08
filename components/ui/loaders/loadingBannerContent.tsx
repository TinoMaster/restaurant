import { MotionDiv } from '../../helpers/MotionDiv'

export default function LoadingBannerContent() {
   return (
      <MotionDiv
         className="loading w-full h-full absolute"
         initial={{ opacity: 1 }}
         animate={{ opacity: 0 }}
         exit={{ opacity: 0 }}
      >
         <div className="flex flex-col w-full h-full justify-center items-center animate-pulse gap-5">
            <p className="w-[200px] h-5 rounded-full bg-white/10"></p>
            <p className="w-11/12 max-w-[350px] lg:w-[500px] h-20 rounded-full bg-white/10"></p>
         </div>
      </MotionDiv>
   )
}
