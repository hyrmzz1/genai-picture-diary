# Structure
```
frontend
├── node_modules
├── public
├── src
│   ├── assets
│   │   │   └── css
│   │   │       ├── fonts.css
│   │   │       ├── index.css
│   │   │       └── tailwind.css
│   ├── components
│   │   ├── html
│   │   │   ├── Button.tsx
│   │   │   ├── CheckBox.tsx
│   │   │   └── Input.tsx
│   │   ├──── Layout.tsx
│   │   ├──── Gnb.tsx
│   ├── pages
│   │   ├── Login.tsx
│   │   └── Home.tsx
│   ├── router
│   │   └── Index.tsx
│   ├── server
│   ├── stores
│   ├── type
│   │   └── post.d.ts
│   ├── App.tsx
│   └── main.tsx
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```
## **node_modules/**

- 프로젝트에서 사용 중인 모든 npm 패키지가 저장되는 디렉토리입니다.
- 이 폴더는 프로젝트의 모든 의존성을 포함합니다. **`npm install`** 명령어를 실행하면 **`package.json`** 파일에 명시된 모든 의존성이 이 폴더에 설치됩니다.
- 일반적으로 이 폴더는 버전 관리 시스템(Git 등)에 포함되지 않습니다.

## **public/**

- 정적 파일을 포함하는 폴더입니다. 이 폴더의 파일은 빌드 과정에서 그대로 복사되어 최종 빌드에 포함됩니다.
    - 이 디렉토리에 있는 파일은 그대로 서버에 제공됩니다. 빌드 과정에서 변환이나 **번들링되지 않으며**, 파일의 경로가 고정되어 있습니다.
- `public/logo.png` 파일은 애플리케이션에서 `/logo.png` 경로로 직접 접근할 수 있습니다.
- 로고, 파비콘, 매니페스트 파일 등 변형되지 않고 단순히 제공되는 파일을 포함합니다.

## **src/**

- 애플리케이션의 소스 코드가 포함된 폴더입니다. 대부분의 개발 작업이 이 폴더 내에서 이루어집니다.

### **src/assets/**

- 이미지, 폰트 등의 정적 자산을 포함합니다.
- 이 디렉토리에 있는 파일은 소스 코드와 함께 번들링됩니다. 이 파일들은 일반적으로 컴포넌트나 모듈과 관련되어 있습니다. 사용되지 않는 자산은 최종 번들에서 제거될 수 있습니다.
- 이미지 압축, 해시 추가, 코드 스플리팅 등 빌드 최적화가 가능합니다.

> **fonts.css**
> 
> - 폰트 관련 스타일을 정의한 파일입니다.
> 
> **index.css**
> 
> - 전체 애플리케이션에 적용되는 스타일을 정의한 파일입니다.
> - fonts.css와 tailwind.css를 import하고 있습니다.
> 
> **tailwind.css**
> 
> - Tailwind CSS 설정을 정의한 파일입니다.
> - 파일에 커스텀한 스타일을 작성하면 class로 사용할 수 있습니다.

### **src/components/**

- 재사용 가능한 React 컴포넌트를 포함하는 디렉토리입니다.

> **src/components/html/**
> 
> - 기본 HTML 요소들을 커스터마이징한 컴포넌트를 포함하는 디렉토리입니다.
> - 버튼/체크박스/입력필드 컴포넌트 등이 속합니다.
> 
> **src/components/pages/**
> 
> - 애플리케이션의 각 페이지를 정의하는 디렉토리입니다.
> - 로그인 페이지, 홈 페이지 컴포넌트 등이 속합니다.

### **src/router/**

- 애플리케이션의 라우팅을 정의하는 디렉토리입니다.

> **Index.tsx**: 라우터 설정 파일입니다.
> 

### **src/stores/**

- Zustand를 사용한 상태 관리를 위한 스토어 파일들을 포함하는 디렉토리입니다.

### **src/server/**

- 가상의 서버 환경을 구축하기 위한 디렉토리입니다.

### **src/type/**

- TypeScript 타입 정의 파일들을 포함하는 디렉토리입니다.

## **루트**

### **main.jsx**

애플리케이션의 진입점 파일입니다. ReactDOM을 사용하여 **`App`** 컴포넌트를 HTML에 렌더링합니다.

### **App.jsx**

- 메인 애플리케이션 컴포넌트 파일입니다. React 컴포넌트 구조의 시작점입니다.

### **index.html**

- 최상위 디렉토리에 있는 HTML 파일입니다. Vite는 이 파일을 기반으로 빌드하고 애플리케이션을 시작합니다.
- **`public`** 폴더에 있는 경우도 있습니다.

### **package.json**

- 프로젝트의 메타데이터와 의존성을 정의하는 파일입니다.
- 스크립트, 의존성, 개발 의존성, 프로젝트 이름, 버전 등의 정보가 포함되어 있습니다.

### **vite.config.ts**

- Vite의 설정 파일입니다. 이 파일을 통해 Vite의 다양한 설정을 커스터마이즈할 수 있습니다.

----

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
