interface NerdFontData {
  [key: string]: { displayName: string; cssName: string };
}

export const nerdFontData: NerdFontData = {
  heart: { displayName: "heart", cssName: "nf-fa-heart" },
  typescript: { displayName: "TypeScript", cssName: "nf-md-language_typescript" },
};

const defaultResolvedName = "default";
const defaultCssName = "nf-fa-check_circle";

export const toResolvedName = (iconName: string) => (iconName in nerdFontData ? iconName : defaultResolvedName);
export const toCssName = (iconName: string) =>
  iconName in nerdFontData ? nerdFontData[iconName].cssName : defaultCssName;
export const toDisplayName = (iconName: string) =>
  iconName in nerdFontData ? nerdFontData[iconName].displayName : iconName;
