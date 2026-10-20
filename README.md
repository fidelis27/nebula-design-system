<br>
<div align="center">
  <img width="300" alt="NextJS-ChakraUI" src="./.github/assets/Nextjs-ChakraUI.png" />

  <h4 align="center">
     Next.js, declarative UI and design systems applied to ReactJS. Access the tutorial <a href="https://www.youtube.com/watch?v=6TEo2AxW-oQ">here</a>
  </h4>
</div>

---

<p align="center">
  <img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/eugustavo/youtube-nextjs-design-system" />
  <img alt="Github License" src="https://img.shields.io/github/license/eugustavo/youtube-nextjs-design-system" />
</p>

<p align="center">
  <img alt="Rocketseat" src="./.github/assets/login-rocketseat.png">
</p>


## 🚀 Getting started

To clone and run the application, you will need to have [Git](https://git-scm.com), [Node.js](https://nodejs.org) 20+ + [Yarn](https://yarnpkg.com) installed on your machine. With all programs installed, run the following command lines:


```bash
# Clone this repository
$ git clone https://github.com/rocketseat-content/youtube-nextjs-design-system

# Access the repository
$ cd youtube-nextjs-design-system

# Install the dependencies
$ yarn install

# Run application
$ yarn dev
```

## ⬆️ Stack atualizada

Este fork foi migrado das versões da época do vídeo (2020) para versões atuais:

| | Antes | Agora |
|---|---|---|
| Next.js | 9.5 | 16 (Pages Router, Turbopack) |
| React | 16 | 19 |
| TypeScript | 3.9 | 7 |
| Chakra UI | `@chakra-ui/core` 0.8 | `@chakra-ui/react` 3 |
| Tema / dark mode | `ThemeProvider` + `ColorModeProvider` | `createSystem` + `next-themes` |

Principais mudanças na migração do Chakra:
- `theme.ts` agora usa `createSystem(defaultConfig, defineConfig({ theme: { tokens } }))`, com valores no formato `{ value: '...' }`.
- `Divider` virou `Separator`; `flexDir` virou `flexDirection`; `focusBorderColor` virou a variável CSS `--focus-color`.
- Botões precisam de `color="white"` explícito, porque o Chakra v3 não calcula mais o contraste do texto sozinho.
- `emotion-theming` e `@emotion/styled` foram removidos (o `config/emotion.ts` não era usado).
