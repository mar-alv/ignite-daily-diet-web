<h1 align='center'>Ignite Daily Diet Web</h1>

<div align='center'>

  ![project-img](./.github/cover.jpg)
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

  [🎨 Mobile Design](https://www.figma.com/design/0507XcCgEpjZwM5UKuFmg5/Daily-Diet-%E2%80%A2-Desafio-React-Native-(Community)?node-id=2-12&t=UiGTDLfY7wSTv3rj-0)

  [🇵🇹 Português](./docs/README-pt.md)

</div>

## 📚 Summary
- [❕ About](#about)
- [📖 Instructions](#instructions)
  - [📥 Install](#install)
  - [🚀 Run Locally](#locally)
  - [📔 Run Storybook](#storybook)
- [📂 Structure](#structure)
- [🧰 Technologies](#technologies)
- [📸 Screenshots and 🎥 Recordings](#screenshots-prints)
- [👤 Author](#author)
- [📄 License](#license)

### <a id='about' style='text-decoration: none; color: inherit;'>❕ About</a>
A web implementation of the NodeJs and React Native challenge of Ignite, Rocketseat's programming course, made to use the API created in the NodeJs modeule, where you can handle your diet, by creating, listing, visualizing, editing your diets, besides retrieving metrics of them 

### <a id='instructions' style='text-decoration: none; color: inherit;'>📖 Instructions</a>
#### <a id='en-instalar' style='text-decoration: none; color: inherit;'>📥 Install</a>
Paste this 1º command into a terminal opened within a folder of your preference to clone the project
```sh
git clone https://github.com/mar-alv/ignite-daily-diet-web.git
```

Then run one of the versions of the 2º command to install the dependencies
```sh
pnpm i
```
```sh
pnpm install
```

#### <a id='locally' style='text-decoration: none; color: inherit;'>🚀 Run Locally</a>
Paste the command into a terminal, the application will be accessable through this [link](http://localhost:5173)
```sh
pnpm run dev
```

#### <a id='e2e-tests' style='text-decoration: none; color: inherit;'>🏁 Run End-To-End Tests</a>
Paste the command into a terminal, the tests will be open in a browser tab automatically, controlling it like an actual user, clicking on buttons, interacting with forms, etc... The results will appear within the own interface
```sh
npm run tests-e2e
```

#### <a id='storybook' style='text-decoration: none; color: inherit;'>📔 Run Storybook</a>
Paste the command into a terminal, the project's components documentation will be accessible through this [link](http://localhost:6006)
```sh
pnpm run storybook
```

### <a id='structure' style='text-decoration: none; color: inherit;'>📂 Structure</a>
```
│ .github/
│   └── ...
│ .storybook/
│   └── ...
│ docs/
│   └── ...
│ public/
│   └── ...
│ src/
│   ├── api/
│   │     ├── mocks/
│   │     │     └── ...
│   │     └── ...
│   ├── assets/
│   │     └── ...
│   ├── components/
│   │     ├── ui/
│   │     │     └── ...
│   │     └── ...
│   ├── interfaces/
│   │     └── ...
│   ├── lib/
│   │     └── ...
│ 	├──	stories/
│   │			└── ...
│   └── ...
│ tests/
│   └── ...
```

## <a id='technologies' style='text-decoration: none; color: inherit;'>🧰 Technologies</a>
### Build Tools
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

### Components
[![Lucide React](https://img.shields.io/badge/Lucide-2C3E50?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev/)
[![Phosphor Icons](https://img.shields.io/badge/Phosphor%20Icons-c4e456?style=for-the-badge&logo=phosphoricons&logoColor=black)](https://phosphoricons.com/)
[![Radix UI](https://img.shields.io/badge/Radix_UI-29ABE2?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://radix-ui.com/)
[![React Loading Skeleton](https://img.shields.io/badge/React%20Loading%20Skeleton-333?style=for-the-badge&logo=react&logoColor=white)](https://www.npmjs.com/package/react-loading-skeleton)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=react&logoColor=white)](https://ui.shadcn.com)
[![Toastify](https://img.shields.io/badge/Toastify-FF5733?style=for-the-badge&logo=react&logoColor=white)](https://fkhadra.github.io/react-toastify/introduction)

### Documentation
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=for-the-badge&logo=storybook&logoColor=white)](https://storybook.js.org/)

### Front-end Framework
[![React.js](https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](https://tanstack.com/query/v3)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

### Styling
[![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white)](https://postcss.org/)
[![Tailwind CSS](https://img.shields.io/badge/tailwind--css-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

### Testing
[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?style=for-the-badge&logo=playwright&logoColor=white)](https://playwright.dev/)
[![Vitest](https://img.shields.io/badge/vitest-506E10?style=for-the-badge&logo=vitest&logoColor=FCC72B)](https://vitest.dev/)
[![MSW](https://img.shields.io/badge/MSW-ff6a33?style=for-the-badge&logo=msw&logoColor=white)](https://mswjs.io/)

### Utilities
[![date-fns](https://img.shields.io/badge/date--fns-770c56?style=for-the-badge&logo=date-fns&logoColor=white)](https://date-fns.org/)
[![React Day Picker](https://img.shields.io/badge/React%20Day%20Picker-42A5F5?style=for-the-badge&logo=react&logoColor=white)](https://react-day-picker.js.org/)
[![React Hook Form](https://img.shields.io/badge/React_Hook_Form-FF6B6B?style=for-the-badge&logo=react&logoColor=white)](https://react-hook-form.com/)
[![Zod](https://img.shields.io/badge/Zod-007ACC?style=for-the-badge&logo=superman&logoColor=white)](https://zod.dev/)

## <a id='screenshots-prints' style='text-decoration: none; color: inherit;'>📸 Screenshots and 🎥 Recordings</a>
<div align='center'>

  ![colors-stories](./.github/colors-stories.png)

Colors stories

</div>

<div align='center'>

  ![icons-stories](./.github/icons-stories.png)

Icons stories

</div>

<div align='center'>

  ![header-stories](./.github/header-stories.png)

Header stories

</div>

<div align='center'>

  ![positive-metrics-stories](./.github/positive-metrics-stories.png)

  Positive metrics stories

</div>

<div align='center'>

  ![negative-metrics-stories](./.github/negative-metrics-stories.png)

  Negative metrics stories

</div>

<div align='center'>

  ![creating-plate-stories](./.github/creating-plate.gif)

  Creating plate stories

</div>

<div align='center'>

  ![deleting-plate-stories](./.github/deleting-plate.gif)

  Deleting plate stories

</div>


<div align='center'>

  ![other-stories](./.github/other-stories.gif)

  Other stories

</div>

<div align='center'>

  ![no-plates](./.github/no-plates.png)

  No plates

</div>

## <a id='author' style='text-decoration: none; color: inherit;'>👤 Author</a>
<div style='display: flex; align-items: center;'>
    <img src='https://github.com/mar-alv.png' alt='Marcelo Alvarez GitHub profile picture' style='width: 150px; border-radius: 50%; margin-right: 20px;'>
    <div>
        <strong>Marcelo Alvarez</strong>
        <br>
        <em>Front-end Developer</em><br>
        <span>"Some AI generated funny quote here 😗"</span><br>
				<a href='https://www.linkedin.com/in/mar-alv'>
  				<img
						alt='LinkedIn'
						src='https://img.shields.io/badge/LinkedIn-Marcelo%20Alvarez-0077B5?logo=linkedin&logoColor=white'
					/>
				</a>
				<a href='https://mar-alv.github.io/'>
  				<img
						alt='Portfolio'
						src='https://img.shields.io/badge/Portfolio-Marcelo%20Alvarez-000?style=flat&logo=portfolio&logoColor=white'
					/>
				</a>
    </div>
</div>

## <a id='license' style='text-decoration: none; color: inherit;'>📄 License</a>
Licensed under [MIT](./LICENSE)
