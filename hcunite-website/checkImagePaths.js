import fs from "fs";
import path from "path";
import { glob } from "glob"; // ✅ Correct for glob v10+ and ESM

// __dirname equivalent in ESM
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const projectRoot = path.resolve(__dirname, "src");

function fileExistsCaseSensitive(filePath) {
  if (!fs.existsSync(filePath)) return false;
  const dir = path.dirname(filePath);
  const fileName = path.basename(filePath);
  const actualName = fs.readdirSync(dir).find(f => f === fileName);
  return !!actualName;
}

(async () => {
  const files = await glob(`${projectRoot}/**/*.{vue,js,ts}`);

  let missing = [];

  for (const file of files) {
    const content = fs.readFileSync(file, "utf8");
    const regex = /['"`]([^'"`]*\.(?:png|jpg|jpeg|gif|svg))['"`]/gi;
    let match;
    while ((match = regex.exec(content)) !== null) {
      const relPath = match[1];
      if (relPath.startsWith("http")) continue;
      const fullPath = path.resolve(path.dirname(file), relPath);
      if (!fileExistsCaseSensitive(fullPath)) {
        missing.push({ file, path: relPath });
      }
    }
  }

  if (missing.length > 0) {
    console.log("❌ Missing or mismatched case image paths found:");
    missing.forEach(m => console.log(`- In ${m.file}: ${m.path}`));
  } else {
    console.log("✅ All image paths are valid and match case exactly.");
  }
})();
