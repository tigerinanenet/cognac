import { visitUrl } from "kolmafia";

export function write(content: any) {
  visitUrl(
    `clan_basement.php?action=whitewrite&whiteboard=${JSON.stringify(content)}&pwd`,
    true,
    false
  );
}

export function read() {
  const rawContent = visitUrl(`clan_basement.php?fromabove=1`, false);
  const contentMatch: any = rawContent.match(
    /textarea maxlength=5000 name=whiteboard[^>]+>([^<]+)</
  );
  if (!contentMatch) {
    return {};
  }
  const match = contentMatch[1].replace(/ ?&quot;/g, '"').replace(/\n/g, "");
  return JSON.parse(match);
}
