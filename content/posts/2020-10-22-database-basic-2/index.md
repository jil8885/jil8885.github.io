---
title: "데이터베이스 기초-2.DBMS"
slug: database-basic-2
generate-card: true
date: 2020-10-22 16:35:00
tags:
    - database
    - basic
    - DBMS
---

데이터베이스를 다룰 때는 보통 SQL 구문을 통해 조작을 하곤 합니다.

하지만 SQL은 데이터베이스를 직접 조작하는게 아닌 DBMS를 통해 데이터베이스를 조작하는 방식으로 이루어집니다.

집을 사고 팔 때 대부분의 경우에서 부동산 중개인이 도와주는 것과 비슷하다고 생각하면 될 것 같습니다.

-----------------------------------------------------------------------------------------

**직접 데이터베이스를 조작하는 것 대비 DBMS의 장점**
* DBMS란 사용자와 데이터베이스 사이에서 사용자의 요구에 따라 정보를 생성해 주고 데이터베이스를 관리해 주는 소프트웨어로서, 
    기존 파일시스템에 정보를 저장할 때의 문제였던 데이터의 중복성과 종속성 등의 문제를 해결하기 위한 시스템으로 여러 프로그램에서
    하나의 데이터베이스를 공유할 수 있도록 해줍니다.
* DBMS는 데이터베이스의 구성, 접근방법 , 유지관리에 대한 모든 관리와 책임을 갖고 있어 사용자의 데이터베이스에 대한 폭넓은 접근을 가능케 합니다.

-----------------------------------------------------------------------------------------

**DBMS가 사용자에게 제공해주는 기능** 

* 정의(Definition)
    - Table을 생성할 때, 어떤 정보가 들어가는지에 대해 정할 수 있도록 하는 기능입니다.
    - 프로그램이 데이터베이스 내 필요한 정보의 종류와 구조에 대한 정의, 이용 방식, 제약 조건 등을 명시할 수 있도록 해줍니다.

    - Table 간의 관계를 정의하여, 데이터의 무결성을 보장할 수 있는 기능입니다.
    - 데이터와 데이터의 관계를 명확하게 명세할 수 있어야 하며 원하는 데이터 연산은 무엇이든 명세할 수 있어함


* 조작(Manipulation)
    - Table 생성 후, 내부의 각 데이터에 대한 추가, 수정, 삭제 등을 할 수 있도록 합니다.


* 제어(Control)
    - 데이터베이스 내부 모든 자료 수정에 대해 데이터 무결성을 유지할 수 있도록 합니다
    - 사용자 별로 접근할 수 있는 범위를 다르게 하여 보안을 유지할 수 있도록 합니다.
    - 모든 데이터 조작 행위에 대해 조작 이후 데이터의 정확성을 유지할 수 있도록 병행 제어를 가능케 합니다.


----------------------------------------------------------------------------------------

**DBMS를 운용하는 것이 데이터베이스를 직접 제어하는 것 대비 갖는 장점**

* 데이터 조작시, 중복된 데이터를 최소화하여 데이터의 일치성 및 데이터를 저장할 공간 낭비를 줄여줍니다.
* 사용자별로 권한을 부여하여, 권한이 없는 사용자의 데이터 접근을 방지하여 보안성을 높여줍니다.
* 데이터 조작 행위(트랜잭션)을 관리하여 항상 일관성을 갖도록 유지해줍니다.
* 다양한 사용자 인터페이스를 통해 편리하게 데이터베이스에 접근 및 조작할 수 있도록 해줍니다.
* 각 Table 간의 관계를 저장하여, 각 데이터 간의 관계를 쉽게 알 수 있도록 합니다.
* 여러 사용자 또는 프로그램에서의 접근시, 각 사용자가 같은 데이터를 공유하고 접근할 수 있도록 보장해줍니다.

--------------------------------------------------------------------------------------

**DBMS를 운용하는 것이 데이터베이스를 직접 제어하는 것 대비 갖는 단점**
* DBMS 라이선스 및 DBMS를 구동할 추가적인 하드웨어가 필요하여 비용이 증가합니다.
* 데이터베이스 구조가 간단하고 추가적으로 변동할 가능성이 적은 경우,
    DBMS를 사용함으로써 증가하는 시간이 실시간 데이터 처리에 부적합할 경우,
    같은 데이터베이스를 한 사용자만 사용할 경우 DBMS 사용이 불필요합니다.
* 최근, 실시간 데이터 처리에 특화된 DBMS가 나오고 있어 활용이 가능합니다.

---------------------------------------------------------------------------------------

**DBMS의 종류**

||Oracle|MySQL|MSSQL|
|-|-----|-----|-----|
|개발사|오라클|썬마이크로시스템즈>오라클|Microsoft|
|OS|Win, Linux, Unix|Win, Linux, Unix|Win, Linux, Unix|
|특징|대량의 데이터 처리 특화, 글로벌 점유율 1위|무료(상업적 이용:유료)|윈도우즈 특화|
|소스 공개|X|O|X(리눅스 버전만 O)|

----------------------------------------------------------------------------------------

**DBMS의 구성 요소**
* 엔티티
    - ex. 학생, 과목, 강좌 등
    - 실제 데이터베이스에선 각 Table로, 프로그램에선 Class로 구분됩니다.


* 스키마
    - 데이터베이스의 구조 및 각 Table 별 명세를 기록한 메타데이터의 집합
    - 시간에 따라 변하지 않는 특성을 가집니다.


* 인스턴스
    - Entity(Class)의 실체화 된 하나의 객체(Object)
    - ex. 강좌 Class의 프로그래밍 기초 수업 (Object)


* E-R 다이어그램
    - 각 Entity간의 Relation을 도식화한 그래프
    - 실제 데이터베이스에선 Entity가 Table로, 각 relation마다 foreign key로 구현

----------------------------------------------------------------------------------------

**DBMS의 사용자**

* 데이터베이스 관리자(DBA)
* 데이터베이스 설계자
* 최종 사용자
    - 캐주얼 사용자
    - 초보 사용자
    - 전문 사용자


* 시스템 분석가/응용 프로그래머
* DBMS 설계 및 구현자
* 도구 개발자
* 운영 및 유지 보수 요원