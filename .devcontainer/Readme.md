# 개발 환경 설정
## 1. Dev Containers Extensions 사용
![Dev Containers Extension](Readme_Image/extension.png)

## 2. work directory(프로젝트 root 폴더) 이동
### 파일 -> 작업 영역에 폴더 추가 선택 -> DiaryTimeCapsule 선택
## 3. 명령 팔레트 열기
### windows: ctrl + shift + p
### mac: cmd + shift + p  
## 4. Dev Containers Extensions에서 Reopen in Container 클릭
![Dev Containers Options](Readme_Image/option.png)

---
<br>

# 개인 PC 에서 Dev Container 백엔드 서버 실행 - by 구혜리

0. 위의 Dev Container 확장 버전을 설치한다.
1. 로컬 작업 폴더에 깃클론하여 소스를 로컬 받는다.
![d1](https://github.com/user-attachments/assets/2b3fa7b2-b719-4ae3-b229-ce82025b5122)
![d2](https://github.com/user-attachments/assets/410718a5-12a2-4c88-92b3-4f3793d39ee6)
![d3](https://github.com/user-attachments/assets/21b2edb3-51e4-4af8-997d-51d3ac8d378e)
![d4](https://github.com/user-attachments/assets/00045558-cd62-4769-85b4-3881f936028e)
![d5](https://github.com/user-attachments/assets/b9ea7575-015a-4fa7-af6e-3a497b879927)

2. Dev Container에서 작업 하기 위해 왼쪽아래 초록부분을 클릭하여 reopen in container 메뉴를 클릭한다.
![d6](https://github.com/user-attachments/assets/f52df856-848e-48dc-91c5-65702cbecb04)

3. 초록부분이 Dev Container로 이동된것을 확인하고 오른쪽 하단 터미널 명령어대로 flask_app/src 폴더 아래에 db 폴더를 생성한다.
![d7](https://github.com/user-attachments/assets/9ebb10a1-276e-4f33-ae9a-f3cde85cfc16)
4. flask_app/ 폴더로 돌아와서 app.py 파일을 실행한다
![d8](https://github.com/user-attachments/assets/495e1340-c13a-43f8-93ef-5056935b28a3)
5. 서버 실행 한 주소로 접속해 본다.
![d10](https://github.com/user-attachments/assets/eae29e9e-910b-4b6d-aa8e-9a1ab2900ea0)
![d11](https://github.com/user-attachments/assets/8544c51f-54ef-4104-a261-08d917b6442f)

---
<br>
# 브랜치 전략

0. 코드 병합은 팀장만 진행

1. main - 배포 가능 상태의 코드 유지

2. dev - 다음 배포를 위해 개발 중인 코드

3. feature/[front or back or ai]/[기능명] - 특정 기능 또는 작업을 개발 -> dev로 병합

4. release/[버전] - 배포 준비를 위한 브랜치
