import { visitUrl } from "kolmafia";

<<<<<<< HEAD
export function write(content: Record<string, unknown>): string {
  return visitUrl(
=======
export function write(content: any) {
  visitUrl(
>>>>>>> @{-1}
    `clan_basement.php?action=whitewrite&whiteboard=${JSON.stringify(content)}&pwd`,
    true,
    false
  );
}

<<<<<<< HEAD
export function read(): unknown {
  const rawContent = visitUrl(`clan_basement.php?fromabove=1`, false);
  const contentMatch = rawContent.match(/textarea maxlength=5000 name=whiteboard[^>]+>([^<]+)</);
=======
export function read() {
  const rawContent = visitUrl(`clan_basement.php?fromabove=1`, false);
  const contentMatch: any = rawContent.match(
    /textarea maxlength=5000 name=whiteboard[^>]+>([^<]+)</
  );
>>>>>>> @{-1}
  if (!contentMatch) {
    return {};
  }
  const match = contentMatch[1].replace(/ ?&quot;/g, '"').replace(/\n/g, "");
  return JSON.parse(match);
}
