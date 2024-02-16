interface NerdFontData {
  [key: string]: { displayName: string; cssName: string };
}

export const nerdFontData: NerdFontData = {
  heart: { displayName: "heart", cssName: "nf-fa-heart" },
  typescript: { displayName: "TypeScript", cssName: "nf-md-language_typescript" },
  default: { displayName: "", cssName: "nf-fa-check_circle" },
};

export const toResolvedName = (iconName: string) => (iconName in nerdFontData ? iconName : "default");
export const toCssName = (iconName: string) => nerdFontData[toResolvedName(iconName)].cssName;
export const toDisplayName = (iconName: string) =>
  iconName in nerdFontData ? nerdFontData[iconName].displayName : iconName;
