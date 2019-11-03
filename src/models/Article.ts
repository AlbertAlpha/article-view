export default interface Article {
  id: number,
  title: string,
  sub_title: string,
  tag: string,
  strap_line: string,
  body: string,
  authors: string[],
  thumbnail: string
}
