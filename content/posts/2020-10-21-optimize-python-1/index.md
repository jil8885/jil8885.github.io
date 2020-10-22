---
title: "파이썬 속도를 빠르게-1.Enumerate"
slug: optimize-python-1
generate-card: false
date: 2020-10-21 08:15:00
tags:
    - python
    - optimize
---
저는 회사에서 데이터베이스에 자료를 저장하고, 가공해서 결과물을 만드는 업무를 맡고 있습니다

하지만 기존 자료는 엑셀 파일이 대다수이기 때문에 python과 openpyxl을 조합한 코드가 많죠

보통 사무실에서는 자료를 깔끔해보이기 위한 헤더를 엑셀에 만들어놓아 자료를 입출력하거나 가공하는 입장에서는 해당 행,렬에 대한 예외처리가 필수적입니다

특정 헤더를 제외하고 자료로 활용하기 위해서는 이전엔 다음과 같은 코드를 활용했습니다

시트 내 첫 두 행이 헤더라고 가정하겠습니다

```python
# workbook, worksheet을 load하는 부분을 생략하겠습니다.
row_index = 0

for row in worksheet.rows:
    if row_index > 1:
        print(row) # 해당 row를 가공하는 구문들
    row_index += 1
```

Enumerate에서는 List와 같이 iterate object(반복 객체)를 인자로 받아 아래와 같이 해당 항목에 대한 index를 같이 반환해줍니다.

```python
list_test = ['철수', '영희', '민수']
for index, value in enumerate(list_test):
    print(index, value)
```
```zsh
test@console:~$ python3 test.py
0 '철수'
1 '영희'
2 '민수'
```

이제 enumerate를 이전과 같이 worksheet에 적용하면 어떻게 될까요?

```python
# workbook, worksheet을 load하는 부분을 생략하겠습니다.
for index, row in worksheet.rows:
    if index > 1:
        print(row) # 해당 row를 가공하는 구문들
```

코드에서 index를 위해 만들어둔 변수가 더이상 필요없음을 알 수 있습니다.