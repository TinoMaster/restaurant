export const cutPathnameByPiece = (pathname: string) => {
  const pathnameArr = pathname.split("/");
  return pathnameArr;
};
