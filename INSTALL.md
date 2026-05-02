# Guia de Instalação — TNavigator Launcher 3.0.0

Este guia explica como instalar o **TNavigator Launcher** no Windows.

---

## 1. Baixar o instalador

Acesse a release mais recente:

```text
https://github.com/lstechinfoti/TNavigator-Launcher/releases/latest
```

Baixe o arquivo:

```text
TNavigatorLauncher_Setup_3.0.0.exe
```

---

## 2. Verificar SHA256

Baixe também o arquivo:

```text
SHA256.txt
```

Hash esperado da versão atual:

```text
3F2B30DE919D3FB1382C102C8CBBB6C7163D6143E55E9D9FC0AA73A5CC35D0E2
```

No PowerShell, rode:

```powershell
Get-FileHash .\TNavigatorLauncher_Setup_3.0.0.exe -Algorithm SHA256
```

Compare o resultado com o hash informado no `SHA256.txt`.

---

## 3. Instalar

Execute o arquivo:

```text
TNavigatorLauncher_Setup_3.0.0.exe
```

Durante a instalação, o instalador pode:

- Instalar o launcher em `Program Files`.
- Criar atalho no Menu Iniciar.
- Criar atalho na Área de Trabalho.
- Abrir o launcher ao finalizar.

---

## 4. Primeira abertura

Na primeira abertura, o launcher pode verificar:

- Configurações.
- Tema visual.
- Logs.
- Instalação local do TNavigator.
- Manifesto online.
- Segurança SHA256.

---

## 5. Permissões de administrador

Algumas ações podem solicitar permissão de administrador:

- Instalação de certificado.
- Remoção de certificado.
- Instalação/atualização do pacote.
- Operações protegidas do Windows.

---

## 6. Desinstalar

Para desinstalar o launcher:

```text
Configurações do Windows > Aplicativos > Aplicativos instalados
```

Procure por:

```text
TNavigator Launcher
```

Clique em **Desinstalar**.

---

## 7. Suporte

Para suporte, envie:

- Print do erro.
- Log exportado.
- Diagnóstico copiado na tela **Sobre**.
- Versão do Windows.
