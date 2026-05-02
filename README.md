<p align="center">
  <img src="docs/assets/img/banner.png" alt="TNavigator Launcher" width="100%">
</p>

<h1 align="center">TNavigator Launcher</h1>

<p align="center">
  Instalador, atualizador, backup e gerenciador profissional do TNavigator para Windows 10/11.
</p>

<p align="center">
  <a href="https://github.com/lstechinfoti/TNavigator-Launcher/releases/latest">
    <img alt="Download" src="https://img.shields.io/badge/baixar-vers%C3%A3o%20mais%20recente-2563EB?style=for-the-badge&logo=github">
  </a>
  <img alt="Windows" src="https://img.shields.io/badge/Windows-10%20%7C%2011-0078D4?style=for-the-badge&logo=windows">
  <img alt="Launcher" src="https://img.shields.io/badge/Launcher-3.0.0-22C55E?style=for-the-badge">
  <img alt="SHA256" src="https://img.shields.io/badge/SHA256-verificado-F59E0B?style=for-the-badge">
</p>

---

## 📥 Download

Baixe a versão mais recente pela página oficial de Releases:

<p align="center">
  <a href="https://github.com/lstechinfoti/TNavigator-Launcher/releases/latest">
    <strong>⬇️ Baixar TNavigator Launcher</strong>
  </a>
</p>

### Arquivos disponíveis

| Arquivo | Uso recomendado |
|---|---|
| `TNavigatorLauncher_Setup_3.0.0.exe` | Instalador profissional do Windows |
| `TnavigatorLauncher3_3.0.0.zip` | Versão compilada/manual em ZIP |
| `SHA256.txt` | Hash para conferência de segurança |

Link direto do instalador:

```text
https://github.com/lstechinfoti/TNavigator-Launcher/releases/latest/download/TNavigatorLauncher_Setup_3.0.0.exe
```

Link direto da versão ZIP:

```text
https://github.com/lstechinfoti/TNavigator-Launcher/releases/latest/download/TnavigatorLauncher3_3.0.0.zip
```

---

## 🌐 Site oficial

A página de apresentação do projeto está preparada para GitHub Pages.

Depois de ativar o Pages em `/docs`, o site ficará em:

```text
https://lstechinfoti.github.io/TNavigator-Launcher/
```

---

## ✨ Recursos principais

| Recurso | Descrição |
|---|---|
| Instalação MSIX | Instala o TNavigator no Windows 10/11 |
| Atualização | Consulta versão online via GitHub/version.json |
| SHA256 | Validação de integridade dos arquivos |
| Microsoft VCLibs | Verificação e instalação de dependência |
| Certificado | Instalação e remoção controlada |
| Backup | Cópia do LocalState em pasta local/OneDrive |
| Restauração | Restaura backup `.zip` |
| Logs | Filtros, exportação e suporte técnico |
| Diagnóstico | Tela Sobre com informações do ambiente |
| Splash | Tela inicial moderna e personalizada |

---

## 🖥️ Compatibilidade

- Windows 10
- Windows 11
- Arquitetura x64 recomendada
- Permissão de administrador para certificado/dependências
- Internet para download, atualização e manifesto online

---

## 🔐 Verificação SHA256

Após baixar o instalador, confira o hash com:

```powershell
Get-FileHash .\TNavigatorLauncher_Setup_3.0.0.exe -Algorithm SHA256
```

Compare o resultado com o arquivo `SHA256.txt` anexado na Release.

---

## 📸 Prints

Os prints ficam em:

```text
docs/assets/img/
```

O site em `docs/index.html` já possui galeria responsiva com modal.

---

## 📚 Documentação

| Arquivo | Finalidade |
|---|---|
| `INSTALL.md` | Como instalar |
| `SUPPORT.md` | Como solicitar suporte |
| `SECURITY.md` | Orientações de segurança |
| `CHANGELOG.md` | Histórico de versões |
| `RELEASE_DESCRIPTION_v3.0.0.md` | Texto pronto para Release |
| `docs/` | Site oficial para GitHub Pages |

---

## 🛠️ Estrutura recomendada

```text
TNavigator-Launcher/
├── .github/
│   └── ISSUE_TEMPLATE/
├── docs/
│   ├── index.html
│   └── assets/
├── CHANGELOG.md
├── INSTALL.md
├── README.md
├── RELEASE_DESCRIPTION_v3.0.0.md
├── SECURITY.md
├── SUPPORT.md
├── version.json
└── LICENSE.txt
```

---

## 👨‍💻 Desenvolvido por

**LSTechInfo TI**

TNavigator Launcher 3.0 — Windows 10/11 • SHA256 • MSIX • Backup • GitHub Releases
