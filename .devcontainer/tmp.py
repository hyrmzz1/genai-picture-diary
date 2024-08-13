import requests
import json
from deep_translator import GoogleTranslator
import time

# 1. json data -> 영어로 번역
def translate_data(data):
    print('번역 시작')
    # data = json.loads(data)
    # translated_data = GoogleTranslator(src='ko', dest='en').translate(data['content'])
    translated_data = GoogleTranslator(src='ko', dest='en').translate(data)
    # translated_data += ', outline drawing, coloring book style, black and white, no fill, only lines'
    translated_data += ', for kids, cute, playful, simple, fun, minimal facial details'
    print(f'번역 성공')
    print(f'입력: {data}')
    print(f'출력: {translated_data}')
    return translated_data
    
# 2. 프롬프트 생성
def create_prompt(translated_data):
    # 일단 그냥 입력으로 바로 넣음
    negative_prompt = ''
    return translated_data, negative_prompt
    
# 3. 이미지 생성
REST_API_KEY = 'c9c36505ba27a27690ce546b4a632592'
def t2i(prompt, negative_prompt):
    print('이미지 생성 시작')
    r = requests.post(
        'https://api.kakaobrain.com/v2/inference/karlo/t2i',
        json = {
            "version": "v2.1",  # 필수 -> 2.1 or 2.0
            "prompt": prompt,   # 필수 -> 이미지 묘사 제시어 = 영어(max_len = 2048)
            "negative_prompt": negative_prompt, # 선택 -> 부정 제시어 = 영어(max_len = 2048)
            "height": 1024,     # 필수 -> 2.1 = 8배수(768~1280, 1024권장)
            "width": 1024,       # 필수 -> 2.0 = 8배수(384~640, 512권장)
            # image_format -> webp(기본), jpeg, png
            # image_quality -> 저장 품질(1~100, 70(기본))
            "samples": 4, # samples -> 생성 개수(1~8, 1(기본))
            # return_type -> base64_string(Base64 인코딩), url(기본값)
        },
        headers = {
            # 'Authorization': f'KakaoAK {current_app.config.get("CLIENT_ID")}',
            'Authorization': f'KakaoAK {REST_API_KEY}',
            'Content-Type': 'application/json'
        }
    )
    # 응답 JSON 형식으로 변환
    response = json.loads(r.content)
    print('이미지 생성 끝')
    return response
    
# 1-3 전체 과정 수행
def create_image_process(data):
    start_time = time.time()
    translated_data = translate_data(data)
    prompt, negative_prompt = create_prompt(translated_data)
    image_response = t2i(prompt, negative_prompt)
    end_time = time.time()
    elapsed_time = end_time - start_time
    print(f'프로세스 걸린 시간: {elapsed_time:.2f}초')
    return image_response

data = input('일기를 입력하세요: ')
# data = {
#     'content': '가족, 축구, 경기장, 일요일'
# }
# data = json.dumps(data, ensure_ascii=False)
image_response = create_image_process(data)

# 응답의 첫 번째 이미지 생성 결과 출력하기
# return_type 파라미터 값에 따라 이미지 파일을 Base64 인코딩한 값, 
# 또는 이미지 파일 URL 제공
# 이미지 파일 URL은 응답 시각으로부터 10분간 유효
for i, image in enumerate(image_response.get('images')):
    image_url = image.get("image")
    print(f'{i}번째 이미지 url: {image_url}')