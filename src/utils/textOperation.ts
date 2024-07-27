const extractPlainText = (text: string) => {
  const re: { [name: string]: RegExp } = {
    h: new RegExp(/^#+? /, "mg"),
    tag: new RegExp(/<("[^"]*"|'[^']*'|[^'">])*>/, "mg"),
    ul: new RegExp(/^( *)([-\*\+] (.+))$/, "mg"),
    ol: new RegExp(/^( *)((\d+)\. (.+))$/, "mg"),
    blockquote: new RegExp(/^>.*$/, "mg"),
    code: new RegExp(/`(.+?)`/, "mg"),
    horizontal: new RegExp(/^(\* ){3,}$|^\*.$|^(- ){3,}|^-{3,}$|^(_ ){3,}$|^_{3,}$/, "mg"),
    img: new RegExp(/\!\[(.*)\]\((.+)\)/, "mg"),
    link: new RegExp(/\[(.*)\]\((.*)\)/, "mg"),
  };
  for (var k in re) {
    text = text.replace(re[k], "");
  }
  return text;
};

const startsWithHash = (s: string) => {
  s = s.trim();

  return s.startsWith("#");
};

export { extractPlainText, startsWithHash };
