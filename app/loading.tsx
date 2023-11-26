export default function LoadingSkeletonPages() {
  return (
    <div className="flex flex-col items-center w-screen h-screen bg-darkMode animate-pulse">
      {/* Skeleton del banner que ocupa el 60% de la altura visible (vh) */}
      <div className="bg-darkMode/50 h-[60vh] w-full mb-4 flex flex-col gap-2 justify-center items-center animate-pulse">
        <p className="max-w-720p w-[200px] h-5 rounded-full bg-white/20"></p>
        <p className="max-w-720p w-[500px] h-10 rounded-full bg-white/20"></p>
      </div>

      {/* Skeleton del contenido debajo del banner */}
      <div className="rounded-tr-2xl relative -translate-y-8 bg-primary/20 w-full h-[40vh]">
        {/* Contenido del esqueleto (puede estar vacío ya que es solo un esqueleto) */}
      </div>
    </div>
  );
}
