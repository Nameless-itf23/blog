interface NerdFontData {
  [key: string]: { displayName: string; cssName: string };
}

export const nerdFontData: NerdFontData = {
  heart: { displayName: "heart", cssName: "nf-fa-heart" },
  typescript: { displayName: "TypeScript", cssName: "nf-md-language_typescript" },
  git: { displayName: "Git", cssName: "nf-dev-git" },
  github: { displayName: "GitHub", cssName: "nf-md-github" },
  twitter: { displayName: "Twitter", cssName: "nf-md-twitter" },
  linux: { displayName: "Linux", cssName: "nf-dev-linux" },
  archlinux: { displayName: "Arch Linux", cssName: "nf-linux-archlinux" },
  react: { displayName: "React / Next.js", cssName: "nf-dev-react" },
  sass: { displayName: "Sass", cssName: "nf-dev-sass" },
};

const defaultResolvedName = "default";
const defaultCssName = "nf-fa-check_circle";

export const toResolvedName = (iconName: string) => (iconName in nerdFontData ? iconName : defaultResolvedName);
export const toCssName = (iconName: string) =>
  iconName in nerdFontData ? nerdFontData[iconName].cssName : defaultCssName;
export const toDisplayName = (iconName: string) =>
  iconName in nerdFontData ? nerdFontData[iconName].displayName : iconName;
