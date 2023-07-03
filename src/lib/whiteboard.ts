import { visitUrl } from "kolmafia";

export function write(content: Record<string, unknown>): string {
  return visitUrl(
    `clan_basement.php?action=whitewrite&whiteboard=${JSON.stringify(content)}&pwd`,
    true,
    false
  );
}

export function read(): unknown {
  const rawContent = visitUrl(`clan_basement.php?fromabove=1`, false);
  const contentMatch = rawContent.match(/textarea maxlength=5000 name=whiteboard[^>]+>([^<]+)</);
  if (!contentMatch) {
    return {};
  }
  const match = contentMatch[1].replace(/ ?&quot;/g, '"').replace(/\n/g, "");
  return JSON.parse(match);
}
