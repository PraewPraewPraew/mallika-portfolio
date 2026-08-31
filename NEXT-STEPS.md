# ขั้นตอนถัดไป — สำหรับ Praew

เอกสารนี้สรุปว่าต้องทำอะไรต่อกับโปรเจกต์ใหม่ 2 อันที่เพิ่งสร้างโครงเปล่าไว้ (`new-project-1` แบบ data-driven และ `new-project-2` แบบ ecommerce) อ่านทีละหัวข้อได้เลย ไม่ต้องรู้เรื่องเขียนโค้ดมาก่อน

---

## 1. ไฟล์ที่ต้องเปิดกรอกเนื้อหา

⚠️ **อัปเดต:** ตอนแรกเนื้อหาทุกโปรเจกต์อยู่รวมกันในไฟล์เดียว (`case-studies.ts` / `case-studies-ecommerce.ts`) — ตอนนี้แยกเป็น**1 ไฟล์ต่อ 1 โปรเจกต์**แล้ว หาและแก้ง่ายขึ้นมาก ไม่ต้องไล่หาใน้ไฟล์ยาวๆ อีกต่อไป

เปิดด้วยโปรแกรมแก้ไขข้อความอะไรก็ได้ (VS Code, TextEdit ก็ได้) — ทั้ง 3 ไฟล์นี้:

| ไฟล์ | ใช้ทำอะไร |
|---|---|
| `src/app/data/projects.ts` | ข้อมูลการ์ดของทั้ง `new-project-1` และ `new-project-2` (ชื่อ, คำโปรย, รูปปก, tags) — ยังเป็นไฟล์รวมเหมือนเดิม |
| `src/app/data/case-studies/new-project-1.ts` | เนื้อหาเต็มของหน้า case study ของ `new-project-1` — ไฟล์ของตัวเองล้วนๆ |
| `src/app/data/case-studies-ecommerce/new-project-2.ts` | เนื้อหาเต็มของหน้า case study ของ `new-project-2` — ไฟล์ของตัวเองล้วนๆ |

Path เต็ม (จากโฟลเดอร์โปรเจกต์):
```
/Users/ArPraew/Desktop/Portfolio file from Figma make/UX_UI Designer Portfolio Website/src/app/data/projects.ts
/Users/ArPraew/Desktop/Portfolio file from Figma make/UX_UI Designer Portfolio Website/src/app/data/case-studies/new-project-1.ts
/Users/ArPraew/Desktop/Portfolio file from Figma make/UX_UI Designer Portfolio Website/src/app/data/case-studies-ecommerce/new-project-2.ts
```

ทุก field ในไฟล์เหล่านี้มี **comment ภาษาไทยกำกับไว้แล้ว** ว่าแสดงผลตรงไหน ใส่ได้กี่รายการ — ไม่ต้องเดา ตามอ่าน comment ในไฟล์ได้เลย

**โบนัส:** ไฟล์พวกนี้ตอนนี้มี "แบบฟอร์ม" กำกับอยู่เบื้องหลัง (TypeScript type) ถ้าเผลอพิมพ์ชื่อ field ผิด (เช่นพิมพ์ `titel` แทน `title`) หรือลืมกรอก field ที่บังคับ **VS Code จะขีดเส้นแดงใต้จุดนั้นทันที** พร้อมบอกว่าขาดอะไร/พิมพ์ผิดตรงไหน ไม่ต้องรอ build ถึงจะรู้ว่าพัง — ลองดูตอนพิมพ์ได้เลย

**เพิ่มโปรเจกต์ใหม่ในอนาคต:** อยากได้ไฟล์แม่แบบเปล่าไปกรอก ให้ไปก็อปไฟล์ `_template.ts` ในโฟลเดอร์ `case-studies/` หรือ `case-studies-ecommerce/` (แล้วแต่ประเภท) มาตั้งชื่อใหม่ — มี comment สอนขั้นตอนต่อครบใน `index.ts` ของแต่ละโฟลเดอร์อยู่แล้ว

---

## 2. ดูผลบน localhost

ต้องรันเว็บที่เครื่องก่อน (พิมพ์ `! npm run dev` ในแชท ถ้าใช้ผ่าน Claude Code) — จะได้ URL แบบ `http://localhost:5173` (เลขพอร์ตอาจไม่ตรงเป๊ะ ให้ดูจากข้อความที่ terminal บอกตอนรันเสร็จ)

เพราะ `published: false` **จะไม่มีการ์ดโชว์ในหน้า Work หรือ Home** ต้องพิมพ์ URL ตรงๆ ถึงจะเห็น:

- `new-project-1` → `http://localhost:5173/case-study/new-project-1`
- `new-project-2` → `http://localhost:5173/case-study/new-project-2`

ตอนที่ยังไม่กรอกอะไรเลย หน้าจะดู "โล่ง" (หัวข้อว่างเปล่า, ไม่มีรูป) — เป็นเรื่องปกติ ไม่ใช่ error กรอกข้อมูลไปทีละส่วนแล้ว refresh ดูได้เรื่อยๆ

---

## 3. ต้องเตรียมรูปกี่ใบ ขนาด/สัดส่วนเท่าไหร่

### สำหรับ `new-project-1` (data-driven)

| รูป | field | สัดส่วนที่พอดีกับกรอบ | บังคับไหม |
|---|---|---|---|
| รูปปกการ์ด | `projects.ts` → `image` | 4:3 | บังคับ |
| Hero เต็มจอ | `case-studies/new-project-1.ts` → `hero` | แนวนอนกว้าง (16:9 ขึ้นไป) — วางองค์ประกอบสำคัญไว้ค่อนไปทางด้านบนของรูป เพราะกรอบนี้กว้าง/เตี้ยมากบนจอคอม | บังคับ |
| Screenshots | `case-studies/new-project-1.ts` → `screenshots[].src` | 16:10 | ไม่บังคับ (ลบ field ทิ้งได้) |

### สำหรับ `new-project-2` (ecommerce)

| รูป | field | สัดส่วนที่พอดีกับกรอบ | บังคับไหม |
|---|---|---|---|
| รูปปกการ์ด | `projects.ts` → `image` | 4:3 | บังคับ |
| Hero | `hero.image` | 16:8 | บังคับ |
| รูปประกอบ Challenge | `challenge.image` | 16:9 | บังคับถ้ามี section นี้ |
| รูปพื้นหลังตาราง Approach | `approach.backgroundImage` | 16:9 (จะโชว์แบบจางๆ 30%) | บังคับถ้ามี section นี้ |
| รูป feature การ์ดใน Solution | `solution.features[].image` | 16:9 | ไม่บังคับต่อใบ — ใบไหนยังไม่มีรูปใช้ `placeholderLabel` แทนได้ |
| รูป Before/After ใน Collaboration | `collaboration.beforeAfter.image` | 16:9 | บังคับถ้ามี section นี้ |
| รูปพื้นหลัง Quote ใน Reflection | `reflection.quote.backgroundImage` | อะไรก็ได้ (โชว์จางมาก 10%) | บังคับถ้ามี section นี้ |

**วิธีใส่รูปที่ง่ายที่สุด:** หารูปจาก unsplash.com แล้ว copy URL รูปมาวางในช่อง `src`/`image` ตรงๆ ได้เลย ไม่ต้องโหลดไฟล์มาเก็บเอง — ถ้าอยากใช้รูปที่ถ่าย/ออกแบบเอง (ไฟล์ในเครื่อง) ต้องให้ Claude Code ช่วย (ดูข้อ 6)

---

## 4. Field ไหนบังคับ ไหนเว้นได้

**บังคับเสมอ** (ลบไม่ได้ ไม่งั้นเว็บพัง — ลบแล้ว VS Code จะขีดแดงเตือนด้วย):
- `projects.ts`: `id`, `title`, `category`, `image`, `published`, `featured`, `layoutType`
- `case-studies/new-project-1.ts`: `title`, `subtitle`, `category`, `tags`, `year`, `client`, `role`, `duration`, `hero`, `overview`
- `case-studies-ecommerce/new-project-2.ts`: `hero` ทั้งก้อน

**ลบทั้งก้อนได้ถ้าไม่ต้องการ (section จะหายจากหน้าเว็บเองอัตโนมัติ):**
- `case-studies/new-project-1.ts`: `problem`, `research`, `solution`, `screenshots`, `impact`
- `case-studies-ecommerce/new-project-2.ts`: `challenge`, `approach`, `solution`, `collaboration`, `reflection`

จำง่ายๆ: field ที่มี comment เขียนว่า **"OPTIONAL"** กำกับไว้ = ลบทั้งก้อนได้ ที่เหลือห้ามลบ

---

## 5. หลังกรอกเสร็จ ทำอะไรต่อ (ทีละขั้น)

1. เปิดดูบน localhost (ข้อ 2) เช็คว่าหน้าตาโอเค ไม่มีช่องว่างที่ลืมกรอก
2. เมื่อพร้อมให้คนอื่นเห็นจริง เปิดไฟล์ `projects.ts` เปลี่ยน `published: false` เป็น `published: true` ของโปรเจกต์นั้น (และ `featured: true` ถ้าอยากให้ขึ้นหน้าแรกด้วย)
3. เช็คอีกรอบว่าการ์ดโผล่มาถูกต้องในหน้า Work (และ Home ถ้าติ๊ก featured)
4. ขอ Claude Code รัน `npm run build` เช็คว่าผ่าน (สำคัญมาก ข้ามขั้นนี้ไม่ได้)
5. ขอ Claude Code ช่วย commit + push
6. รอ Vercel deploy เสร็จ (Claude Code เช็คให้ได้) แล้วเปิดเว็บจริงเช็คอีกรอบ

---

## 6. ส่วนที่แก้เองไม่ได้ ต้องให้ Claude Code ช่วย

- ใส่รูปที่เป็นไฟล์ในเครื่อง (ไม่ใช่ URL จากเว็บ) — ต้องวางไฟล์ใน `src/assets/` แล้วเขียน `import` ให้ถูกวิธี
- เปลี่ยน `id` ของโปรเจกต์ (ต้องแก้ให้ตรงกันใน 2-3 ไฟล์พร้อมกัน พิมพ์เองเสี่ยงพลาด)
- เพิ่ม section แบบใหม่ที่ไม่มีอยู่แล้ว (เช่นอยากได้ section วิดีโอ) — ต้องเขียนโค้ดเพิ่ม ไม่ใช่แค่แก้ข้อมูล
- `npm run build`, `git commit`, `git push` และการเช็ค production

---

## 7. กฎการพิมพ์ที่ทำให้เว็บพังบ่อย

ไฟล์พวกนี้เป็นโค้ด (TypeScript) ไม่ใช่ Word — เครื่องหมายวรรคตอนผิดจุดเดียวทำให้เว็บทั้งเว็บพังได้ (ไม่ใช่แค่หน้านั้น)

**1. ลืมใส่ comma `,` ปิดท้ายแต่ละบรรทัด**
```
❌ title: "My Project"
   description: "..."

✅ title: "My Project",
   description: "...",
```

**2. เครื่องหมายคำพูด `"` ในข้อความเอง** — ถ้าข้อความมี `"` อยู่ข้างใน ต้องใส่ `\` นำหน้า
```
❌ text: "She said "hello" to me"

✅ text: "She said \"hello\" to me"
```

**3. วงเล็บปีกกา `{ }` หรือเหลี่ยม `[ ]` ต้องเปิด-ปิดครบคู่เสมอ**
```
❌ problem: {
     title: "...",
     description: "...",
   // ลืมปิด }

✅ problem: {
     title: "...",
     description: "...",
   },
```

**4. Comma ตัวสุดท้ายในลิสต์ใส่ไว้ก็ไม่เป็นไร แต่ห้ามขาดตรงกลาง**
```
✅ tags: ["Web", "App", "Mobile"]     ← ไม่มี comma ท้ายก็ได้
✅ tags: ["Web", "App", "Mobile",]    ← มี comma ท้ายก็ได้ ไม่พัง
❌ tags: ["Web" "App", "Mobile"]      ← ขาด comma ระหว่าง "Web" กับ "App" — พัง
```

**ถ้าไม่แน่ใจ:** แก้เสร็จแล้วให้ Claude Code รัน `npm run build` เช็คให้ก่อนเสมอ ถ้าพิมพ์ผิดจะเห็น error ทันทีตรงนั้น ไม่ต้องกลัวพังจริง เพราะเช็คก่อน push ทุกครั้งอยู่แล้ว

---

## 8. สรุปไฟล์ที่แก้ไปในรอบนี้

| ไฟล์ | สิ่งที่เปลี่ยน |
|---|---|
| `src/lib/utils.ts` | เพิ่มฟังก์ชัน `findPublishedNext` — คำนวณว่าปุ่ม "Next Project" ควรชี้ไปโปรเจกต์ไหน โดยข้ามโปรเจกต์ที่ `published: false` อัตโนมัติ |
| `src/app/pages/case-study.tsx` | ใช้ `findPublishedNext` แก้บั๊กที่ปุ่ม "Next Project" ของ Smart Living เคยชี้ไป Nova Banking ทั้งที่ยังไม่เผยแพร่ (ตอนนี้ปุ่มจะซ่อนไปเลยถ้าไม่มีโปรเจกต์ถัดไปที่เผยแพร่แล้ว) |
| `src/app/pages/case-study-ecommerce.tsx` | ใช้ `findPublishedNext` แบบเดียวกัน |
| `src/app/data/projects.ts` | เพิ่ม entry `new-project-1` และ `new-project-2` (ทั้งคู่ `published: false`) |
| `src/app/data/case-studies.ts` | เพิ่ม entry โครงเปล่า `new-project-1` |
| `src/app/data/case-studies-ecommerce.ts` | เพิ่ม entry โครงเปล่า `new-project-2` |
| `NEXT-STEPS.md` | ไฟล์นี้เอง |

**สิ่งที่ตั้งใจไม่แตะเลยตามที่สั่งไว้:** เนื้อหา/รูปของ `smart-living`, `freshcart-ecommerce`, `lego-design-system`, ไฟล์ `theme.css`, `DESIGN_SYSTEM.md`, และหน้าตา/โครงสร้างของทั้ง 3 layout เดิม (มีข้อยกเว้นเล็กน้อยที่จำเป็นคือแก้ logic การหา "Next Project" ในไฟล์ template 2 ไฟล์ตามที่อธิบายไว้ข้างบน — เป็นการแก้ logic ไม่ใช่แก้หน้าตา/เนื้อหา)

**เรื่องที่ขอเบี่ยงจากคำสั่งเดิม 1 จุด:** คำสั่งเดิมบอกให้เปลี่ยน `case-study-ecommerce.tsx` เป็น `useParams()` เหมือน `case-study.tsx` — แต่เช็คแล้วพบว่าโค้ดปัจจุบัน (แก้ไว้ตั้งแต่ session ก่อนหน้า) อ่าน id จาก URL path โดยตรงอยู่แล้ว ซึ่งเป็นวิธีที่ถูกต้องสำหรับ routing แบบนี้ (route ของ ecommerce/lego เป็น path ตายตัวต่อโปรเจกต์ ไม่ใช่ route แบบ `:id` ที่ใช้ร่วมกัน) — ถ้าเปลี่ยนเป็น `useParams()` จริงจะทำให้หน้าเว็บพังทันที เลยขอไม่ทำตามข้อนี้ และใช้การเพิ่ม `new-project-2` เป็นบทพิสูจน์แทนว่าโค้ดปัจจุบันรองรับหลายโปรเจกต์ได้จริงอยู่แล้ว

---

## 9. อัปเดตรอบถัดมา — แยกไฟล์ data เป็น 1 โปรเจกต์ต่อ 1 ไฟล์

หลังจากรอบข้างบนเสร็จ มีการปรับโครงสร้างไฟล์เพิ่ม เพื่อให้แก้เนื้อหาเองได้ง่ายขึ้น (ไฟล์สั้นลง หาง่ายขึ้น) โดย**ไม่เปลี่ยนเนื้อหาอะไรเลยแม้แต่ตัวอักษรเดียว** (เช็คโดยเทียบ build เก่ากับใหม่แบบละเอียดแล้ว)

**ไฟล์ที่เพิ่มใหม่:**

| ไฟล์ | หน้าที่ |
|---|---|
| `src/vite-env.d.ts` | ทำให้ VS Code รู้จัก `figma:asset/...` import (ไม่งั้นจะขึ้น error ปลอมทับ warning จริง) |
| `src/app/data/case-studies/types.ts` | "แบบฟอร์ม" ของข้อมูล case study แบบ data-driven — Claude Code เท่านั้นที่ควรแก้ |
| `src/app/data/case-studies/_template.ts` | แม่แบบเปล่า ก็อปไปใช้ตอนเพิ่มโปรเจกต์ใหม่ (ห้ามลบ ห้ามลงทะเบียนใน index.ts) |
| `src/app/data/case-studies/smart-living.ts`, `nova-banking.ts`, `lumina-design.ts`, `flow-fitness.ts`, `new-project-1.ts` | แยกออกมาจากไฟล์รวมเดิม คนละไฟล์ต่อโปรเจกต์ |
| `src/app/data/case-studies/index.ts` | รวมไฟล์ข้างบนเข้าด้วยกัน มี comment สอนวิธีเพิ่มโปรเจกต์ใหม่ |
| `src/app/data/case-studies-ecommerce/types.ts`, `_template.ts`, `freshcart-ecommerce.ts`, `new-project-2.ts`, `index.ts` | ชุดเดียวกัน แต่สำหรับ layout ecommerce |

**ไฟล์ที่ลบ (กลายเป็นโฟลเดอร์แทน):**
- `src/app/data/case-studies.ts` → `src/app/data/case-studies/`
- `src/app/data/case-studies-ecommerce.ts` → `src/app/data/case-studies-ecommerce/`

ไม่ต้องแก้อะไรเพิ่มจากรอบก่อน path ในหัวข้อ 1, 3, 4 ข้างบนถูกอัปเดตให้ตรงกับโครงสร้างใหม่แล้ว
