# PatenteYes — Multilingual Website

🌍 **8 languages** · 🤖 **AI instructor Giulia** · ⚖️ **GDPR + Article 123 compliant**

## 🚀 Quick deploy to Vercel (15 minutes)

### Step 1: Create a NEW GitHub repo

1. Go to https://github.com/new
2. Repo name: `patenteyes-website` (or anything)
3. **Public** (or private — both work)
4. **DO NOT** check "Initialize with README"
5. Click **"Create repository"**

### Step 2: Upload all these files to your new repo

1. On the new empty repo page, click **"uploading an existing file"** link
2. Drag the entire `patenteyes_full` folder contents into the upload zone
3. (Or: drag files in batches if the upload is too big)
4. Scroll down, click green **"Commit changes"** button
5. Wait for upload to finish (~1 min)

### Step 3: Connect to Vercel

1. Go to https://vercel.com/new
2. Sign in with your GitHub account
3. Click **"Import"** next to your new repo
4. Framework Preset: **Vite** (auto-detected)
5. Click **"Deploy"**
6. Wait ~2 minutes for the first build

### Step 4: Connect your domain

1. In Vercel dashboard → your project → **Settings** → **Domains**
2. Type `patenteyesapp.com`
3. Vercel shows DNS records you need to add at your domain registrar
4. Add them at your domain registrar (e.g. Namecheap, GoDaddy)
5. Wait 5-30 minutes for DNS to propagate
6. **patenteyesapp.com is LIVE!** 🎉

## 📂 Project structure

```
patenteyes-website/
├── public/                       Static assets
│   ├── logo.png                  PatenteYes logo
│   ├── hero-group.jpg            Diverse community photo
│   ├── patente-omar.png          Italian driving license image
│   └── giulia-avatar.jpg         Giulia AI instructor photo
│
├── src/
│   ├── App.tsx                   Main app component
│   ├── main.tsx                  React entry point
│   ├── index.css                 Global styles + animations
│   │
│   ├── lib/
│   │   └── i18n.ts               Multilingual setup
│   │
│   ├── locales/                  Translation files (8 languages)
│   │   ├── it.json               🇮🇹 Italian (master)
│   │   ├── en.json               🇬🇧 English
│   │   ├── ar.json               🇸🇦 Arabic (RTL)
│   │   ├── ur.json               🇵🇰 Urdu (RTL)
│   │   ├── hi.json               🇮🇳 Hindi
│   │   ├── zh.json               🇨🇳 Chinese
│   │   ├── es.json               🇪🇸 Spanish
│   │   └── fr.json               🇫🇷 French
│   │
│   └── components/
│       ├── LanguageSwitcher.tsx  Header flag dropdown
│       ├── CookieBanner.tsx      GDPR cookie consent
│       └── sections/
│           ├── Header.tsx        Top navigation
│           ├── Hero.tsx          Main hero with 3D license
│           ├── Stats.tsx         Key numbers (no fake stats!)
│           ├── Problem.tsx       Pain points
│           ├── Giulia.tsx        AI chat showcase
│           ├── Community.tsx     Diverse photo + stats
│           ├── Features.tsx      8 feature cards
│           ├── HowItWorks.tsx    4 steps
│           ├── Pricing.tsx       Free / Standard / Pro
│           ├── FinalCTA.tsx      Closing call-to-action
│           └── Footer.tsx        Legal + Article 123
│
├── package.json                  Dependencies
├── vite.config.ts                Build config
├── tailwind.config.js            Design system
├── tsconfig.json                 TypeScript config
├── index.html                    HTML entry point
└── README.md                     This file
```

## ✏️ How to edit content later

### Change a translation
1. Go to `src/locales/[language].json` on GitHub
2. Click ✏️ pencil
3. Edit the text
4. Click "Commit changes"
5. Vercel auto-deploys in 30 seconds ✅

### Change pricing (e.g. €9.99 → €11.99)
1. Edit ALL 8 files in `src/locales/`
2. Search for `9,99` (Italian/Spanish/French) or `9.99` (English/etc.)
3. Replace with new price
4. Commit

### Replace a photo
1. Go to `public/` folder on GitHub
2. Click on the photo file
3. Click ✏️ pencil
4. Upload new file with **same name**
5. Commit

### Add a new section
1. Create new file in `src/components/sections/`
2. Import + use in `src/App.tsx`
3. Commit

## 🛡️ Legal compliance

This site is built with full compliance:

- ✅ **Article 123 CdS disclaimer** in footer (all 8 languages)
- ✅ **GDPR cookie consent** banner
- ✅ **No fabricated statistics** (no fake "89% pass rate")
- ✅ **No autoscuola attacks** (positioned as complementary tool)
- ✅ **No false award claims**
- ✅ **No AI guarantees** that could mislead

## ⚠️ Before going LIVE

- [ ] Replace `12345678910` placeholder VAT with your real number (in all 8 translation files, `footer.copyright`)
- [ ] Write or commission your 4 legal pages (Privacy / Terms / Cookies / Refunds)
- [ ] Link the footer legal links to your actual pages
- [ ] Have a native speaker spot-check Arabic, Urdu, Hindi, Chinese translations
- [ ] Add Meta Pixel / TikTok Pixel / Google Analytics inside `CookieBanner.tsx` (only fire after `level === 'all'`)

## 💪 You got this!

If you get stuck, the best way is to:
1. Take a screenshot of the issue
2. Note which step you're on
3. Ask Claude for help
