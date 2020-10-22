---
title: "파이썬 속도를 빠르게-2.List Comprehension"
slug: optimize-python-2
generate-card: true
date: 2020-10-21 20:15:00
tags:
    - python
    - optimize
---

저는 회사에서 데이터베이스에 자료를 저장하고, 가공해서 결과물을 만드는 업무를 맡고 있습니다

하지만 기존 자료는 엑셀 파일이 대다수이기 때문에 python과 openpyxl을 조합한 코드가 많죠

기존 엑셀로 파일로 저장된 파일을 데이터베이스 저장 등 활용을 위해서는 시트 내의 값이 필요합니다

이번 글에선 지난 글에서 기록한 enumerate를 사용해보려고 합니다

Enumerate에서는 List와 같이 iterate object(반복 객체)를 인자로 받아 아래와 같이 해당 항목에 대한 index를 같이 반환해줍니다


| 학번  |   이름  |
|------|---------|
|2017|김영희|
|2019|김철수|

위와 같은 시트에서 [['2017', '김영희'], ['2019', '김철수']]와 같이 Python의 배열 형태로 얻고자 합니다

```python
# workbook, worksheet을 load하는 부분을 생략하겠습니다.
list_user = [] # 출력할 배열입니다.

for index, row in worksheet.rows:
    cell_values = []
    if index > 1: # 지난 글에서 기록한 것처럼, 헤더는 생략하기 위함입니다.
        for cell in row: # openpyxl에서는 한 행을 배열로 반환합니다.
            cell_values.append(cell.value)
    list_user.append(cell_values)

print(list_user)
```

각 셀을 for문을 통해 차례대로 value를 얻는 것을 확인할 수 있습니다.


List comprehension을 통해 값을 얻어보겠습니다

```python
# workbook, worksheet을 load하는 부분을 생략하겠습니다.
list_user = [] # 출력할 배열입니다.

for index, row in worksheet.rows:
    if index > 1: # 지난 글에서 기록한 것처럼, 헤더는 생략하기 위함입니다.
    list_user.append([cell.value for cell in row])

print(list_user)
```

```python
# workbook, worksheet을 load하는 부분을 생략하겠습니다.
print([[cell.value for cell in row] for row in worksheet.rows])
```

각 셀별로 값을 얻을 때 필요한 list 및 for문을 없애거나, 단 한줄로 시트 내 모든 값을 얻을 수 있습니다.