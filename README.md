# 📌 Portfólio Pessoal — Matheus Trajano

## 📖 Sobre o Projeto

Este projeto é um portfólio pessoal desenvolvido utilizando **HTML, CSS e JavaScript**, com o objetivo de apresentar informações profissionais, experiências, formação acadêmica e formas de contato de maneira moderna, responsiva e intuitiva.

O site funciona como uma vitrine profissional, permitindo que recrutadores, empresas e visitantes conheçam melhor o perfil de **Matheus Trajano**, seus projetos e sua trajetória acadêmica.

---

## 🚀 Tecnologias Utilizadas

* **HTML5** → Estrutura da página
* **CSS3** → Estilização e responsividade
* **JavaScript** → Interatividade e animações
* **Font Awesome** → Ícones sociais e visuais

---

## 📂 Estrutura do Projeto

```bash
📁 Projeto
│
├── portifolio.html
├── portifolio.css
├── portifolio.js
└── Imagens/
```

### Arquivos

| Arquivo           | Função                               |
| ----------------- | ------------------------------------ |
| `portifolio.html` | Estrutura principal do site          |
| `portifolio.css`  | Estilização, layout e responsividade |
| `portifolio.js`   | Animações e menu mobile              |
| `Imagens/`        | Fotos utilizadas no portfólio        |

---

## 🎯 Funcionalidades

### ✅ Navegação Inteligente

O cabeçalho possui links para:

* Sobre
* Experiência
* Formação Acadêmica
* Contato

Ao clicar em qualquer item, o usuário é levado diretamente à seção correspondente.

---

### ✅ Efeito de Digitação

Na apresentação inicial existe uma animação que faz o texto:

```html
Olá, eu sou Matheus Trajano
```

ser exibido letra por letra.

Implementado em JavaScript:

```javascript
ativaLetra(texTo);
```

Essa função percorre cada caractere e o exibe com um pequeno atraso, simulando uma máquina de escrever.

---

### ✅ Cursor Piscando

Após a animação de digitação, um cursor:

```css
|
```

fica piscando continuamente através da animação:

```css
@keyframes pisca
```

---

### ✅ Menu Responsivo

Em dispositivos móveis, o menu tradicional é substituído por um ícone:

```html
☰
```

Ao clicar nele, o JavaScript adiciona ou remove a classe:

```javascript
active
```

mostrando ou ocultando os links de navegação.

---

### ✅ Seção Sobre

Apresenta:

* Foto de perfil
* Nome
* Redes sociais
* Botão de contato

Além de links diretos para:

* GitHub
* LinkedIn

---

### ✅ Seção Experiência

Exibe experiências e projetos desenvolvidos:

#### 🧠 Projeto NEURON

Projeto focado em acessibilidade através de Interface Homem-Máquina (HMI), permitindo interação por comandos mentais e sensores.

#### 💪 FitPlanner

Sistema voltado para organização de treinos e hábitos saudáveis, utilizando:

* Python
* JavaScript
* HTML
* CSS

---

### ✅ Formação Acadêmica

Apresenta a trajetória educacional:

#### 🎓 CESAR School

Curso:

```txt
Ciência da Computação
```

Metodologia:

```txt
PBL (Problem Based Learning)
```

#### 🏫 Colégio Fazer Crescer

Informações sobre formação básica e desenvolvimento acadêmico.

---

### ✅ Contato

Área destinada ao contato profissional contendo:

* Endereço de e-mail
* Ícone visual de e-mail
* Botão para envio de mensagens

---

### ✅ Responsividade

O projeto possui media queries para:

```css
1280px
768px
600px
```

Adaptando:

* Menus
* Imagens
* Grid de experiências
* Campos de contato

para celulares, tablets e computadores.

---

## 🎨 Características Visuais

* Design moderno
* Layout centralizado
* Efeito Glassmorphism no cabeçalho
* Gradientes em azul e azul claro
* Ícones interativos
* Animações suaves
* Barra de rolagem personalizada

---

## ⚙️ Como Executar

1. Baixe os arquivos do projeto.
2. Mantenha a seguinte estrutura:

```bash
Projeto/
│
├── portifolio.html
├── portifolio.css
├── portifolio.js
└── Imagens/
```

3. Abra o arquivo:

```bash
portifolio.html
```

em qualquer navegador moderno.

---

## 📱 Compatibilidade

Compatível com:

* Google Chrome
* Microsoft Edge
* Firefox
* Opera
* Navegadores Mobile

---

## 👨‍💻 Autor

**Matheus Trajano**

🔗 GitHub: `https://github.com/trajanola`

🔗 LinkedIn: `https://www.linkedin.com/in/m-trajano/`

---

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e de apresentação profissional. Sinta-se livre para utilizar como inspiração em seus próprios projetos, mantendo os devidos créditos ao autor.
