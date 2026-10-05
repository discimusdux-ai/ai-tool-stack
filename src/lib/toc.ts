export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[*_`~[\]()]/g, "")
    .replace(/&[a-z]+;/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function textOf(node: unknown): string {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (typeof node === "object" && "props" in (node as object)) {
    return textOf((node as { props: { children?: unknown } }).props.children);
  }
  return "";
}

/** Extract H2 headings from MDX source (skips fenced code). */
export function extractToc(source: string) {
  const items: { id: string; text: string }[] = [];
  let inCode = false;
  for (const line of source.split("\n")) {
    if (line.trim().startsWith("```")) inCode = !inCode;
    if (inCode) continue;
    const m = /^##\s+(.+?)\s*#*$/.exec(line);
    if (m) {
      const text = m[1].replace(/\*\*|__|`/g, "").replace(/\[([^\]]+)\]\([^)]*\)/g, "$1").trim();
      items.push({ id: slugify(text), text });
    }
  }
  return items;
}
