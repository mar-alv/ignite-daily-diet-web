<h1 align='center'>Ignite Daily Diet Web</h1>

<div align='center'>

  ![project-img](./.github/cover.jpg)
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

  [🎨 Mobile Design](https://www.figma.com/design/0507XcCgEpjZwM5UKuFmg5/Daily-Diet-%E2%80%A2-Desafio-React-Native-(Community)?node-id=2-12&t=UiGTDLfY7wSTv3rj-0)

  [⬅️ Voltar](../README.md)

</div>

## 📚 Sumário
- [❕ Sobre](#about)
- [📖 Instruções](#instructions)
  - [📥 Instalar](#install)
  - [🚀 Rodar Localmente](#locally)
  - [📔 Rodar Storybook](#storybook)
- [📂 Estrutura](#structure)
- [🧰 Tecnologias](#technologies)
- [📸 Prints e 🎥 Gravações](#screenshots-prints)
- [👤 Autor](#author)
- [📄 Licença](#license)

### <a id='about' style='text-decoration: none; color: inherit;'>❕ Sobre</a>
Uma implementação web do desafio NodeJs e React Native do Ignite, curso de programação da Rocketseat, feito para usar a API criada no módulo NodeJs, onde você pode gerenciar sua dieta, criando, listando, visualizando e editando suas dietas, além de recuperar métricas delas.

### <a id='instructions' style='text-decoration: none; color: inherit;'>📖 Instruções</a>
#### <a id='install' style='text-decoration: none; color: inherit;'>📥 Instalar</a>
Cole o 1º comando em um terminal aberto dentro da pasta de sua preferência para clonar o projeto
```sh
git clone https://github.com/mar-alv/ignite-daily-diet-web.git
```

Em seguida rode uma das versões do 2º comando para instalar as dependências
```sh
pnpm i
```
```sh
pnpm install
```

#### <a id='locally' style='text-decoration: none; color: inherit;'>🚀 Rodar Localmente</a>
Cole o comando em um terminal, a aplicação estará acessível através desse [link](http://localhost:5173)
```sh
pnpm run dev
```

##### <a id='e2e-tests' style='text-decoration: none; color: inherit;'>🏁 Rodar Testes End-To-End</a>
Cole o comando num terminal, os testes serão abertos numa aba do navegador automaticamente, controlando ela como um usuário real, clicando em botões, interagindo com formulários, etc... Os resultados aparecerão na própria interface
```sh
npm run tests-e2e
```

#### <a id='storybook' style='text-decoration: none; color: inherit;'>📔 Rodar Storybook</a>
Cole o comando num terminal, a documentação dos componentes do projeto estará acessível através desse [link](http://localhost:6006)
```sh
pnpm run storybook
```

### <a id='structure' style='text-decoration: none; color: inherit;'>📂 Estrutura</a>
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

## <a id='technologies' style='text-decoration: none; color: inherit;'>🧰 Tecnologias</a>
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

## <a id='screenshots-prints' style='text-decoration: none; color: inherit;'>📸 Prints e 🎥 Gravações</a>
<div align='center'>

  ![colors-stories](../.github/colors-stories.png)

  Stories das cores

</div>

<div align='center'>

  ![icons-stories](../.github/icons-stories.png)

  Stories dos ícones

</div>

<div align='center'>

  ![header-stories](../.github/header-stories.png)

  Stories do cabeçalho

</div>

<div align='center'>

  ![positive-metrics-stories](../.github/positive-metrics-stories.png)

  Stories das métricas positivas

</div>

<div align='center'>

  ![negative-metrics-stories](../.github/negative-metrics-stories.png)

  Stories das métricas negativas

</div>

<div align='center'>

  ![creating-plate-stories](../.github/creating-plate.gif)

  Stories da criação de refeições

</div>

<div align='center'>

  ![deleting-plate-stories](../.github/deleting-plate.gif)

  Stories da remoção de refeições

</div>


<div align='center'>

  ![other-stories](../.github/other-stories.gif)

  Outros stories

</div>

<div align='center'>

  ![no-plates](../.github/no-plates.png)

  Sem refeições criadas

</div>

## <a id='author' style='text-decoration: none; color: inherit;'>👤 Autor</a>
<div style='display: flex; align-items: center;'>
		<img src='https://github.com/mar-alv.png' alt='Marcelo Alvarez GitHub profile picture' style='width: 150px; border-radius: 50%; margin-right: 20px;'>
		<div>
				<strong>Marcelo Alvarez</strong>
				<br>
				<em>Front-end Developer</em><br>
				<span>"Uma citação engraçada gerada por IA aqui 😗"</span><br>
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

## <a id='license' style='text-decoration: none; color: inherit;'>📄 Licença</a>
Licenciado via [MIT](./LICENSE)
