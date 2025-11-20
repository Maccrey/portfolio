# GitHub Pages 배포 가이드

Next.js 15 기반의 정적 포트폴리오 사이트(`web-portfolio/`)를 GitHub Pages(`gh-pages` 브랜치)로 배포할 때 따라야 할 절차를 정리했습니다. 기본적으로 GitHub Actions가 모든 품질 점검과 배포를 자동으로 수행하지만, 필요 시 수동 배포도 가능합니다.

## 1. 사전 준비
- Node.js 20.x와 npm 10.x 이상을 사용합니다. 로컬에서 `node -v`, `npm -v`로 버전을 확인하세요.
- 저장소 루트에서 `web-portfolio/.env.local`을 만들어 `NEXT_PUBLIC_BASE_PATH` 등 필요한 값을 정의합니다. GitHub Pages에서 `https://username.github.io/repo` 형태로 호스팅한다면 `NEXT_PUBLIC_BASE_PATH=repo`를 설정해야 정적 자원이 올바른 경로를 가리킵니다.
- GitHub Pages 설정(Settings → Pages)에서 **Branch**를 `gh-pages`로, **Folder**를 `/ (root)`로 맞춰둡니다. 커스텀 도메인이 있다면 동일한 화면에서 추가합니다.

## 2. 기본 배포 플로우 (GitHub Actions)
1. `web-portfolio/` 디렉터리에서 개발/테스트 작업을 진행합니다.
2. 변경 사항을 `main` 브랜치로 push 하면 `.github/workflows/ci.yml`이 실행됩니다.
3. 워크플로우는 아래 순서로 동작합니다.
   - `npm ci`
   - `npm run lint`
   - `npm run typecheck`
   - `npm run test:unit`
   - `npm run build` (Next.js `output: "export"` → `out/` 생성)
   - Playwright 브라우저 설치 후 `npm run test:e2e`
   - 모든 단계가 통과하면 `peaceiris/actions-gh-pages`가 `out/` 폴더를 `gh-pages` 브랜치 최상단에 force push
4. GitHub Pages가 `gh-pages` 브랜치를 감지해 사이트를 자동으로 퍼블리시합니다.

## 3. 수동 배포 (필요 시)
GitHub Actions를 사용할 수 없거나 임시로 빠르게 배포해야 할 때 아래 절차로 직접 배포할 수 있습니다.

```bash
cd web-portfolio
npm install
npm run build

# gh-pages 브랜치를 위한 임시 worktree 생성
git worktree add ../gh-pages-dist gh-pages || git worktree add -B gh-pages ../gh-pages-dist gh-pages
rsync -av --delete out/ ../gh-pages-dist/
touch ../gh-pages-dist/.nojekyll

cd ../gh-pages-dist
git add .
git commit -m "chore: manual deploy"
git push origin gh-pages

# 정리
cd ../web-portfolio
git worktree remove ../gh-pages-dist
```

> **참고**: `git worktree`를 사용하면 현재 작업 디렉터리를 지우지 않고도 정적 아티팩트를 배포할 수 있습니다. 가능하면 GitHub Actions를 사용하는 것이 가장 안전합니다.

## 4. 확인 및 문제 해결
- **빌드 확인**: `out/index.html`을 로컬 브라우저로 열어 기본 경로가 정상인지 확인합니다.
- **Base Path 이슈**: 리포지토리 이름을 포함한 경로에서 404가 발생하면 `next.config.ts`의 `basePath`와 `.env.local`의 `NEXT_PUBLIC_BASE_PATH` 값을 다시 확인하세요.
- **GitHub Pages 캐시**: 배포 후 변경 사항이 안 보이면 Pages 설정 화면 하단의 `Visit site` 우측에서 `Enforce HTTPS`가 켜져 있는지 확인하고, 브라우저 캐시를 비우거나 쿼리 파라미터를 붙여 새로 고침합니다.
- **워크플로우 실패**: Actions 로그에서 실패 단계의 명령을 로컬에서 그대로 실행해 재현합니다. 예: `npm run test:e2e` 실패 시 `PLAYWRIGHT_BYPASS_CSP=1 npm run test:e2e`로 돌려 확인합니다.

이 문서만 따라도 GitHub Pages 배포 과정을 처음부터 끝까지 반복할 수 있습니다. 추가 자동화나 커스텀 도메인 설정이 필요하면 README와 `next.config.ts` 주석을 참고하세요.
