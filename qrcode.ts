import {qrcode} from "https://deno.land/x/qrcode@v2.0.0/mod.ts"
const fixedSizeImage = await qrcode("https://refactoring.guru/design-patterns", { size: 400 });
Deno.writeTextFile("qrcode.html", `<img src="${fixedSizeImage}"/>`)