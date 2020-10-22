---
title: "데이터베이스 기초-3.모델링"
slug: database-basic-3
generate-card: true
date: 2020-10-22 19:00:00
tags:
    - database
    - basic
---

* 요구사항 개발 프로세스

(1)도출 → (2)분석 → (3)명세 → (4)확인

1. 도출 : 고객과의 의사소통을 통한 요구사항 수렴

2. 분석 : 고객-개발자간 요구 조율 및 범위를 파악하여 소프트웨어 요구사항 작성

3. 명세 : 체계적으로 검토/평가/승인될 수 있는 문서를 작성

4. 확인 : 작성된 서류에 대해 이해관계자가 모두 이해했는지 검증하는 과정

-----------------------

* 개념적 모델
    + 문제에 대한 모델링을 통해 이해도를 높이고 해결책을 도출할 수 있는 방안이 될 수 있음
    + 개념적 모델은 문제 내부의 엔티티와 그들의 관계 및 종속성을 반영해야 함
    + 종류 : Usecase Diagram, Dataflow Model, State Model, Goal-based Model, User Interactions, Object Model, Data Model 등
    + 표기법 : UML

-----------------------

* 개념적 모델링을 통한 데이터베이스 설계

1. 요구사항 수정/분석
2. 개념적 설계(ERD) → (개념적 스키마)
3. 논리적 설계(DBMS) → (DBMS의 구현된 모델로 표현)
4. 물리적 설계 → 실제 데이터베이스 구축

----------------------

* 개념 모델링
    + 요구사항을 통해 핵심 개체를 파악하고 이들간의 관계를 대략적으로 표현
    + 개념 모델링으로부터 개념 ERD 도출


* 개념적 스키마
    + 스키마 작성시 요령
        + 스키마 내 각 개체 및 속성에 대해 잘 설명할 수 있는 이름으로 짓기
        + 복수보다 단수 명사로 사용하기
        + 개체의 이름은 명사로, 관계의 이름은 동사로 지어야 해석시 도움이 됨
        + 스키마는 반복해서 조금씩 개선하면서 작성

---------------------------------------------------------------------------------------------

* 논리 모델링: 개체 및 개체의 종류 및 관계를 어떻게 표현할 것인가에 대한 규정


* 논리 모델링 vs 물리 모델링

| |논리 모델링|물리 모델링|
|-|----------|----------|
|표현|의미에 맞게|실제 컬럼명|
|내용|한글이나 알아보기 쉬운 단어|데이터 타입 및 제약 조건|


* 특징
    - 물리 모델링 단계 → 각 개체 간의 관계에서 나올 수 있는 테이블, DBMS에 생성될 테이블의 실제, 관계에 대한 정의, index, 데이터 타입, 제약 조건을 정의
    - 논리 모델링 → 물리 모델링 순으로 진행
    - 물리 모델링부터는 DBMS에 종속


* 논리 모델링
    - 개념 모델링 단계에서 나온 엔티티에 대한 설계를 구체화, 상세화 하는 단계
    - 모든 업무를 구체적으로 ERD상에 그려내는 단계
    - 특정 데이터 베이스에 맞도록 데이터 타입과 길이를 선정하고 데이터의 크기와 Access패턴을 분석하여 데이터를 분산하는 단계
    - 상세화,구체화 - 인덱스 설계/ 제약조건 설계, 성능을 위한 반정규화 설계

-------------------------------------------------------------------------------------

* 모델링 고려사항
    - 정규화 : 데이터 조작시 이상현상의 발생을 최소화, 데이터중복을 최소화, 대부분 3차 정규화까지만 진행
        + 1차 정규화: 반복적인 속성값이 나타나는 경우, 별도 테이블로 분해하여 중복 제거
        + 2차 정규화: 후보키 전부에 종속적이지 않는 속성을 분리
        + 3차 정규화: 일반 속성에 종속적인 속성을 분리
        + 반정규화: 정규화한 속성을 성능향상과 단순화를 위해 구조를 조정하는 기법
            1. 정규화/비정규화
            2. 정규화한 속성은 무결성, 정합성 우선, 테이블이 많아서 select 과다
            3. 반정규화 속성은 단순화, 성능 우선, 중복된 컬럼이 존재 → insert, update, delete 부하

------------------------------------------------------------------------------------

**관계형 DB**

* 구성
    + 행 → 투플(Tuples) → 개체 간의 관계가 갖는 속성
    + 열 → 애트리뷰트(Attributes) → 각 개체간의 관계
    + 테이블 → 릴레이션(Relations) → 개체 간의 관계의 집합
    
-------------------------------------------------------------------
    
* 표현 방법
    + 관계모델에서 데이터베이스는 릴레이션(테이블)들의 모임으로 표현됨
    + 릴레이션은 투플(행, 레코드)들의 집합으로 표현됨
    + 투플은 애트리뷰트(컬럼, 필드, 혹은 속성)들로 구성됨

-----------------------------------------------------------------

* 관계형 모델 VS ER 다이어그램

| |관계형 모델|ER 다이어그램|
|-|----------|-------------|
|테이블|릴레이션의 집합|개체|
|행|릴레이션|실체화된 개체(인스턴스)|
|열|릴레이션의 속성|개체의 속성|

-----------------------------------------------------------------

* 관계형 DB에서 주 키
    + 레코드의 식별자로 이용하기에 가장 적합한 테이블마다 단 한 개의 키
    + 0~1개 이상의 속성의 집합
    + 고유하게 식별이 가능한 후보키 중 설계자가 정해놓은 키
    + 반드시 주 키를 사용하는 경우가 아니면, 후보키를 사용해도 무방
    + 주 키는 NULL값 불가!, 후보키는 NULL가능
    + 대리키: 주 키가 아닌 후보키

---------------------------------------------------------------
    
* 관계형 DB에서 후보키
    + 관계형 DB의 슈퍼 키 중 더이상 줄일수 없는 키
        - 더 줄이면 해당 키로 두 개 이상의 항목이 선택 가능해짐!
    + 후보키는 식별자로 사용가능
    + 후보키는 주 키로 선정될 수 있는 후보
    + 하나의 관계에서 한 개 이상의 후보키 존재

--------------------------------------------------------------------

* 관계형 DB에서 슈퍼키
    + 관계형 DB에서 행을 식별할 수 있는 한 개 혹은 한 개 이상의 속성의 집합

--------------------------------------------------------------------

* 관계형 DB에서 외래키
    + 관계형 DB에서 다른 테이블의 속성(열)을 선택하여 한 행을 식별할 수 있는 키를 가리킴


* 관계형 DB에서 대리키
    + 관계형 데이터베이스의 관계 모델에서 관계의 ‘후보 키’ 중 기본 키로 선정되지 않은 키를 가리킴


-------------------------------------------------------


* 무결성 제약 조건 - 데이터베이스 내의 데이터는 정확해야 하는데 이를 지키기 위한 제약

* 무결성 제약조건의 종류
    - NOT NULL : NULL을 허용하지 않음.
    - UNIQUE : 중복된 값을 허용하지 않음.
    - PRIMARY KEY : NULL을 허용하지 않고 중복된 값을 허용하지 않음.
    - FOREIGN KEY : 참조되는 테이블의 컬럼의 값이 존재하면 허용함.
    - CHECK : 데이터값이 설정한 범위, 조건을 만족해야 허용함.